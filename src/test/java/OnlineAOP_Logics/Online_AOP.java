package OnlineAOP_Logics;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Map;
import java.util.concurrent.TimeUnit;
//import cucumber.api.java.en.When;


public class Online_AOP {
	WebDriver driver = null;


//	WebDriverWait explicitWait = new WebDriverWait(driver, 10);
//	Wait<WebDriver> wai = new FluentWait<WebDriver>(driver).withTimeout(Duration.ofSeconds(50)).pollingEvery(Duration.ofSeconds(5));


	@Given("^User (?:is on|navigates to|launches) (http.*)$")
	public void NavigateTo(String url)
			{

				System.setProperty("webdriver.chrome.driver","C:\\Users\\TezzaSolutions\\Desktop\\Prime\\Selenium\\Extracted\\chromedriver_win32\\chromedriver.exe");
				driver = new ChromeDriver();
				driver.manage().timeouts().implicitlyWait(5, TimeUnit.MINUTES);
				driver.manage().window().maximize();
				driver.get(url);
		
			}
	

	@Then("^User navigates and clicks on open an instant account icon$")
	public void Open_instant_account()
			{
				
				WebElement openInstantAccountIcon = driver.findElement(By.xpath("//span[text()=' Open An Instant Account']"));
				openInstantAccountIcon.click();
			}
			
				
	@Then("^System displays Online account Opening Page$")
	public void Online_account_opening_page( )
			{
				String OAOPtitle = driver.getTitle();
//				Assert.assertTrue(OAOPtitle.contains("Online Account Opening"));
			}

	@Then("^User chooses an account type between classic savings account$")
	public void Account_type() {
//		explicitWait.until(ExpectedConditions.elementToBeClickable(By.xpath("<<xpath expression>>")));
//		Thread.sleep(5000);
		driver.findElement(By.xpath("//tbody/tr[9]/td[1]/div/input")).click();

	}
	

	    

		@Then("^User clicks on proceed button$")
		public void proceedButton()
				{
					driver.findElement(By.cssSelector("#disclaimer > div > div > div.pb-4 > div > button")).click();

				}

		@Then("^User Accepts terms and conditions$")
		public void acceptTandC() {
		driver.findElement(By.xpath("//div[@class='form-group form-check']/input[@id='exampleCheck1']")).click();
		driver.findElement(By.id("TCAccept")).click();

		}
		@Then("^User inputs validation data as stated below:$")
		public void acctValidation(DataTable valData) {
		Map<String, String> validation_data = valData.asMap(String.class, String.class);
		driver.findElement(By.className("form-control col-lg-7")).sendKeys(validation_data.get("BVN"));
		driver.findElement(By.id("inputState1")).sendKeys(validation_data.get("Day Of Birth"));
		driver.findElement(By.id("inputState2")).sendKeys(validation_data.get("Month Of Birth"));
		driver.findElement(By.id("inputState3")).sendKeys(validation_data.get("Year Of Birth"));

		}

		@Then("^User clicks Submit button$")
	public void submitForm() {
		driver.findElement(By.xpath("//button[@id='ValidateBvn']")).click();

		}



}
