<?php
ignore_user_abort();
set_time_limit(0);
$url = "http://ish.z.qq.com/infocenter_v2.jsp?B_UID=865492652&sid=AfrPq21OympTCpNB4VxGAvCP";
$pattern = '/<a\shref="(\S+?)">赞\(\d+\)<\/a>/';
while(true){
    $html = file_get_contents($url);
    preg_match_all($pattern, $html, $favour);
    $favour_url = $favour[1];
    foreach ($favour_url as $favour) {
        $favour = preg_replace('/&amp;/', '&', $favour);
        $result = file_get_contents($favour);
        while(preg_match('/稍后再尝试/', $result))
            $result = file_get_contents($favour);
    
}
    sleep(2);
}
?>
