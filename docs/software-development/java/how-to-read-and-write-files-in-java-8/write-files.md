---
slug: "/how-to-read-and-write-files-in-java-8/write-files/"
title: "Write files in java 8"
sidebar_position: 3
---

## Using FileOutputStream

```java
try {
  File fout = new File("myOutFile.txt");
  FileOutputStream fos = new FileOutputStream(fout);
  BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(fos));
  bw.write("Write somthing to the file ...");
  bw.newLine();
  bw.close();
} catch (FileNotFoundException e){
  // File was not found
  e.printStackTrace();
} catch (IOException e) {
  // Problem when writing to the file
  e.printStackTrace();
}
```

## Using FileWriter

You better use FileWriter or PrintWriter if you plan to write some character based content or a text file.

```java
try {
  FileWriter fw = new FileWriter("myOutFile.txt");
  fw.write("Example of content");
  fw.close();
} catch (FileNotFoundException e) {
  // File not found
  e.printStackTrace();
} catch (IOException e) {
  // Error when writing to the file
  e.printStackTrace();
}
```

## Using PrintWriter

Similar to FileWriter but with some specifities. Here is the Oracle’s PrintWriter definition:

>Prints formatted representations of objects to a text-output stream. This class implements all of the print methods found in PrintStream. It does not contain methods for writing raw bytes, for which a program should use unencoded byte streams.

```java
try {
  PrintWriter pw = new PrintWriter("myOutFile.txt");
  pw.write("Example of content");
  pw.close();
} catch (FileNotFoundException e) {
  // File not found
  e.printStackTrace();
} catch (IOException e) {
  // Error when writing to the file
  e.printStackTrace();
}
```

## Using OutputStreamWrite

```java
try {
  File fout = new File("myOutFile.txt");
  FileOutputStream fos = new FileOutputStream(fout);
  OutputStreamWriter osw = new OutputStreamWriter(fos);
  osw.write("Soe content ...");
  osw.close();
} catch (FileNotFoundException e) {
  // File not found
  e.printStackTrace();
} catch (IOException e) {
  // Error when writing to the file
  e.printStackTrace();
}
```

