/**
 * Created by Administrator on 15-3-22.
 */
var year=[1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1987,1986,1985,1984,1983,
         1982,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970];
var mon=[2,3,4,5,6,7,8,9,10,11,12];
var day=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
function AllT(){
    for (var i in year)
    {
        document.myform.BirthYear.options.add(new Option(year[i],year[i]));
    }
    for (var i in mon)
    {
        document.myform.BirthMonth.options.add(new Option(mon[i], mon[i]));
    }
    for (var i in day)
    {
        document.myform.BirthDay.options.add(new Option(day[i], day[i]));
    }
   document.myform.BirthYear.selectedIndex = 0;
}
window.onload=AllT;
var str=day.unshift("1");
function monDay(){//根据月份添加，减少天数，2月份只有28天
    var m= document.myform.BirthMonth.value;
    var len=document.myform.BirthDay.options.length;
    if(len<31){
        for(var i=len;i<31;i++){
            document.myform.BirthDay.options.add(new Option(day[i], day[i]));
        }
    }
    if(m =='4'||m =='6'||m =='9'||m =='11'){
        document.myform.BirthDay.options.length=30;
        }
    else if(m =='2'){
        document.myform.BirthDay.options.length=28;
    }

    else{document.myform.BirthDay.options.length=31;}

}
