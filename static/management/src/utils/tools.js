import dayjs from 'dayjs';
import {message} from 'ant-design-vue';
import useClipboard from 'vue-clipboard3';
import router from "@/router";
import store from "@/store";

export const logoutHandle = () => {
    store.commit('RESET_STATE')
    window.localStorage.clear()
    window.location.href = router.resolve({path: '/login'}).href
}

export const copyText = async text => {
    const { toClipboard } = useClipboard()
    try {
        await toClipboard(text)
        message.success('已复制')
    } catch (e) {
        console.error(e)
        message.warning('复制失败')
    }
}

/**
 * 字符串脱敏、加密
 * @param str
 * @param maskPercentage
 * @returns {*|string}
 */
export const maskStringByPercentage = (str, maskPercentage = 50) => {
    if (!str) {
        return ''
    }
    const strLength = str.length;

    // 如果字符串长度为0或百分比无效，返回原字符串
    if (strLength === 0 || maskPercentage <= 0 || maskPercentage >= 100) {
        return str;
    }

    // 计算需要脱敏的字符数量
    const maskCount = Math.floor((strLength * maskPercentage) / 100);

    // 计算需要保留的字符数量（两边各保留相同数量的字符）
    const charsToShow = Math.floor((strLength - maskCount) / 2);

    const start = str.substring(0, charsToShow);
    const end = str.substring(strLength - charsToShow);
    const middle = '*'.repeat(Math.min(maskCount, 100));

    return start + middle + end;
}

export const formatSeconds = (value) => {
    let result = parseInt(value);
    let y =
        Math.floor(result / 86400) < 10
            ? "0" + Math.floor(result / 86400)
            : Math.floor(result / 86400);
    let h =
        Math.floor((result / 3600) % 24) < 10
            ? "0" + Math.floor((result / 3600) % 24)
            : Math.floor((result / 3600) % 24);
    let m =
        Math.floor((result / 60) % 60) < 10
            ? "0" + Math.floor((result / 60) % 60)
            : Math.floor((result / 60) % 60);
    let s =
        Math.floor(result % 60) < 10
            ? "0" + Math.floor(result % 60)
            : Math.floor(result % 60);
    let res = "";
    if (y !== "00") res += `${y}"`;
    if (h !== "00") res += `${h}"`;
    if (m !== "00") res += `${m}"`;
    res += `${s}"`;
    return res;
}

export const formatTime = time => {
    let nowTime = dayjs().unix();
    let sTime = nowTime - time; //间隔秒数
    if (sTime < 60) {
        if (sTime > 10) {
            return Math.floor(sTime) + '秒前';
        } else {
            return '刚刚'
        }
    } else if (sTime < 3600) {
        let days = Math.floor(sTime / 60);
        return days + '分钟前';
    } else if (sTime < 3600 * 24) {
        let days = Math.floor(sTime / 60 / 60);
        return days + '小时前';
    } else if (sTime < 3600 * 24 * 30) {
        let days = Math.floor(sTime / 60 / 60 / 24);
        return days + '天前';
    } else if (sTime < 3600 * 24 * 30 * 6) {
        let days = Math.floor(sTime / 60 / 60 / 24 / 30);
        return days + '月前';
    } else {
        return dayjs(time * 1000).format("YYYY-MM-DD HH:mm")
    }
}

export function getFileIcon(ext) {
    ext = ext.toLowerCase()
    ext = ext.replace(/^\./, '')
    if (ext === "pdf") {
        return require('@/assets/image/session/file-icon-pdf.png')
    } else if (ext === "txt") {
        return require('@/assets/image/session/file-icon-txt.png')
    } else if (['xls', 'xlsx', 'csv', 'xlsm', 'xlsb'].includes(ext)) {
        return require('@/assets/image/session/file-icon-xls.png')
    } else if (['docx', 'doc', 'dotx', 'dot', 'docm', 'dotm', 'rtf'].includes(ext)) {
        return require('@/assets/image/session/file-icon-docx.png')
    } else if (['ppt', 'pptx', 'ppsx', 'pps', 'pot', 'pptm', 'ppsm'].includes(ext)) {
        return require('@/assets/image/session/file-icon-ppt.png')
    } else if (['zip', 'rar', 'tar', 'tar.gz', 'tgz', 'dmg', 'bz2'].includes(ext)) {
        return require('@/assets/image/session/file-icon-zip.png')
    }
    return require('@/assets/image/session/file-icon-normal.png')
}

