package com.step;

import org.junit.Assert;
import org.openqa.selenium.By;

import com.CommAcc.CommAcc;
import com.addcuspage.AddCusPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddCus extends CommAcc {
	AddCusPage a=new AddCusPage();
	

	@Given("user click on add customer step")
	public void user_click_on_add_customer_step() {
		submit(a.getAddcusbutton());
		
	   
	}

	@When("user filling the datas")
	public void user_filling_the_datas() throws InterruptedException {
		handleFrame();
		submit(a.getRadiobutton());
		text(a.getFname(), "HArun");
		text(a.getLname(), "ppp");
		text(a.getAddr(),"Delhi");
		text(a.getEmail(), "harun@mail.com");
		text(a.getPhno(), "3543633535");
	    
	  
	}

	@When("user clicks on submit")
	public void user_clicks_on_submit() {
		submit(a.getSubmit());
	    
	}

	@Then("user verify the code")
	public void user_verify_the_code() throws InterruptedException {
		handleFrame();
		Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	String text = driver.findElement(By.xpath("(//td[@align='center'])[2]")).getText();
	System.out.println(text);
		
	    
	}
	

}
