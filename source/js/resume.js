/**
 * Created by Administrator on 15-3-20.
 */

function  SetIDType()
{ if (document.myform.Nation.value == "中国大陆")
    document.myform.CardType.options[0].selected = true;
else
    document.myform.CardType.options[1].selected = true;
}

var cityList = new Array();
cityList['北京市'] = ['北京市','朝阳区','东城区','西城区', '海淀区','宣武区','丰台区','怀柔','延庆','房山'];
cityList['上海市'] = ['上海市','宝山区','长宁区','丰贤区', '虹口区','黄浦区','青浦区','南汇区','徐汇区','卢湾区'];
cityList['广东省'] = ['广州市','惠州市','汕头市','珠海市','佛山市','中山市','东莞市'];
cityList['深圳市'] = ['深圳市','福田区', '罗湖区', '盐田区', '宝安区', '龙岗区', '南山区', '深圳周边'];
cityList['重庆市'] =['重庆市','俞中区', '南岸区', '江北区', '沙坪坝区', '九龙坡区', '渝北区', '大渡口区', '北碚区'];
cityList['天津市'] = ['天津市','和平区', '河西区', '南开区', '河北区', '河东区', '红桥区', '塘古区', '开发区'];
cityList['江苏省'] = ['南京市','苏州市','无锡市'];
cityList['浙江省'] = ['杭州市','宁波市','温州市'];
cityList['四川省'] = ['成都市','雅安市'];
cityList['海南省'] = ['海口市'];
cityList['福建省'] = ['福州市','厦门市','泉州市','漳州市'];
cityList['山东省'] = ['济南市','青岛市','烟台市'];
cityList['江西省'] = ['南昌市','赣州市'];
cityList['广西'] = ['桂林市','南宁市'];
cityList['安徽省'] = ['芜湖市','合肥市'];
cityList['河北省'] = ['邯郸市','石家庄市'];
cityList['河南省'] = ['许昌市','郑州市'];
cityList['湖北省'] = ['随州市','武汉市','宜昌市'];
cityList['湖南省'] = ['衡阳市','长沙市'];
cityList['陕西省'] = ['延安市','西安市'];
cityList['山西省'] = ['平遥市','太原市'];
cityList['黑龙江省'] = ['黑龙江省','哈尔滨市'];
cityList['国外'] = ['国外'];
cityList['其他'] = ['其他'];

function changeCity()
{
    var province=document.myform.selProvince.value;//获得省份下拉框的对象
    document.myform.selCity.options.length=0;//初始化清空城市下拉框，仅留提示选项
    for (var i in cityList)
    {
        if (i == province)//将城市数组中的值填充到城市下拉框中
        {
            for (var j in cityList[i])
            {
                document.myform.selCity.options.add(new Option(cityList[i][j], cityList[i][j]));
            }
        }
    }
    document.myform.selCity.options.selectedIndex=0;//当前城市 默认为没有选中的城市
}

function AllCity(){  //将所有省 添加到省的下拉框中
    for (var i in cityList)
    {
        document.myform.selProvince.options.add(new Option(i, i));
    }
    document.myform.selProvince.selectedIndex = 0;
}
window.onLoad=AllCity();

//户口地
function changeH(){
    var hProv=document.myform.hProvince.value;
    document.myform.hCity.options.length=0;
    for(var i in cityList){
        if (i == hProv)//将城市数组中的值填充到城市下拉框中
        {
            for(var j in cityList[i]){
                document.myform.hCity.options.add(new Option(cityList[i][j], cityList[i][j]));

            }
        }
     }
        document.myform.hCity.options.selectedIndex=0;//当前城市 默认为没有选中的城市

}
function AllH(){  //将所有省 添加到省的下拉框中
    for (var i in cityList)
    {
        document.myform.hProvince.options.add(new Option(i, i));
    }
    document.myform.hProvince.selectedIndex = 0;
}
window.onLoad=AllH();
