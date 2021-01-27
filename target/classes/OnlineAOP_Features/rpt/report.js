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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class OnlineAOP_Logics.Online_AOP\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 31 more\r\nCaused by: java.lang.NullPointerException\r\n\tat java.util.Objects.requireNonNull(Objects.java:203)\r\n\tat org.openqa.selenium.support.ui.FluentWait.\u003cinit\u003e(FluentWait.java:106)\r\n\tat org.openqa.selenium.support.ui.FluentWait.\u003cinit\u003e(FluentWait.java:97)\r\n\tat OnlineAOP_Logics.Online_AOP.\u003cinit\u003e(Online_AOP.java:23)\r\n\t... 36 more\r\n",
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