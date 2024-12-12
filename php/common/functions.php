<?php
// Copyright © 2016- 2024 Sesame Network Technology all right reserved

use Yiisoft\Db\Migration\MigrationBuilder;
use Zxing\QrReader;

function ddump($var, $echo = true, $label = null, $strict = true, $level = 0): ?string
{
    $label = ($label === null) ? '' : rtrim($label) . ' ';
    if (!$strict) {
        if (ini_get('html_errors')) {
            $output = print_r($var, true);
            $output = "<pre>" . $label . htmlspecialchars($output, ENT_QUOTES) . "</pre>";
        } else {
            $output = $label . " : " . print_r($var, true);
        }
    } else {
        ob_start();
        var_dump($var);
        $output = ob_get_clean();
        if (!extension_loaded('xdebug')) {
            $output = preg_replace("/\]\=\>".PHP_EOL."(\s+)/m", "] => ", $output);
            if (php_sapi_name() !== 'cli') {
                // $output = '<pre>' . $label . htmlspecialchars($output, ENT_QUOTES) . '</pre>';
                $output = '<pre>' . $label . $output . '</pre>';
            }
        }
    }

    $eol = php_sapi_name() == 'cli' ? PHP_EOL : '<BR/>';
    $debugInfo = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, $level + 1);
    $message = 'file: '.$debugInfo[$level]['file']. ':'.$debugInfo[$level]['line'] . $eol;
    $output = $message . $output;
    $output = now() . ' '. $output . $eol;
    if ($echo) {
        echo($output);

        return null;
    } else {
        return $output;
    }
}


/**
 * @param $data
 * @param $num
 * Notes: 数据分组
 * User: rand
 * Date: 2024/11/7 10:26
 * @return array
 */
function arraySplit($data, $num = 5): array
{
    $arrRet = [];
    if (!isset($data) || empty($data)) {
        return $arrRet;
    }

    $iCount = count($data) / $num;
    if (!is_int($iCount)) {
        $iCount = ceil($iCount);
    } else {
        $iCount += 1;
    }
    for ($i = 0; $i < $iCount;++$i) {
        $arrInfos = array_slice($data, $i * $num, $num);
        if (empty($arrInfos)) {
            continue;
        }
        $arrRet[] = $arrInfos;
        unset($arrInfos);
    }

    return $arrRet;
}

function migrate_exec(MigrationBuilder $b, string $statements)
{
    $statements = explode(";", trim($statements));
    $b->getDb()->transaction(function () use ($b, $statements) {
        foreach ($statements as $statement) {
            $b->execute($statement);
        }
    });
}

/**
 * 获取当前时间
 */
function now()
{
    return date('Y-m-d H:i:s');
}

/**
 * 从a-z, A-Z, 0-9共62个字符中选取指定长度的随机数
 */
function random62($length = 16)
{
    $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $result = '';
    // 获取字符表的长度（62）
    $max = strlen($chars) - 1;

    // 使用密码学安全的随机字节
    for ($i = 0; $i < $length; $i++) {
        // 生成一个随机索引
        $index = random_int(0, $max);
        $result .= $chars[$index];
    }

    return $result;
}

/**
 * 从一个大数组中提取出指定字段组合成一个新的数组
 */
function array_pick_fields($data, $keys)
{
    // 判断数据是否是多维数组
    if (is_array(reset($data))) {
        return array_map(fn ($item) => array_merge(array_fill_keys($keys, null), array_intersect_key($item, array_flip($keys))), $data);
    } else {
        // 单维数组处理
        return array_merge(array_fill_keys($keys, null), array_intersect_key($data, array_flip($keys)));
    }
}


/**
 * @param $url
 * @param $json
 * @param $time_out
 * @param $header
 * Notes: 发起post请求
 * User: rand
 * Date: 2024/12/10 12:26
 * @return bool|string
 */
function requestByPost($url, $json,$time_out=0,$header=null)
{
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    //@dany20200417  加：http://www.04007.cn/article/424.html
    curl_setopt ( $ch,  CURLOPT_NOSIGNAL,true);

    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    if(empty($header)){
        $header= array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json)
        );
    }
    curl_setopt($ch, CURLOPT_HTTPHEADER,$header);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36');
    if($time_out){
        curl_setopt($ch, CURLOPT_TIMEOUT_MS, $time_out);
    }
    $result = curl_exec($ch);
    if (curl_errno($ch)) {
        wkLog("curl错误：".curl_error($ch),'requestByPost');
    }
    curl_close($ch);
    return $result;
}

/**
 * @param $img_url
 * Notes: 验证是否为二维码图片
 * User: rand
 * Date: 2024/12/10 12:19
 * @return array
 */
function checkImgIsQrcode($img_url)
{
    $qrcode = new QrReader($img_url);
    try {
        $text = $qrcode->text(); // 尝试读取二维码内容
        return ['is_qrcode' => !empty($text), 'qrcode_content' => $text];
    } catch (\Exception $e) {
        return ['is_qrcode' => false, 'qrcode_content' => ''];// 如果抛出异常，则不是二维码
    }
}

