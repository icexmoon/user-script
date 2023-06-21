// ==UserScript==
// @name         关闭允许广告弹窗
// @namespace    https://icexmoon.cn/
// @version      0.1
// @description  用于关闭 baeldung.com 频繁出现的要求允许广告弹窗
// @author       icexmoon@qq.com
// @license      MIT
// @match        https://www.baeldung.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baeldung.com
// @grant        none
// ==/UserScript==
let waitMills = 2000;
(function() {
    'use strict';

    // Your code here...

    setTimeout(closeADWindow, waitMills);
})();

function closeADWindow(){
    let closeBtn = document.querySelector("button[tabindex][aria-label=Close]");
    if(closeBtn != null){
        closeBtn.click();
        console.log("弹窗被关闭");
    }
    else{
        console.log("未发现广告弹窗");
        setTimeout(closeADWindow, waitMills);
    }
}