# http 请求参数解析

TCP/IP 协议
d 目标 ip 及端口： 180.97.93.62:443（如果是 https 协议端口为 443，http 默认为 80）
s 来源谁访问的：192.168.99.190：9090
HTTP 中都是用文本形式来传输，这个文本里面有两部分组成，一部分是请求头一部分是请求体
HTTP 协议
请求头（放置请求相关的信息）
请求体（一般都是 POST 请求表单传输的数据）
格式：
请求行 ---> 请求方法 空格 URL 空格 协议版本 换行符
请求头部 ---> 请求头部字段名 ： 值 回车符 换行符
空一行 ---> 回车符 换行符

请求数据
username=admin&password=123456

GET /api/usercenter/login?msg=1&\_=1601900250637 HTTP/1.1
Host: baike.baidu.com
Connection: keep-alive
Accept: application/json, text/javascript, _/_; q=0.01
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36 （判断是谁给我发的请求）
X-Requested-With: XMLHttpRequest
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://baike.baidu.com/item/%E9%9B%B7%E5%86%9B/1968?fr=aladdin
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9
Cookie: BIDUPSID=E25A008832AF7E1DE6D0D21669BD7BA6; PSTM=1594549670; BAIDUID=E25A008832AF7E1D2109678E213B407B:FG=1; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598;（登录验证） H_PS_PSSID=32820_32617_1442_32735_31660_32795_32723_32231_7516_7605_32116_32719_26350; Hm_lvt_55b574651fcae74b0a9f1cf9c8d7c93a=1601714765,1601900243,1601900250; Hm_lpvt_55b574651fcae74b0a9f1cf9c8d7c93a=1601900250

# http 响应参数解析

HTTP 相应也是由四部分组成，分别是状态行、消息报头、空行和响应正文
状态行 ---> HTTP/1.1 200 OK
消息报头 ---> Connection: keep-alive
Content-Security-Policy-Report-Only: default-src https: 'unsafe-inline' 'unsafe-eval' data: blob: ; report-uri https://reports.baidu.com/csp-report/baike
Content-Type: application/json
Date: Mon, 05 Oct 2020 12:17:31 GMT
Server: Apache
Content-Length: 28
空行
响应正文
{"errno":0,"isLogin":false}
