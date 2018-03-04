package controllers;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Scanner;

import org.json.JSONObject;
import org.json.simple.parser.JSONParser;

import play.*;
import play.libs.Json;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    /*public static Result index() {
        return ok(index.render("Your new application is ready."));
    	
    	
    }*/

	public static Result getData(){
		JSONParser parser = new JSONParser();
		JSONObject jsonObject = null;
		try
		{
			Object obj = parser.parse(new FileReader("././public/javascripts/db.json"));
			 jsonObject = (JSONObject) obj;
			
		}
		
		catch(Exception e) {
			e.printStackTrace();
		}
		
		return ok(Json.toJson(jsonObject));
	}
}
