
const runtime = (dom:Document) =>{
    // 初始时间，日/月/年 时:分:秒
    let X = new Date("1/9/2022 18:00:00");
    let Y = new Date();
    let T = (Y.getTime()-X.getTime());
    let M = 24*60*60*1000;
    let a = T/M;
    let A = Math.floor(a);
    let b = (a-A)*24;
    let B = Math.floor(b);
    let c = (b-B)*60;
    let C = Math.floor((b-B)*60);
    let D = Math.floor((c-C)*60);
    //信息写入到DIV中
    // @ts-ignore
    dom.innerHTML = "本站勉强运行: "+A+"天"+B+"小时"+C+"分"+D+"秒"
}

export default runtime

