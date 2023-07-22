package test;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;

public class Test_example {
	
	@Test
	public void test1()
	{
		
		Response response =RestAssured.get("https://reqres.in/api/users?page=2");
		System.out.println(response.getStatusCode());
		
		int statuscode = response.getStatusCode();
		
		Assert.assertEquals(statuscode, 200);
	
	}

}
