var args = require('system').args;
var address = args[1];
var steps = [];
var testindex = 0;
var loadInProgress = false;
var fs = require('fs');
var webPage = require('webpage');
var page = webPage.create();
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36';
page.settings.javascriptEnabled = true;
page.settings.loadImages = false;
phantom.cookiesEnabled = true;
phantom.javascriptEnabled = true;
page.onConsoleMessage = function (msg) {
    console.log(msg);
};

steps = [
    function () {
        page.open(address, function (status) {
            console.log(status);
        });
    },
    // //Step 3
    function () {
        var result = page.evaluate(function () {
            var h1 = document.querySelectorAll("div.gin-mirrors > a")[0] ? document.querySelectorAll("div.gin-mirrors > a")[0].outerHTML : '';
            var h2 = document.querySelectorAll("div.gin-mirrors > a")[1] ? document.querySelectorAll("div.gin-mirrors > a")[1].outerHTML : '';
            var h3 = document.querySelectorAll("div.gin-mirrors > a")[2] ? document.querySelectorAll("div.gin-mirrors > a")[2].outerHTML : '';
            var h4 = document.querySelectorAll("div.gin-mirrors > a")[2] ? document.querySelectorAll("div.gin-mirrors > a")[3].outerHTML : '';
            var h5 = document.querySelectorAll("div.gin-mirrors > a")[4] ? document.querySelectorAll("div.gin-mirrors > a")[4].outerHTML : '';
            var h6 = document.querySelectorAll("div.gin-mirrors > a")[5] ? document.querySelectorAll("div.gin-mirrors > a")[5].outerHTML : '';
            var h7 = document.querySelectorAll("div.gin-mirrors > a")[6] ? document.querySelectorAll("div.gin-mirrors > a")[6].outerHTML : '';
            var h8 = document.querySelectorAll("div.gin-mirrors > a")[7] ? document.querySelectorAll("div.gin-mirrors > a")[7].outerHTML : '';
            var h9 = document.querySelectorAll("div.gin-mirrors > a")[8] ? document.querySelectorAll("div.gin-mirrors > a")[8].outerHTML : '';
            var h10 = document.querySelectorAll("div.gin-mirrors > a")[9] ? document.querySelectorAll("div.gin-mirrors > a")[9].outerHTML : '';
            return h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9 + h10;
        });
        fs.write('index.html', result, 'w');
    }
];

interval = setInterval(executeRequestsStepByStep, 100);
function executeRequestsStepByStep() {
    if (loadInProgress == false && typeof steps[testindex] == "function") {
        steps[testindex]();
        testindex++;
    }
    if (typeof steps[testindex] != "function") {
        console.log("test complete!");
        phantom.exit();
    }
}

page.onLoadStarted = function () {
    loadInProgress = true;
    console.log('Loading started');
};
page.onLoadFinished = function () {
    loadInProgress = false;
    console.log('Loading finished');
};
page.onConsoleMessage = function (msg) {
    console.log(msg);
};