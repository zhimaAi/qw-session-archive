const USER_INFO_KEY = 'zm:session:archive:login:user';

// 定义一个Cookie对象
var Cookie = {
    // 设置cookie
    set: function(name, value, expire) {
      var cookie = name + "=" + encodeURIComponent(value);
      if (expire) {
        cookie += "; expires=" + expire.toUTCString();
      }
      document.cookie = cookie;
    },

    // 获取cookie
    get: function(name) {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        if (parts[0].trim() === name) {
          return decodeURIComponent(parts[1]);
        }
      }
      return '';
    },

    // 指定域名存储
    setCookieAcrossSubdomains(name, value, days, domain) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; domain=" + domain + "; path=/";
    },

    // 删除cookie
    remove: function(name) {
      this.set(name, '', new Date(0));
    }
};

function formatLocation (domain) {
    // zhimahuihua.com
    // demo.zhimahuihua.com
    if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z0-9]{2,}$/.test(domain)) {
        // 如果是一级域名，则添加点
        return '.' + domain;
    } else {
        // 取第二个.后面的内容
        return domain.match(/^[^.]*(.*)/)[1]
    }
}

export function setCookieAcrossSubdomain(data) {
    Cookie.setCookieAcrossSubdomains(USER_INFO_KEY, data, 1, formatLocation(window.location.host))
}