---
slug: "/how-to-read-and-write-properties-file"
title: "How to read and write Properties file in java 8"
---

In Java, properties files are used to store data and configuration. This tutorial will show you how to store and read properties files in Java 8.

# Using InputStream and OutputStream
## Write to properties file

```java
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Properties;

public class PropertiesFileSample {
 
 final private static String PROPERTIES_FILE_PATH="config.properties";

 public static void main(String[] args) {
  
  Properties properties = new Properties();
  
  // using java 8 try-with-resources structure,
  // so the output stream will be closed automatically
  try(OutputStream outputStream = new FileOutputStream(PROPERTIES_FILE_PATH)){
   
   // set some values
   properties.setProperty("username", "sampleusername");
   properties.setProperty("url", "tutoref.com");
   
   // store the values
   properties.store(outputStream, null);
   
  } catch (IOException e) {
   e.printStackTrace();
  } 
 }

}
```

The result will look like this :

```
#Sat Jul 08 23:55:53 EDT 2017
url=tutoref.com
username=sampleusername
```

## Read from a properties file

```java
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class PropertiesFileSample {
 
 final private static String PROPERTIES_FILE_PATH="config.properties";

 public static void main(String[] args) {
 
  Properties properties = new Properties();
 
  // using java 8 try-with-resources structure
  // so the input stream will be closed automatically
  try(InputStream inputStream = new FileInputStream(PROPERTIES_FILE_PATH)){
 
  // read a value
  String url = properties.getProperty("url");
 
  // display the value
  System.out.println(url);
 
 } catch (IOException e) {
  e.printStackTrace();
 } 
 }
}
```

# Load properties from classpath

```java
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class PropertiesFileSample {
 
 final private static String PROPERTIES_FILE_PATH="config.properties";

 public static void main(String[] args) {
  
  Properties properties = new Properties();
  
  // using java 8 try-with-resources structure
  // so the input stream will be closed automatically
  try(
    InputStream inputStream=
    PropertiesFileSample.class.getResourceAsStream(PROPERTIES_FILE_PATH)
    ){
   
   // load the properties
   properties.load(inputStream);
   
   // read a value
   String url = properties.getProperty("url");
   
   // display the value
   System.out.println(url);
   
  } catch (IOException e) {
   e.printStackTrace();
  } 
 }
}
```

If you want to load the properties file from a non-static method, you should use the following:

```java
InputStream is = getClass().getClassLoader().getResourceAsStream(PROPERTIES_FILE_PATH);
```


