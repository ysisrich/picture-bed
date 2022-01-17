/*
* english
*/

export default {
    menu:{
        upload:'Upload',
        login:'Login',
        language:'Language',
        theme:'Theme',
        about:'About'
    },
    // 公告
    notice:{
        one:'1. Visitors are limited to uploading 6 pictures per day, and each picture cannot exceed 2M. Prohibit uploading gambling, pornography and other pictures',
        two:'2. The size of a single GitHub map bed warehouse cannot exceed 1 GB, otherwise it is easy to be closed. It is recommended to change the warehouse before 1 GB',
        three:'3. The jSD-accelerated single file size is 50M, which means that the single file size uploaded by the login account should not exceed 50MB',
        four:'4. Gitee requires password authentication to access pictures exceeding 1 MB. Therefore, Gitee can upload only 1 MB of pictures',

        _one:'1. OAuth2 token github Personal Account Settings -> Developer Settings -> Personal Token: Create a token',
        _two:'2. OAuth2 key/secret Personal Account Settings -> Developer Settings -> Create your own OAuth app',
        _three:'3. Basic authentication Use the username and password',
    },
    attention:'Attention',
    repositories:'Repositories',
    clickOrDragToUpload:'Click or drag the file to the area to upload',
    pictureType:'The supported image formats include PNG, JPG, JPEG, GIF, and ICO. The size of a single image cannot exceed 50M',

    // 消息
    message:{
        title1:'Welcome to Git picture bed',
        content:'You still have {time} experiences today to upload pictures',
        underDevelopment:'Under development...No rush',
        loadImgError:'Error in loading picture' ,
        uploadLimit1:'The repositories exceeds the upper limit, build another repositories',
        uploadLimit2:'You are run out \n Login account and get 5000/hour \n Login Github and try it !!!!',
        uploadLimit3:'Upload pictures only support JPG, JPEG, gif, PNG and ico formats !',
        uploadLimit4:'The size of a uploaded image cannot exceed 2M !',
        uploadLimit5:'Gitee single picture size cannot exceed 1M !',
        uploadSuccess:'Upload successful!',
        forbidRightKey:'No right click',
        forbidF12:'No F12',
    },

    copy:'copy',
    // 登录
    login:{
        sign_in:'Sign In',
        username:'Username',
        password:'Password',
        expirationTime:'Expiration Time',
        loginSuccess:'Login successful!'
    },

    // 错误响应
    errorResponse:{
        "304": "No changes have been made",
        "401": "Sorry, you don't have access",
        "403": "Access Forbidden",
        "422": "Validation fails",
        "404": "Not Found",
        "409": "Resource conflict",
        "400": "The SHA field is empty",

        "1011":"Request timed out, please check the network and reconnect！"
    }
}