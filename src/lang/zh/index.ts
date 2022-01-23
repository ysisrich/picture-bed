/*
* 中文
*/

export default {
    menu:{
        upload:'多图上传',
        login:'登录',
        language:'语言',
        theme:'主题',
        about:'关于'
    },

    // 公告
    notice:{
        one:'1. 游客限制每日上传6张，单张图片不能超过2M，上传的图片将公开显示，禁止上传博彩、色情等违法信息的图片',
        two:'2. GitHub 单个图床仓库大小不能超过1G，否则容易被封，建议在 1G 之前就换个仓库',
        three:'3. JSD 加速的单文件大小为 50M，因此也就意味着登录账户上传的单文件大小不超过 50MB',
        four:'4. Gitee 访问超过1M的图片需要密码登录认证，所以Gitee上传图片限制1M',

        _one:'1. OAuth2 token github个人账号设置->开发者设置->个人token里：创建一个token',
        _two:'2. OAuth2 key/secret github个人账号设置->开发者设置->创建自己的OAuth app，然后得到一对client_id和client_secret',
        _three:'3. Basic authentication 使用用户名 密码',
    },
    attention:'注意',
    repositories:'仓库',
    clickOrDragToUpload:'点击或者拖动文件到该区域来上传',
    pictureType:'支持的图片格式有png、jpg、jpeg、gif、ico等，单张图片大小不能超过50M',
    upyun:'又拍云',

    // 消息
    message:{
        title1:'欢迎来到Git图床',
        content:'你今日还有{time}次体验上传图片',
        underDevelopment:'还在开发ing...别急',
        loadImgError:'加载图片出错',
        uploadLimit1:'单个图床仓库大小已超过上限，建议另建图床仓库',
        uploadLimit2:'你的体验次数已用完\n登录账户可获得5000次/小时\n赶紧登录Github账户试试吧！！！！',
        uploadLimit3:'上传图片仅支持JPG、JPEG、gif、PNG、ico格式！',
        uploadLimit4:'上传单张图片大小不能超过2M！',
        uploadLimit5:'Gitee单张图片大小不能超过1M！',
        uploadSuccess:'上传成功！',
        forbidRightKey:'禁止右键',
        forbidF12:'禁止F12',
    },
    copy:'复制',
    // 登录
    login:{
        sign_in:'登录',
        username:'用户名',
        password:'密码',
        expirationTime:'过期时间',
        loginSuccess:'登录成功！'
    },

    // 错误响应
    errorResponse:{
        "304": "未做任何修改",
        "401": "对不起，您没有权限访问",
        "403": "禁止访问",
        "422": "验证失败",
        "404": "资源未找到",
        "409": "资源冲突",
        "400": "sha字段为空",

        "1011":"请求超时，请检查网络再重新连接！"
    }
}