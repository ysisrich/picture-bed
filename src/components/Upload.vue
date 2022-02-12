<template>
	<n-upload :action="action" accept="image/*" v-model:file-list="fileList" :multiple="false" :show-file-list="false"
		@before-upload="beforeUpload" :customRequest="customRequest">
		<n-upload-dragger>
			<div style="margin-bottom: 12px;">
				<n-icon size="50" :depth="3">
					<CloudUploadOutlineIcon />
				</n-icon>
			</div>
			<n-text style="font-size: 16px;"> {{$t('clickOrDragToUpload')}}</n-text>
			<n-p depth="3" style="margin-top: 8px;"> {{$t('pictureType')}} </n-p>
		</n-upload-dragger>
	</n-upload>
</template>

<script>
	import { reactive, toRefs, watch } from 'vue'
	import { CloudUploadOutline as CloudUploadOutlineIcon } from '@vicons/ionicons5'
	import GenNonDuplicateID from '@/utils/uniqueID'
	import Api from "@/service/api";
	import { useUser, useContent } from '@/store/index'
	import { useI18n } from 'vue-i18n'


	export default {
		name: 'Index',
		components: {
			CloudUploadOutlineIcon
		},

		setup() {

			let globalData = reactive({
				action: '',
				fileList: []
			})

			const imgType = ['image/jpeg', 'image/png', 'image/gif', 'image/jpeg', 'image/x-icon'];
			const MESSAGE = {}
			const { t, locale } = useI18n()
			watch(locale, () => {
				MESSAGE.uploadLimit1 = t('message.uploadLimit1')
				MESSAGE.uploadLimit2 = t('message.uploadLimit2')
				MESSAGE.uploadLimit3 = t('message.uploadLimit3')
				MESSAGE.uploadLimit4 = t('message.uploadLimit4')
				MESSAGE.uploadLimit5 = t('message.uploadLimit5')
				MESSAGE.uploadSuccess = t('message.uploadSuccess')
				MESSAGE.underDevelopment = t('message.underDevelopment')
			}, { immediate: true })


			// 上传前 
			const beforeUpload = async ({ file, fileList }) => {
				const { name, size, type } = file.file
				// console.log(name,size,type)
				// console.log('文件列表', fileList)
				useContent().setContent({ content: '' })

				// if(useUser().repoType == 'OSS' || useUser().repoType == 'upyun'){
				// 	window.$message.info(MESSAGE.underDevelopment)
				// 	return false
				// }

				// 限制图床仓库大小
				let res = await useUser().getUserRepositoryInfo()
				if (res.status == 200) {
					if (res.data.size > 1024 * 1024) {
						console.log(res.data.size)
						window.$notification.error({
							content: MESSAGE.uploadLimit1,
						})
						return false
					}
				}

				// 游客身份 限制次数
				if (useUser().userType == 0 && useUser().experienceNumber == 0) {
					window.$notification.error({
						content: MESSAGE.uploadLimit2,
					})
					return false
				}

				// 限制图片格式
				if (!imgType.includes(type) || !/\.(jpe?g|png|gif|ico)$/i.test(name)) {
					$message.error(MESSAGE.uploadLimit3)
					return false
				}

				// 限制图片大小 2M
				if (size > 1024 * 1024 * 2) {
					$message.error(MESSAGE.uploadLimit4)
					return false
				}

				// Gitee限制图片大小 1M
				if (useUser().repoType == 'Gitee' && size > 1024 * 1024 * 1) {
					$message.error(MESSAGE.uploadLimit5)
					return false
				}

				return true
			}

			// 上传
			const customRequest = ({
				file,
				data,
				headers,
				withCredentials,
				action,
				method,
				onFinish,
				onError,
				onProgress
			}) => {
				const { name, size, type } = file.file

				// File转Base64
				let reader = new FileReader();
				reader.readAsDataURL(file.file)
				reader.addEventListener("load", function () {

					useUser().upload({
						path: `${GenNonDuplicateID(6)}.${name.split('.')[1]}`,
						content: reader.result.split(',')[1]
					}).then(res => {
						const repoInfo = useUser().git.repoInfo
						if (res.status == 201 && useUser().repoType == 'Github') {
							window.$message.success(MESSAGE.uploadSuccess)
							const href = `https://cdn.jsdelivr.net/gh/${repoInfo.owner}/${repoInfo.repo}/${res.data.content.path}`
							console.log(href)
							useContent().setContent({ content: href })
							useUser().userType == 0 && useUser().visitorUpload()
							onFinish(res)
						} else if (res.status == 201 && useUser().repoType == 'Gitee') {
							window.$message.success(MESSAGE.uploadSuccess)
							const href = `https://gitee.com/ysisno1/${repoInfo.repo}/raw/master/${res.data.content.path}`
							console.log(href)
							useContent().setContent({ content: href })
							useUser().userType == 0 && useUser().visitorUpload()
							onFinish(res)
						} else {
							onError(res)
						}
					})
				}, false);
			}


			return {
				...toRefs(globalData),
				beforeUpload,
				customRequest
			}
		}
	};
</script>

<style lang="scss" scoped>
	::v-deep(.n-upload-trigger) {
		display: block;

		.n-upload-dragger {
			margin: 10px auto;
			padding: 60px 24px;
		}
	}
</style>