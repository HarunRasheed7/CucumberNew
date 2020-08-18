package com.step;

import com.CommAcc.CommAcc;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook extends CommAcc {
	
	@Before
	public void beforeScenario() {
		launch();
	}
	
	@After
	public void AfterScenario() {
		driver.quit();
	}

}
