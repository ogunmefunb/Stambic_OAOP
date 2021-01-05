package GreenKart_Logics;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import org.testng.Assert;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
//import cucumber.api.java.en.When;


public class GK_Logic {
	//public String[] listOfProducts = {};
	List<WebElement> products = null;
	WebDriver driver = null;


	@Given("^User (?:is on|navigates to|launches) (http.*)$")
	public void NavigateTo(String url) throws Throwable
			{
				System.setProperty("webdriver.chrome.driver","C:\\Users\\TezzaSolutions\\Desktop\\Prime\\Selenium\\Extracted\\chromedriver_win32\\chromedriver.exe");
				driver = new ChromeDriver();
				driver.manage().timeouts().implicitlyWait(5, TimeUnit.MINUTES);
				driver.manage().window().maximize();
				driver.get(url);
		
			}
	

	@Then("^User assess GreenKart Products$")
	public void user_clicks_on_Join_free() throws Throwable
			{
				
				WebElement signInLink = driver.findElement(By.cssSelector("div.products-wrapper>div.products"));
				Assert.assertTrue(signInLink.isDisplayed());
			}
			
				
	@Then("^User adds products to cart$")
	public void addProductsToCart(DataTable listOfProducts ) throws Throwable
			{
//					String[] listOfProducts = { "Cucumber", "Brocolli", "Pumpkin", "Orange", "Water Melon"};
				
					int j = 0;
					
					// Convert Array to Array List so you would be able to use the contains functionality for easy search
//					List<String> listOfProductsList = Arrays.asList(listOfProducts);
					
					// Convert DataTable to Array List so you would be able to use the contains functionality for easy search
					List<String> listOfProductsList = listOfProducts.asList(String.class);
					// Create a list of online products
					List<WebElement> products = driver.findElements(By.cssSelector("h4.product-name"));
					//System.out.println(products);
								
					// Iterate through the list of products
					for (int i = 0; i < products.size(); i++)
							{
									String[] name = products.get(i).getText().split("-");
									//System.out.println(name[0]);
									String formattedName = name[0].trim();
									//System.out.println(formattedName);
						
									// Check whether the name extracted is present in array or not
									if (listOfProductsList.contains(formattedName))
											{
												
												j++;
												
												System.out.println(formattedName);
												// Click to add to cart
												driver.findElements(By.xpath("//div[@class='product-action']/button")).get(i).click();	
												if (listOfProductsList == null)
												{break;}
											}	
}

			}
	
		@Then("^User checks-out selected products$")
		public void checkOut() throws Throwable
				{
					driver.findElement(By.cssSelector("img[alt='Cart']")).click();
					driver.findElement(By.xpath("//button[text()=('PROCEED TO CHECKOUT')]")).click();
					driver.findElement(By.cssSelector(".promoCode")).sendKeys("rahulshettyacademy");
					driver.findElement(By.cssSelector(".promoBtn")).click();
					System.out.println(driver.findElement(By.cssSelector(".promoInfo")).getText());
										
				}
			
	    

		@Then("^User clicks on Place order$")
		public void placeOrder() throws Throwable
				{
					driver.findElement(By.xpath("//button[text()=('Place Order')]")).click();

				}


	@Then ("^User selects (.*?) as Country$")
	public void countrySelection(String country) throws Throwable
	{
		Thread.sleep(5000);
		Select Country =  new Select (driver.findElement(By.cssSelector("#root > div > div > div > div > div > select")));
		Country.selectByVisibleText(country);
				}

		@Then("^User agrees to Terms and Conditions$")
		public void termConditions() throws Throwable
				{
					driver.findElement(By.className("chkAgree")).click();
				}
		
		@Then("^User clicks on proceed$")
		public void proceed() throws Throwable
				{
					driver.findElement(By.xpath("//button[text()=('Proceed')]")).click();
				
				}
		
}
