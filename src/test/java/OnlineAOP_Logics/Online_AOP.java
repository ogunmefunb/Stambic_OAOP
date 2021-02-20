package OnlineAOP_Logics;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;

import java.io.File;
import java.time.Duration;
import java.util.Map;

public class Online_AOP extends Setup.lunchBrowser {

	WebDriver driver = getDriver();
	
	//Fluent Wait
	public Wait<WebDriver> wait = new FluentWait<>(driver).withTimeout(Duration.ofSeconds(20)).pollingEvery(Duration.ofSeconds(2)).ignoring(NoSuchElementException.class);


	//Locator Objects
	By openInstantAccountIcon = By.xpath("//span[text()=' Open An Instant Account']");
	By SelectAccountType = By.xpath("/html/body/div[1]/div/div/div[1]/div/div/div[1]/table/tbody/tr[9]/td[1]/div/input");
	By clickProceedButton = By.cssSelector("#disclaimer > div > div > div.pb-4 > div > button");
	By agreetoTnC = By.xpath("//div[@class='form-group form-check']/input[@id='exampleCheck1']");
	By acceptTnC = By.id("TCAccept");
	By BVNTexttBox = By.cssSelector("#exampleInputEmail1");
	By DayOfBirthTextBox = By.id("inputState1");
	By monthOfBirthTextBox = By.id("inputState2");
	By yearOfBirthTextBox = By.id("inputState3");
	By SubmitBvnVerificationForm = By.xpath("//button[@id='ValidateBvn']");
	By signatureUploadField = By.xpath("//*[@id=\"upload_file_sig\"]");



	@Given("^User (?:is on|navigates to|launches) (http.*)$")
	public void NavigateTo(String url)
			{
				//Maximize Browser
				driver.manage().window().maximize();

				//Open URL
				driver.get(url);

			}
	

	@Then("^User navigates and clicks on open an instant account icon$")
	public void Open_instant_account()
			{
				//wait for Open Instant Account button to be located
				wait.until(ExpectedConditions.elementToBeClickable(openInstantAccountIcon));
				// Click Open Instant Account button
				driver.findElement(openInstantAccountIcon).click();
			}
			
				


	@Then("^User chooses an account type between classic savings account$")
	public void Account_type() {
		//Wait to Locate account type radio Button
		wait.until(ExpectedConditions.elementToBeClickable(SelectAccountType));
		// Select Account Type Radio Button
		driver.findElement(SelectAccountType).click();

	}


	@Then("^User clicks on proceed button$")
	public void proceedButton() {
		wait.until(ExpectedConditions.elementToBeClickable(clickProceedButton));
		driver.findElement(clickProceedButton).click();

	}



		@Then("^User inputs validation data as stated below:$")
		public void acctValidation(DataTable valData) {
		Map<String, String> validation_data = valData.asMap(String.class, String.class);
		//Fill BVN
		wait.until(ExpectedConditions.visibilityOfElementLocated(BVNTexttBox));
		driver.findElement(BVNTexttBox).sendKeys(validation_data.get("BVN"));
		//Fill Day Of Birth
		wait.until(ExpectedConditions.visibilityOfElementLocated(DayOfBirthTextBox));
		driver.findElement(DayOfBirthTextBox).sendKeys(validation_data.get("Day Of Birth"));
		//Fill Month Of Birth
		wait.until(ExpectedConditions.visibilityOfElementLocated(monthOfBirthTextBox));
		driver.findElement(monthOfBirthTextBox).sendKeys(validation_data.get("Month Of Birth"));
		//Fill Year of Birth
		wait.until(ExpectedConditions.visibilityOfElementLocated(yearOfBirthTextBox));
		driver.findElement(yearOfBirthTextBox).sendKeys(validation_data.get("Year Of Birth"));

		}

	@Then("^User Accepts terms and conditions$")
	public void acceptTandC() {
		wait.until(ExpectedConditions.elementToBeClickable(agreetoTnC));
		driver.findElement(agreetoTnC).click();
		wait.until(ExpectedConditions.elementToBeClickable(acceptTnC));
		Actions actions = new Actions(driver);
		actions.moveToElement(driver.findElement(acceptTnC)).perform();
		driver.findElement(acceptTnC).click();

	}

		@Then("^User clicks Submit button$")
	public void submitForm() {
		//Submit BVN Validation Form
		driver.findElement(SubmitBvnVerificationForm).click();

		}

		@Then("^User uploads  Signature and clicks continue$")
		public void UploadSignature() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(signatureUploadField));
		WebElement	fileUpload = driver.findElement(signatureUploadField);
		String signaturePath = new File("\\src\\main\\resources\\Signature\\Signature.png").getAbsolutePath();
//			fileUpload.sendKeys("src\\main\\resources\\uploads\\.Signature.png");

		}


}
