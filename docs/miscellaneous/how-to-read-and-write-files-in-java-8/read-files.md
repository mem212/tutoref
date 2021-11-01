---
slug: "/how-to-read-and-write-files-in-java-8/read-files"
title: "Read files in java 8"
sidebar_position: 2
---

## Using FileInputStream and BufferedReader

Use this method when you want to read text from a character input stream. Buffering characters provides efficiency of the reading process.

```java
File file = new File("myFile.zip");
try {
  FileInputStream fis = new FileInputStream(file);
  BufferedReader br = new BufferedReader(new InputStreamReader(fis));
  String line;
  while((line=br.readLine())!=null){
    System.out.println(line);
  }
  br.close();
} catch (FileNotFoundException e) {
  // File not found
  e.printStackTrace();
} catch (IOException e) {
  // Error when reading the file
  e.printStackTrace();
}
```

## Using FileReader and BufferedReader

This example is similar the previous one, except the fact that we build the BufferedReader from a FileReader.

Use this option when you have to read character based content. You cannot specify the encoding charset for this method and it will use the platform encoding.

```java
File file = new File("myFile.txt");
try {
  BufferedReader br = new BufferedReader(new FileReader(file));
  String line;
  while((line=br.readLine())!=null){
    System.out.println(line);
  }
  br.close();
} catch (FileNotFoundException e) {
  // File not found
  e.printStackTrace();
} catch (IOException e) {
  // Error when reading the file
  e.printStackTrace();
}
```

## Using Files.newBufferedReader() in Java 7 and above

This example is similar to the first one (Using FileInputStreamAND BufferedReader) .  It uses the java.nio package and the try-with-resources exception management structure. It works starting from java 7.

```java
// The required imports
import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
```

```java
//The code
Path path = Paths.get("c:/tmp/myfile.csv");
Charset charset = Charset.forName("UTF-8");
try (BufferedReader reader = Files.newBufferedReader(path, charset)) {
  String line = null;
  while ((line = reader.readLine()) != null) {
    System.out.println(line);
  }
} catch (IOException e) {
  e.printStackTrace();
}
```

## Using Lambda expression in Java 8

One of the benefits of Lambda Expression is the reduction of the number of lines of code. In this example, we will read and print the content of a file in one line using Lambda Expressions and java.nio.file.Files class :

```java
Files.lines(new File("c:/myfile.txt").toPath()).forEach(System.out::println);
```

(for simplicity I didn’t include the exception management for the IOException exception)