export const MessageTypeTextMap = {
    text: "文本",
    image: "图片",
    voice: "语音",
    link: "链接",
    video: "视频",
    file: "文件",
    voip_doc_share: "语音存档",
    meeting_voice_call: "语音通话",
    mixed: "混合消息",
    news: "图文消息",
    card: "卡片消息",
    location: "地址消息",
    weapp: "小程序",
    chatrecord: "消息转发",
    collect: "表单消息",
    redpacket: "红包消息",
    meeting: "会议消息",
    docmsg: "在线文档",
    markdown: "markdown消息",
    calendar: "日历消息",
    external_redpacket: "企业互通红包",
}

export const formatMessage = (item) => {
    item.content = jsonDecode(item.content)
    switch (item.msg_type) {
        case "meeting_voice_call":
        case "voice":
            if (item.content.play_length) {
                item.play_length = item.content.play_length;
            } else if (item.content.endtime) {
                item.play_length = Number(item.content.endtime) - Number(item.msg_time);
            }
            break;
        case "file":
            item.content.filesize_text = formatBytes(item.content.filesize || 0)
            break
    }
}

export const numberToFixed = (n, len) => {
    if (!n || n === NaN || n === Infinity) {
        return 0;
    }
    if (!len) {
        len = 2;
    }
    return Number(n.toFixed(2));
}

export const formatPrice = (price) => {
    if (!price) {
        return 0;
    } else {
        return (price / 100).toFixed(2);
    }
}

export const formatDate = (time, fmt = 'YY-MM-DD HH:mm') => {
    return dayjs.unix(time).format(fmt)
}

export const secondToDate = (second) => {
    second = Number(second)
    second = second.toFixed(2)
    if (second < 60) {
        return second + " 秒"
    }
    second = Math.floor(second)
    let minute = Math.floor(second / 60)
    second -= (minute * 60)
    if (minute < 60) {
        return `${minute} 分 ${second} 秒`
    }
    let hour = Math.floor(minute / 60)
    minute -= (hour * 60)
    if (hour < 24) {
        return `${hour} 时 ${minute} 分 ${second} 秒`
    }
    let day = Math.floor(hour / 24)
    hour -= (day * 24)
    return `${day} 天 ${hour} 时 ${minute} 分 ${second} 秒`
}

export const computedRate = (dividend, divisor, resNumber = false) => {
    if (!dividend || !divisor) {
        return 0
    }
    let val = Math.floor(dividend / divisor * 10000) / 100
    if (val > 0) {
        val = val.toFixed(2)
        return resNumber ? val : val += "%"
    }
    return 0
}

export const intervalOverlap = (...intervals) => {
    // 将区间根据左侧顺序排序
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    // leftArr 区间左侧数组
    // rightArr 区间右侧数组
    let leftArr = [], rightArr = []
    intervals.map(item => {
        leftArr.push(item[0])
        rightArr.push(item[1])
    })
    for (let i = 1; i < leftArr.length; i++) {
        if (leftArr[i] <= rightArr[i - 1] || leftArr[i] === leftArr[i - 1]) {
            // 存在重叠
            return true
        }
    }
    return false
}

export const timeToNumber = (time) => {
    time = time.replace(":", "")
    return Number(time)
}

export const copyObj = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

export const jsonDecode = (jsonStr, nullval = {}) => {
    if (!jsonStr) {
        return nullval
    }
    try {
        return JSON.parse(jsonStr)
    } catch (e) {
        console.warn("jsonDecode error:", e)
        return nullval
    }
}

export const weeksMap = {
    0: "周日",
    1: "周一",
    2: "周二",
    3: "周三",
    4: "周四",
    5: "周五️",
    6: "周六",
    7: "周日",
}

export const weekToText = (week) => {
    if (Array.isArray(week)) {
        week = week.sort()
        return week.map(w => weeksMap[w])
    }
    return weeksMap[week]
}

export const isHttpUrl = (url) => {
    let reg = /(http|https):\/\/([\w.]+\/?)\S*/
    if (reg.test(url)) {
        return true;
    }
    return false;
}

export function assignData(target = {}, source = {}) {
    for (let key in target) {
        switch (typeof target[key]) {
            case "object":
                if (Array.isArray(target[key]) && typeof source[key] === "string") {
                    target[key] = source[key].split(",").filter(i => i)
                } else {
                    target[key] = source[key]
                }
                break
            case "number":
                target[key] = Number(source[key])
                break
            case "boolean":
                target[key] = (source[key] == 1)
                break
            default:
                target[key] = source[key]
        }
    }
}

export function objectToQueryString(obj) {
    let queryString = '';
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (queryString.length > 0) {
                queryString += '&';
            }
            queryString += encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
        }
    }
    return queryString;
}


//判断是否电子邮件
export function isEmail(str) {
    if (/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)) {
        return true
    }
    return false;
}

//判断是否是手机号
export function isMobile(str) {
    if (/^[1][1,2,3,4,5,6,7,8,9][0-9]{9}$/.test(str)) {
        return true;
    }
    return false;
}

