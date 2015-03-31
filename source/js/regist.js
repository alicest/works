/**
 * Created by Administrator on 15-3-19.
 */
function $ ( pElementID ) {
    return document.getElementById(pElementID);
}
<!--电子邮件地址验证-->
function chemail(email){
    if(email.value.indexOf('@',0)==-1){
        alert("请输入正确的电子邮件地址");
        email.focus();
        return false;
    }
    else{
        window.open("checkmail.html","","height=100,width=300,toolbar=no, menubar=no, scrollbars=no,resizable=no")
    }
}
<!--会员名验证-->
function checkuser(username){
    var  reg= /^[a-Za-z]+$/;
    if(username.value==""){
        alert("请输入会员名");
        username.focus();
        return false;
    }
    else if(username.value.length<6){
        alert("会员名不能少于6位");
        username.focus();
        return false;
    }
    else if(!reg.test(username.value. charAt(0))){
        alert("会员名必须以字母开头");
        username.focus();
        return false;
    }
    else{
        window.open("checkuser.html","","height=100,width=300,toolbar=no, menubar=no, scrollbars=no,resizable=no")
    }
}
<!--密码验证-->
function checkpwd(pwd){
    var infpwd=$("fpwd");

    if(pwd.value==""){
        infpwd.className="font_error"   //提示信息字体样式
        infpwd.innerHTML="请输入密码!"
        return false;
    }
    if(pwd.value.length<6){
        infpwd.className="font_error"
        infpwd.innerHTML="请输入不少于6位的密码!"
        return false;
    }
    infpwd.className = "font_true";
    infpwd.innerHTML = "您填写的密码是合法的！";
    return true;
}

function checkrpwd(pwd,rpwd){
    var infrepwd=$("frepeatpwd");
    if(rpwd.value==""){
        infrepwd.className="font_error"
        infrepwd.innerHTML="请输入确认密码!"
        return false;
    }
    if(pwd.value!=rpwd.value){
        infrepwd.className="font_error"
        infrepwd.innerHTML="两次输入的密码不一致，请重新输入!"
        return false;
    }
    infrepwd.className = "font_true";
    infrepwd.innerHTML = "请牢记您输入的密码！";
    return true;
}