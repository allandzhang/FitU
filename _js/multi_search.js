jQuery.noConflict(); //将变量$的控制权让渡

function $(id)
{return document.getElementById(id);
}

// -------------------------------------------------------------------------------------------- 其中  name = wd
// ------------------ baidu
function Baidu(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="http://www.baidu.com/s";
okeyword.name="wd";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}

// ------------------ Chinaso
function Chinaso(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="http://www.chinaso.com/search/pagesearch.htm";
okeyword.name="q";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}

// ------------------ So360
function So360(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="https://www.so.com/s";
okeyword.name="q";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}

// ------------------ Weixin
function Weixin(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="http://weixin.sogou.com/weixin";
okeyword.name="query";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}


// ------------------ Sogou
function Sogou(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="https://www.sogou.com/web";
okeyword.name="query";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}


// --------------------------------------------------------------------------------------------
// ------------------ Google
function Google(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="https://www.google.com/search";
okeyword.name="q";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}

// ------------------ Yahoo
function Yahoo(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="https://search.yahoo.com/search";
okeyword.name="p";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}

// ------------------ Bing
function Bing(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="http://www.bing.com/search";
okeyword.name="q";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}

// ------------------ Naver
function Naver(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="https://search.naver.com/search.naver";
okeyword.name="query";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}

// --------------------------------------------------------------------------------------------
// ------------------ Amazon
function Amazon(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="https://www.amazon.cn/s";
okeyword.name="field-keywords";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}

// ------------------ Taobao
function Taobao(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="https://s.taobao.com/search";
okeyword.name="q";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}

// --------------------------------------------------------------------------------------------
// ------------------ BaisoBing
function BaisoBing(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="http://BaiSoBing.com/index.php";
okeyword.name="q";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}

// ------------------ Gobaidugle
function Gobaidugle(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="https://www.gobaidugle.com/search4.php";
okeyword.name="keyword";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}


// ------------------ Sina_weibo
function sina_weibo(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="https://s.weibo.com/weibo";
okeyword.name="q";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}


// ------------------ 今日头条
function jinritoutiao(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="https://www.toutiao.com/search";
okeyword.name="keyword";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}


// --------------------------------------------------------------------------------------------
// ------------------ Zhihu
function Zhihu(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="https://www.zhihu.com/search";
okeyword.name="q";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}

// ------------------ Quora
function Quora(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="https://www.quora.com/search";
okeyword.name="q";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}

// ------------------ Zhilian
function Zhilian(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="https://sou.zhaopin.com/jobs/searchresult.ashx";
okeyword.name="kw";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}

// ------------------ liepin
function Liepin(){
var okeyword=$("keyword");
var oForm=$("searchForm");

oForm.action="https://www.liepin.com/zhaopin/";
okeyword.name="key";
oForm.method="get";
oForm.target="_blank";
oForm.submit();
}
