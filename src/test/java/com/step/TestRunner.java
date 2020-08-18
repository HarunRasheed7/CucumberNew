package com.step;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Feature",
                  glue="com.step",
                  monochrome=true,
                  plugin="html:target/report",
                  dryRun=false,
                  tags="@smoke")

public class TestRunner {

}
