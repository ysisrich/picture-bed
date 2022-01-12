<template>
	<!-- 消息提示 message -->
	<n-message-provider>
	  <MessageApi />
	</n-message-provider>
	
	<!-- 弹出框 dialog -->
	<n-dialog-provider>
	  <DialogApi />
	</n-dialog-provider>
	
	<!-- 浏览器加载进度条 LoadingBar -->
	<n-loading-bar-provider>
	  <LoadingBarApi />
	</n-loading-bar-provider>
	
	<!-- 浏览器加载进度条 LoadingBar -->
	<n-notification-provider :max="3">
	  <NotificationApi />
	</n-notification-provider>
</template>

<script>
import MessageApi from "@/components/naive-ui/MessageApi.vue";
import DialogApi from "@/components/naive-ui/DialogApi.vue";
import LoadingBarApi from "@/components/naive-ui/LoadingBarApi.vue";
import NotificationApi from "@/components/naive-ui/NotificationApi.vue";

export default {
	name:'Feedback',
	components: {
	  MessageApi,
	  DialogApi,
	  LoadingBarApi,
	  NotificationApi
	}
}
</script>


