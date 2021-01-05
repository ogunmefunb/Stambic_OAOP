package GreenKart_Runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.testng.annotations.Test;

@RunWith(Cucumber.class)
//@Test()
@CucumberOptions(
		strict = true,
		features = "src/main/resources/GreenKart_Features/GreenKart.feature",
		glue = ""
		)


public class GK_Runner {

}
