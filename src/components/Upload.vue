
<template>
	<n-upload 
		:action="action"
	 	accept="image/*" 
		v-model:file-list="fileList"
		:max="3" 
		:multiple="false" 
		:show-file-list="false"
		@before-upload="beforeUpload" 
		@finish="finish" 
		:customRequest="customRequest"
	>
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

import {createNewFileOrUpdateFile} from '@/service/api';


export default {
    name: 'Index',
    components:{
        CloudUploadOutlineIcon
    },

    setup() {
		
		let globalData = reactive({
			action:'',
			base64File:'',
			fileList:[]
		})
		
		const imgType = ['image/jpeg', 'image/png', 'image/gif', 'image/jpeg','image/x-icon'];
		
		
		
		
		// 上传前 限制图片大小格式
        const beforeUpload = ({ file, fileList }) =>{
			const {name,size,type} = file.file
            // console.log(name,size,type)
            console.log('文件列表',fileList)
			
			if (!imgType.includes(type) || !/\.(jpe?g|png|gif|ico)$/i.test(name)) {
				$message.error('上传图片仅支持JPG、JPEG、gif、PNG、ico格式！')
				return false
			}
			
			if (size > 1024 * 2000) {
				$message.error('上传单张图片大小不能超过2M！')
				return false
			}
			
			return true
        }
		
		// Base64转Blob
		const dataURItoBlob = (dataURI) => {  
			var byteString = atob(dataURI.split(',')[1]);  
			var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];  
			var ab = new ArrayBuffer(byteString.length);  
			var ia = new Uint8Array(ab);  
			for (var i = 0; i < byteString.length; i++) {  
				ia[i] = byteString.charCodeAt(i);  
			}  
			return new Blob([ab], {type: mimeString});  
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
				const {name,size,type} = file.file

				// File转Base64
				let reader = new FileReader();
				reader.readAsDataURL(file.file)
				reader.addEventListener("load", function () {
					globalData.base64File = reader.result

					let query ={
						owner:'YsisNo1',
						repo:'static',
						path:`${name}`
					}
					let params = {
						message:'git图床提交',
						content:reader.result.split(',')[1]
					}
					
					createNewFileOrUpdateFile(params,query).then(res=>{
						console.log(res)
						if(res.code == 200){
							onFinish(res)
							window.$message.success('上传成功！')
							const href = `https://cdn.jsdelivr.net/gh/YsisNo1/static/${res.content.path}`
							console.log(href)
						}else{
							onError(res)
						}
					})


				}, false);
				
				
		    }

		
		// 上传完成
		const finish = ({ file,e }) =>{
			console.log(file,e)
		}

        return {
            ...toRefs(globalData),
			beforeUpload,
			finish,
			customRequest
        }
    }
};
</script>

<style lang="scss" scoped>

::v-deep .n-upload-trigger{
	display: block;
	.n-upload-dragger{
		margin: 10px auto;
		padding: 60px 24px;
	}
}
</style>