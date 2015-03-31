/**
 * Created by Administrator on 15-3-18.
 */
//图片轮转
var NowFrame=1;  //全局变量，轮换显示图片的第一张
var MaxFrame=3;  //全局变量，轮换显示图片的最大张数
//var imgTurn=document.getElementById("imgTurn");
//var MaxFrame=imgTurn.firstChild.getElementsByTagName("a").length;
//console.log(MaxFrame);
function adv(){
        for(var i=1;i<=MaxFrame;i++){
            if(i==NowFrame)
                document.getElementById('ad'+NowFrame).style.display='inline';   //目前显示的图片
            else
                document.getElementById('ad'+i).style.display='none';      //隐藏其他图片
        }
        if(NowFrame==MaxFrame)   //设置下一张显示的图片
            NowFrame=1;
        else
            NowFrame=NowFrame+1;
setTimeout('adv()',2000);   //设置定时器，显示下一张图片
}
window.onload=adv;  //当页面载入时，调用 adv()函数
