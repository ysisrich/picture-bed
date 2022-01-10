/**
 * 自定义公共函数
 */
 const utils = 
 {
 /**
      * @name: 设置cookie值
      * @author: camellia
      * @date: 2020-12-28 
      * @param:  cname   string  cookie名称
      * @param:  cvalue  any cookie值
      * @param:  exdays  number  cookie保存天数
      */
     setCookie(cname:string, cvalue:any, exdays = 720) 
     {
         var d = new Date();
         d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
         var expires = "expires=" + d.toUTCString();
         document.cookie = cname + "=" + cvalue + "; " + expires;
     },
     /**
      * @name: 获取cookie值
      * @author: camellia
      * @date: 2020-12-28 
      */
     getCookie(cname:string) {
         var name = cname + "=";
         var ca = document.cookie.split(';');
         for (var i = 0; i < ca.length; i++) {
             var c = ca[i];
             while (c.charAt(0) == ' ') c = c.substring(1);
             if (c.indexOf(name) != -1) {
                 return c.substring(name.length, c.length);
             }
         }
         return "";
     },
     /**
      * @name: 清除cookie值
      * @author: camellia
      * @date: 2020-12-28 
      * @param:  cname   string  cookie名称
      */
     clearCookie(cname:string) {
         var d = new Date();
         d.setTime(-1);
         var expires = "expires=" + d.toUTCString();
         document.cookie = cname + "=''; " + expires;
 },
 }
 export default utils;
 