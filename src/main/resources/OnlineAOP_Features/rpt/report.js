$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/OnlineAOP_Features/OnlineAOP_OpenInstantAccount.feature");
formatter.feature({
  "name": "Open Instant Account",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that user can open instant account",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on https://www.stanbicibtcbank.com/",
  "keyword": "Given "
});
formatter.match({
  "location": "OnlineAOP_Logics.Online_AOP.NavigateTo(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_NAME_NOT_RESOLVED\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO-PC\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\TEZZAS~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56569}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: dd394b6639b155fc70c7b238da3a5185\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat OnlineAOP_Logics.Online_AOP.NavigateTo(Online_AOP.java:38)\r\n\tat ✽.User is on https://www.stanbicibtcbank.com/(file:///C:/Users/TezzaSolutions/eclipse-workspace/Stambic_OAOP/src/main/resources/OnlineAOP_Features/OnlineAOP_OpenInstantAccount.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User navigates and clicks on open an instant account icon",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineAOP_Logics.Online_AOP.Open_instant_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "System displays Online account Opening Page",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineAOP_Logics.Online_AOP.Online_account_opening_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User chooses an account type between classic savings account",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineAOP_Logics.Online_AOP.Account_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on proceed button",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineAOP_Logics.Online_AOP.proceedButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User inputs validation data as stated below:",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineAOP_Logics.Online_AOP.acctValidation(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Accepts terms and conditions",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineAOP_Logics.Online_AOP.acceptTandC()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineAOP_Logics.Online_AOP.submitForm()"
});
formatter.result({
  "status": "skipped"
});
});