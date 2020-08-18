package com.CommAcc;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class CommAcc {
	public static WebDriver driver;
	public static void launch() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Dell\\eclipse-workspace-new\\CucumberNew\\driver\\chromedriver.exe");
		driver =new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/index.html");
	    driver.manage().window().maximize();
		}
	
	public void text(WebElement e,String value) {
		e.sendKeys(value);
	}
	
	public void submit(WebElement e) {
		e.click();
	}
	public void handleFrame() throws InterruptedException {
		Thread.sleep(5000);
		driver.switchTo().frame("flow_close_btn_iframe");
		driver.findElement(By.xpath("//div[@id='closeBtn']")).click();
		driver.switchTo().defaultContent();
		
	}
	
}