// 判断是否是银行卡号
export function isCardNumber(cardNumber) {
    // 检查是否只包含数字
    if (!/^\d+$/.test(cardNumber)) {
        return false;
    }

    // 检查长度是否在16到19之间
    if (cardNumber.length < 16 || cardNumber.length > 19) {
        return false;
    }

    // Luhn算法校验
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i), 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return (sum % 10) === 0;
}

/**
 * 是否为url链接
 * @param str
 * @returns {boolean}
 */
export function isValidURL(str) {
    const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!urlPattern.test(str);
}

/**
 * 是否为域名
 * @param str
 * @returns {*|boolean}
 */
export function isValidDomain(str) {
    const domainPattern = /^[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,}$/;
    const domainParts = str.split('.');

    // 确保有至少两个部分（例如 example.com）
    if (domainParts.length < 2) {
        return false;
    }
    return domainParts.every(part => domainPattern.test(part));
}

/*
 * 是否为域名或url
 */
export function isURLorDomain(str) {
    return isValidURL(str) || isValidDomain(str);
}

export function isIp(str) {
    var reg = /^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/;
    if (reg.test(str)) {
        return true;
    }
    return false;
}

export function previewImage(url) {
    let imgStyle =  'max-width: 80vw;'
    let imgHtml = `<img src='${url}' style="${imgStyle}"/>`;
    const wrapBox = document.createElement('div')
    wrapBox.classList.add('zm-preview-mask')
    wrapBox.innerHTML = imgHtml
    wrapBox.addEventListener('click',() => {
        wrapBox.remove()
    })
    document.body.appendChild(wrapBox);
}

export function formatBytes(bytes) {
    if (bytes === 0) return '0B';
    const k = 1024;
    const sizes = ['B', 'KB', 'M', 'G'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    // 保留两位小数
    const convertedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(2));
    return `${convertedSize}${sizes[i]}`;
}

export function  downloadFile(fileUr, filename="") {
    const x = new window.XMLHttpRequest();
    x.open('GET', fileUr, true);
    x.responseType = 'blob';
    x.onload = () => {
        const url = window.URL.createObjectURL(x.response);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
    };
    x.send();
}

// 判断文件类型
export function matchType(fileName) {
  // 获取后缀
  let suffix = ''
  // 获取类型的结果
  let result = ''
  try {
    let fileArr = fileName.replace(/\s+/g, '').split('.')
    suffix = fileArr[fileArr.length - 1]
  } catch (error) {
    suffix = ''
  }
  // 如果fileName无后缀则返回false
  if (!suffix) {
    result = 'unknown'
    return result
  }
  if (suffix == 'doc' || suffix == 'docx') {
    result = 'word'
    return result
  }
  if (['xls', 'xlsx', 'xlsb', 'xlsm', 'csv'].includes(suffix)) {
    result = 'xlsx'
    return result
  }
  if (['pptx', 'pps', 'ppsx', 'ppa', 'pot', 'potx', 'thmx'].includes(suffix)) {
    result = 'ppt'
    return result
  }
  if (['rar', '7z', 'tgz'].includes(suffix)) {
    result = 'zip'
    return result
  }
  return suffix
}

export default function tableToExcel(str, jsonData, fieds, name) {
    //jsonData要导出的json数据
    //str列标题，逗号隔开，每一个逗号就是隔开一个单元格
    //增加\t为了不让表格显示科学计数法或者其他格式
    for (let i = 0; i < jsonData.length; i++) {
        for (let item of fieds) {
            str += `"${jsonData[i][item] + '\t'}",`;
        }
        str += '\n';
    }
    //encodeURIComponent解决中文乱码
    let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
    //通过创建a标签实现
    let link = document.createElement("a");
    link.href = uri;
    //对下载的文件命名
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


export const MonthOptions = [
    {
        value: 0,
        label: "全年",
    },
    {
        value: 1,
        label: "一月",
    },
    {
        value: 2,
        label: "二月",
    },
    {
        value: 3,
        label: "三月",
    },
    {
        value: 4,
        label: "四月",
    },
    {
        value: 5,
        label: "五月",
    },
    {
        value: 6,
        label: "六月",
    },
    {
        value: 7,
        label: "七月",
    },
    {
        value: 8,
        label: "八月",
    },
    {
        value: 9,
        label: "九月",
    },
    {
        value: 10,
        label: "十月",
    },
    {
        value: 11,
        label: "十一月",
    },
    {
        value: 12,
        label: "十二月",
    },
]


export function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // 转义特殊字符
}

export function getRegex(variable) {
    return  new RegExp(escapeRegExp(variable), 'g');
}