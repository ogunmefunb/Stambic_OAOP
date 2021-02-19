package Setup;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class lunchBrowser {

    public static WebDriver driver;
    protected WebDriver getDriver() {

        System.setProperty("webdriver.chrome.driver","src\\main\\resources\\Driver\\chromedriver_win32\\chromedriver.exe");
        if (driver == null) {
            driver = new ChromeDriver();
        }
        return driver;
}
}


