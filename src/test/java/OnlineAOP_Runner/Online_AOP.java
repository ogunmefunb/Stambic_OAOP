package OnlineAOP_Runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.testng.annotations.Test;

//@Test
@RunWith(Cucumber.class)
@CucumberOptions(
		strict = true,
		features = "src/main/resources/OnlineAOP_Features/OnlineAOP_OpenInstantAccount.feature",
		glue = "",
		plugin = { "pretty", "html:src/main/resources/rpt" },
		monochrome = true
							)


public class Online_AOP {

}
