# hapoalim_app
img recognize micro service

This application consist of 2 micro services
source codes located in folders
1)mainApp - spring boot application with client side on Angular 7
2)ocrApp - spring boot application

first run mainApp:
1) application use maven 
2) please specify mainApp\src\main\resources\application.properties file
	application use solr and second application by default it use urls is	
	spring.data.solr.host=http://localhost:8983/solr 
	ocrApiUrl=http://localhost:8081
3)	to store data in solr please start your solr server
	execute in command line 
	solr start
	and create core
	solr create -c userData
4) after first start application add automaticly to solr data which specified in 
	src\main\java\com\myDemo\demo\controllers\ApiController.java
	 users.add(new UserData("Eran", "12345"));
     users.add(new UserData("Dima", "123"));
	 
	 next start wouldn't add no additional document in solr
	 
first run mainApp:
1) application use maven 
2)	please specify posrt in src\main\resources\application.properties file by default it is 8081
	if you will specify another port pleas change ocrApiUrl in first application respectively
