/**
 * Created by Administrator on 15-3-17.
 */
window.onscroll=move;   //窗口的滚动事件，当页面滚动时调用move( )函数
//window.onLoad=start;

function closeImg(){
    document.getElementById("mScroll").style.display="none" ;   }
    //隐藏随滚动条上下滚动的层,点击“关闭”就关闭该图层

function move(){
    document.getElementById("mScroll").style.top=document.body.scrollTop+100 ;     //获取mScroll层的上方位置。
    document.getElementById("mScroll").style.left=document.body.scrollLeft+10; //获取mScroll层的左方位置。
    }

