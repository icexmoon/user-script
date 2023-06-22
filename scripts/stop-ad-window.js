// ==UserScript==
// @name         关闭允许广告弹窗
// @namespace    https://icexmoon.cn/
// @version      0.3
// @description  用于关闭 baeldung.com 频繁出现的要求允许广告弹窗
// @author       icexmoon@qq.com
// @license      MIT
// @match        https://www.baeldung.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baeldung.com
// @grant        none
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// ==/UserScript==
let waitMills = 500;
let totalCheckTimes = 200;
let checkTimes = 0;
(function() {
    'use strict';

    // Your code here...

    setTimeout(closeADWindow, waitMills);
    $(document).ready(modifyMainWidth);
})();

function modifyMainWidth(){
    $("#main:not(:only-child)").css("width","calc(100% - 0px - 3vw)");
}

function closeADWindow(){
    if(checkTimes >= totalCheckTimes){
        console.log("检测循环次数超过最大次数("+totalCheckTimes+"),脚本自动结束。")
        return;
    }
    let closeBtn = document.querySelector("button[tabindex][aria-label=Close]");
    if(closeBtn != null){
        closeBtn.click();
        console.log("弹窗被关闭");
    }
    else{
        console.log("未发现广告弹窗");
        setTimeout(closeADWindow, waitMills);
    }
    checkTimes++;
}