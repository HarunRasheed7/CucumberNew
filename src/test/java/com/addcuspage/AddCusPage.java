package com.addcuspage;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.CommAcc.CommAcc;

public class AddCusPage extends CommAcc{
public  AddCusPage() {
	PageFactory.initElements(driver, this);
}
@FindBy(xpath=("(//a[text()='Add Customer'])[1]"))
private WebElement addcusbutton;
@FindBy(xpath="//label[@for='done']")
private WebElement radiobutton;
@FindBy(id="fname")
private WebElement fname;
@FindBy(id="lname")
private WebElement lname;
@FindBy(id="email")
private WebElement email;
@FindBy(name="addr")
private WebElement addr;
public WebElement getAddcusbutton() {
	return addcusbutton;
}
public WebElement getFname() {
	return fname;
}
public WebElement getRadiobutton() {
	return radiobutton;
}
public WebElement getLname() {
	return lname;
}
public WebElement getEmail() {
	return email;
}
public WebElement getAddr() {
	return addr;
}
public WebElement getPhno() {
	return phno;
}
public WebElement getSubmit() {
	return submit;
}
@FindBy(id="telephoneno")
private WebElement phno;
@FindBy(name="submit")
private WebElement submit;
}
