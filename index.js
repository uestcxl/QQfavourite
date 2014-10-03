var cheerio=require('cheerio');
var request=require('request');
    //setInterval(function(){
    request("http://ish.z.qq.com/infocenter_v2.jsp?B_UID=865492652&sid=AfrPq21OympTCpNB4VxGAvCP", function (error, response, body) {
        if (!error && response.statusCode == 200) {
                    var $ = cheerio.load(response.body);
                    //$('a').each(function () {
                    $('.tabs-1 a:contains(赞)').each(function () {
                        request($(this).attr('href'),function(error,response,body){
                            if(!error && response.statusCode==200){
                                //console.log('ok');
                                console.log(response.body);
                            }
                            else{
                                console.log(error);
                            }
                        }); 
                    });
        }
    });
    //},500);
