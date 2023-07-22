package api.endpoints;
import static io.restassured.RestAssured.given;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.*;

//Create CRUD operations

public class UserEndPoints {
	
	public static createUser(User payload)
	{
		Response response= given()
		 .contentType(ContentType.JSON)
		 .accept(ContentType.JSON)
		 .body(payload)
		 .when()
		 .post(Routes.post_url);
		
		return response;
		 
		 
		
	}
	
	public static readUser(String username)
	{
		Response response= given()
		 .pathParam("username", username)
		 
		 .when()
		 .get(Routes.get_url);
		
		return response; 
		
	}
	
	public static updateUser(String username,User payload)
	{
		Response response=given().contentType(ContentType.JSON)
		 .accept(ContentType.JSON).pathParam("username", username)
		 .body(payload)
		 
		 .when()
		 .put(Routes.put_url);
		
		return response;
		
	}
	
	public static deleteUser(String username)
	{
		Response response=given().pathParam("username", username)
		 
		 
		 .when()
		 .delete(Routes.delete_url);
		
		return response;
		
	}

}
