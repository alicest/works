/**
 * Created by Administrator on 15-3-24.
 */
function showr(dd){//图片轮转
    for(var i=1;i<=4;i++){
        if(i==Number(dd))
            document.getElementById('left-menu'+dd).style.display='block';  //显示鼠标点击链接对应层
        else
            document.getElementById('left-menu'+i).style.display='none';   //隐藏其他层
    }
}

function show(d1){
    document.getElementById(d1).style.display='block';  //显示层
}

function hide(d1){
    document.getElementById(d1).style.display='none';  //隐藏层
}
//search.Html

function showA(area){
    document.getElementById('workarea').value=area;  //选择地点显示在按钮上
    document.getElementById('worksearch').style.display='none';  //选择层隐藏
}

///菜单显示?????/
function showMenu(){
    var menu=document.getElementById("menuTop");
     var trChild=menu.getElementsByTagName("tr");
    var links=trChild[0].getElementsByClassName("div-link");
    var links2=trChild[1].getElementsByClassName("company-hide");
    alert(links2);
    for(var i=0;i<links.length;i++){
        links[i].onMouseOver=function(){
            show("s"+i+1);
            return false;
        }
        links[i].onMouseOut=function(){
            hide("s"+i+1);
            return false;
        }

    }
    for(var i=0;i<links2.length;i++){
        links2[i].onMouseOver=function(){
            show("s"+i+1);
            return false;
        }
        links2[i].onMouseOut=function(){
            hide("s"+i+1);
            return false;
        }

    }

}
function trainshow(showid,closediv){
    var checkedValue="";
    var boxNum =document.tform.tbox;
    //  document.all.myCheckBox和 document.all.item通过控件的名字定位控件，item()中是控件的名字
    for (var j=0; j<boxNum.length; j++) {
        if (document.tform.tbox[j].checked==true) {    //复选框被选中
            checkedValue +=document.tform.tbox[j].value+",";

        }      //选中复选框的值
    }
    checkedValue=checkedValue.substring(0,checkedValue.length-1);
    document.getElementById(showid).innerHTML=checkedValue;
    //所选内容显示在ID为showid单元格
    document.getElementById(closediv).style.display='none';   //隐藏行业选择层
}
function jobShow(showid,closediv){
    var checkedValue2="";
    var boxNum2=document.jform.jbox;
    for (var j=0; j<boxNum2.length; j++) {
        if (document.jform.jbox[j].checked==true) {    //复选框被选中
            checkedValue2 +=document.jform.jbox[j].value+","; //选中复选框的值
        }
    }
    checkedValue2=checkedValue2.substring(0,checkedValue2.length-1);//成功删除最后的‘，’号
    document.getElementById(showid).innerHTML=checkedValue2;
    document.getElementById(closediv).style.display='none';   //隐藏行业选择层
}


//添加搜索信息
var searchList=new Array();//添加搜索信息
searchList[0]=["近一天","近二天","近三天","近一周","近一月","近六周","近两月"];
searchList[1]=["在读学生","应届生","工作一年","工作两年","五年以上","八年以上","十年以上"];
searchList[2]=["面议","2000-2999","3000-3999","4000-4999","6000-8000","8000-10K"];
searchList[3]=["外资(欧美)","外资(非欧美)","合资(欧美)","合资(非欧美)","国企/上市公司","民营/私营公司","外企代表处"];
searchList[4]=["高中","中专","本科","硕士","博士","不限"];
searchList[5]=["兼职","全职"];
function addSearch(){  //将所有省 添加到省的下拉框中
//    alert(document.getElementById("issueDate").options[1].value);
    for (var i in searchList[0])
    {
      document.getElementById("issueDate").options.add(new Option(searchList[0][i], searchList[0][i]));
    }
    for (var i in searchList[1])
    {
        document.getElementById("workYear").options.add(new Option(searchList[1][i], searchList[1][i]));
    }
    for (var i in searchList[2])
    {
        document.getElementById("salary").options.add(new Option(searchList[2][i], searchList[2][i]));
    }
    for (var i in searchList[3])
    {
        document.getElementById("coType").options.add(new Option(searchList[3][i], searchList[3][i]));
    }
    for (var i in searchList[4])
    {
        document.getElementById("education").options.add(new Option(searchList[4][i], searchList[4][i]));
    }
    for (var i in searchList[5])
    {
        document.getElementById("jobTerm").options.add(new Option(searchList[5][i], searchList[5][i]));
    }

}
addLoadEvent(addSearch());
addLoadEvent(showMenu);