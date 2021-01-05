package GreenKart_Runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		strict = true,
		features = "src/main/resources/GreenKart_Features/GreenKart_checkoutVerification.feature",
		glue = ""
		)


public class GK_Runner {

}
