/**
 * Created by Administrator on 15-3-22.
 */
//验证是否为空，表单验证
function check(){
    <!--姓名检测-->
    if(document.myform.username.value==""){
        alert("请填写你的姓名！")
        document.myform.username.focus();
        return false;
    }
    <!--工作年限检查-->

    if(document.myform.WorkYear.value==0){
        alert("请选择工作年限！")
        document.myform.WorkYear.focus();
        return false;
    }

    <!--证件号码检查-->
    if(document.myform.CardNumber.value==""){
        alert("请填写证件号码！")
        document.myform.CardNumber.focus();
        return false;
    }

    <!--居住地检查-->
    if(document.myform.selProvince.value==""){
        alert("请选择居住地！")
        document.myform.selProvince.focus();
        return false;
    }

    <!--手机号码检查-->
    if(document.myform.tel.value==""){
        alert("请填写您的联系方式！")
        document.myform.tel.focus();
        return false;
    }
    <!--email检查-->
    if(document.myform.email.value==""){        alert("请填写您的E-mail！")
        document.myform.email.focus();
        return false;
    }
    if(document.myform.email.value.indexOf("@",0)==-1){
        alert("您填写E-mail不正确，请重新填写！")
        document.myform.email.focus();
        return false;
    }

    <!--教育经历检查-->
    if(document.myform.edu.value==""){
        alert("请填写教育经历！")
        document.myform.edu.focus();
        return false;
    }

    <!--求职意向检查-->
    if(document.myform.introself.value==""){
        alert("请填写求职意向！")
        document.myform.introself.focus();
        return false;
    }
    return true;
}