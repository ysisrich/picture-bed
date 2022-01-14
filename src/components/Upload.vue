<template>
	<n-upload :action="action" accept="image/*" v-model:file-list="fileList" :multiple="false" :show-file-list="false"
		@before-upload="beforeUpload" :customRequest="customRequest">
		<n-upload-dragger>
			<div style="margin-bottom: 12px;">
				<n-icon size="50" :depth="3">
					<CloudUploadOutlineIcon />
				</n-icon>
			</div>
			<n-text style="font-size: 16px;">点击或者拖动文件到该区域来上传</n-text>
			<n-p depth="3" style="margin: 8px 0 0 0;">
				支持的图片格式有png、jpg、jpeg、gif、ico等，单张图片大小不能超过50M
			</n-p>
		</n-upload-dragger>
	</n-upload>
</template>

<script>
	import { reactive, toRefs } from 'vue'
	import { CloudUploadOutline as CloudUploadOutlineIcon } from '@vicons/ionicons5'
	import GenNonDuplicateID from '@/hooks/uniqueID'
	import { createNewFileOrUpdateFile, _createNewFileOrUpdateFile } from '@/service/api';
	import { useUser, useContent } from '@/store/index'


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




			// 上传前 
			const beforeUpload = async ({ file, fileList }) => {
				const { name, size, type } = file.file
				// console.log(name,size,type)
				// console.log('文件列表', fileList)
				useContent().setContent({ content: '' })

				// 限制图床仓库大小
				let res = await useUser().getUserRepositoryInfo()
				if (res.status == 200) {
					if (res.data.size > 1024 * 1024) {
						console.log(res.data.size)
						window.$notification.error({
							content: `单个图床仓库大小已超过上限，建议另建图床仓库`,
						})
						return false
					}
				}

				// 游客身份 限制次数
				if (useUser().userType == 0 && useUser().experienceNumber == 0) {
					window.$notification.error({
						// title: '欢迎来到git图床',
						content: `你的体验次数已用完\n登录账户可获得5000次/小时\n赶紧登录Github账户试试吧！！！！`,
						// duration: 10000
					})
					return false
				}

				// 限制图片格式
				if (!imgType.includes(type) || !/\.(jpe?g|png|gif|ico)$/i.test(name)) {
					$message.error('上传图片仅支持JPG、JPEG、gif、PNG、ico格式！')
					return false
				}

				// 限制图片大小 2M
				if (size > 1024 * 1024 * 2) {
					$message.error('上传单张图片大小不能超过2M！')
					return false
				}
				
				// Gitee限制图片大小 1M
				if (useUser().repoType == 'Gitee' && size > 1024 * 1024 * 1) {
					$message.error('Gitee单张图片大小不能超过1M！')
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
					let query = {
						owner: useUser().git.repoInfo.owner,
						repo: useUser().git.repoInfo.repo,
						path: `${GenNonDuplicateID(6)}.${name.split('.')[1]}`
					}
					// debugger
					let params = {
						message: 'Git图床提交',
						content: reader.result.split(',')[1]
					}

					if (useUser().repoType == 'Github') {
						createNewFileOrUpdateFile(params, query).then(res => {
							console.log(res)
							if (res.status == 201) {
								onFinish(res)
								window.$message.success('上传成功！')
								const href = `https://cdn.jsdelivr.net/gh/${query.owner}/${query.repo}/${res.data.content.path}`
								console.log(href)
								useContent().setContent({ content: href })
								useUser().userType == 0 && useUser().visitorUpload()
							} else {
								onError(res)
							}
						})
					} else {
						_createNewFileOrUpdateFile(params, query).then(res => {
							if (res.status == 201) {
								onFinish(res)
								window.$message.success('上传成功！')
								const href = `https://gitee.com/ysisno1/${query.repo}/raw/master/${res.data.content.path}`
								console.log(href)
								useContent().setContent({ content: href })
								useUser().userType == 0 && useUser().visitorUpload()
							} else {
								onError(res)
							}
						})
					}

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