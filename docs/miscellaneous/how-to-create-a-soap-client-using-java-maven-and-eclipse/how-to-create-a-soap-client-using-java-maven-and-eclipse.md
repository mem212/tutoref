---
slug: "/how-to-create-a-soap-client-using-java-maven-and-eclipse"
title: "How to create a SOAP client using java, maven and eclipse"
---

In this tutorial we will see how to create a java soap client using maven and eclipse. You can adapt with your configuration if you are using other tools.

For the example, we will use the AWSECommerceService SOAP service from Amazon. you may need additional keys generated from Amazon’s website to make the example work. The WSDL is available at :

http://webservices.amazon.com/AWSECommerceService/AWSECommerceService.wsdl

## Create a new project

Create a new maven project using the maven-archetype-quickstart.

![new eclipse project](/img/tutorial/eclipse-maven-new-project.png)

## Download the WSDL

Download and put the the wsdl file in **src/main/resources** . You may have to create the folder if it does not exist.

![soap client project structure](/img/tutorial/soap-client-project-structure.png)


## Add maven dependencies and plugins

Open the pom.xml file and add the maven-compiler-plugin and the cxf-codegen-plugin as follows:

```xml
<properties>
 <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
 <cxf.version>3.3.0</cxf.version>
</properties>
<build>
 <plugins>
  <plugin>
   <groupId>org.apache.maven.plugins</groupId>
   <artifactId>maven-compiler-plugin</artifactId>
   <version>3.2</version>
   <configuration>
    <source>1.8</source>
    <target>1.8</target>
   </configuration>
  </plugin>
  <plugin>
   <groupId>org.apache.cxf</groupId>
   <artifactId>cxf-codegen-plugin</artifactId>
   <version>${cxf.version}</version>
   <executions>
    <execution>
     <id>generate-sources</id>
     <phase>generate-sources</phase>
     <configuration>
      <sourceRoot>${basedir}/src/generated</sourceRoot>
      <wsdlOptions>
       <wsdlOption>
        <wsdl>${basedir}/src/main/resources/AWSECommerceService.wsdl
        </wsdl>
       </wsdlOption>
      </wsdlOptions>
     </configuration>
     <goals>
      <goal>wsdl2java</goal>
     </goals>
    </execution>
   </executions>
  </plugin>
 </plugins>
 <finalName>soapclient</finalName>
</build>
```

In the dependencies section add the following dependencies :

```xml
<dependency>
 <groupId>org.apache.cxf</groupId>
 <artifactId>cxf-rt-frontend-jaxws</artifactId>
 <version>${cxf.version}</version>
</dependency>
<dependency>
 <groupId>org.apache.cxf</groupId>
 <artifactId>cxf-rt-transports-http</artifactId>
 <version>${cxf.version}</version>
</dependency>
```

## Generate the classes using CXF codegen plugin

To generate the classes using eclipse Do a right click on the project then click on  **Run as > Maven generate resources**. This will be generate the required classes under **src/generated**. You may have to add the new generated folder into eclipse build path, but it’s not necessary to execute the maven build.


## Consume the SOAP service

Final step is to use the generated classes in order to consume the service like in the following example :

```java
package com.tutoref.soapclient;

import java.net.MalformedURLException;
import java.net.URL;

import com.amazon.webservices.awsecommerceservice._2011_08_01.AWSECommerceService;
import com.amazon.webservices.awsecommerceservice._2011_08_01.AWSECommerceServicePortType;
import com.amazon.webservices.awsecommerceservice._2011_08_01.ItemSearch;
import com.amazon.webservices.awsecommerceservice._2011_08_01.ItemSearchResponse;

public class App{
 
 public static void main( String[] args ){
  try {
   // instantiate the client !! 
   // this is only an example, to make the code work you may need to generate keys
   // Documentation is available on Amazon's website
   URL url = new URL("http://webservices.amazon.com/AWSECommerceService/AWSECommerceService.wsdl");
   AWSECommerceService service = new AWSECommerceService(url);
   AWSECommerceServicePortType port = service.getAWSECommerceServicePortCA();

   // prepare the search criteria
   ItemSearch itemSearch = new ItemSearch();
   itemSearch.setAssociateTag("eBook");

   // invoke the search action
   ItemSearchResponse itemSearchResponse = port.itemSearch(itemSearch);

   // .. Do whatever what you do with the response ...

  } catch (MalformedURLException e) {
   e.printStackTrace();
  }
 }   
}
```
