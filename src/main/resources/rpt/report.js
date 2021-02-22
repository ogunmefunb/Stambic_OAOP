$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/OnlineAOP_Features/OnlineAOP_OpenInstantAccount.feature");
formatter.feature({
  "name": "Verify that Customer can validate BVN via online account opening portal",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that user can validate BVN using valid information",
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
  "status": "passed"
});
formatter.step({
  "name": "User navigates and clicks on open an instant account icon",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineAOP_Logics.Online_AOP.Open_instant_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User chooses an account type between classic savings account",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineAOP_Logics.Online_AOP.Account_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on proceed button",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineAOP_Logics.Online_AOP.proceedButton()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "User Accepts terms and conditions",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineAOP_Logics.Online_AOP.acceptTandC()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineAOP_Logics.Online_AOP.submitForm()"
});
formatter.result({
  "status": "passed"
});
});