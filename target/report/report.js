$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/AddCus.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user click on add customer step",
  "keyword": "And "
});
formatter.match({
  "location": "AddCus.user_click_on_add_customer_step()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"addcustomer.php\"\u003e...\u003c/a\u003e is not clickable at point (237, 390). Other element would receive the click: \u003ciframe id\u003d\"primis_playerSekindoSPlayer5f3b4dddbae98\" title\u003d\"Primis Player Videos\" scrolling\u003d\"no\" allowfullscreen\u003d\"\" style\u003d\"border: none; position: fixed; bottom: 10px; width: 315px; height: 177px; box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 6px 3px; border-radius: 1px; z-index: 2147483646; left: 10px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d84.0.4147.125)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GA-LAP\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.125, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:65180}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 434711f9c9d4f532894f3195ebb6075a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.CommAcc.CommAcc.submit(CommAcc.java:22)\r\n\tat com.step.AddCus.user_click_on_add_customer_step(AddCus.java:19)\r\n\tat ✽.user click on add customer step(src/test/resources/Feature/AddCus.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user filling the datas",
  "keyword": "When "
});
formatter.match({
  "location": "AddCus.user_filling_the_datas()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on submit",
  "keyword": "And "
});
formatter.match({
  "location": "AddCus.user_clicks_on_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verify the code",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCus.user_verify_the_code()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});