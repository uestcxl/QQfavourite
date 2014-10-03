var cheerio=require("cheerio");
var request=require('request');

var zan=function(){request("http://ish.z.qq.com/infocenter_v2.jsp?B_UID=865492652&sid=AfrPq21OympTCpNB4VxGAvCP",function(error,response,body){
    if(!error && response.statusCode===200){
       var $=cheerio.load(response.body);
       $('a').each(function(){
           request($(this).attr('href'),function(error,response,body){
               if(!error && response.statusCode==200){
                   console.log(body);
               }else{
                   console.log('获取失败');
               }
           });
       });
    }
    else{
        console.log("登陆失败:"+error);
    }
});
};

setInterval(zan,500);
