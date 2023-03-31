// ==UserScript==
// @name         my-app
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  try to take over the world!
// @author
// @match        *://*/*

// ==/UserScript==

;(function () {
    'use strict'
    var script = document.createElement('script')
    // script.src = 'http://127.0.0.1:5173/src/main'
    script.src = 'http://127.0.0.1/tampermonkey/bili/index.bundle.js'
    document.body.appendChild(script)

    const css = document.createElement('link')
    css.rel="stylesheet"
    css.href="http://127.0.0.1/tampermonkey/bili/index.css"
    document.head.appendChild(css)
})()
