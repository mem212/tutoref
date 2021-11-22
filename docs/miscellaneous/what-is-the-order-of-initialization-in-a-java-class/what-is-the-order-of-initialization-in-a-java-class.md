---
slug: "/what-is-the-order-of-initialization-in-a-java-class/"
title: "What is the order of initialization in a Java class"
sidebar_label: "What is the order of initialization in a Java class"
keywords:
    - Order of initialization in java
    - Java class order of initialization
tags:
    - Order of initialization in Java
description: "Order of initialization in java"
---

# What is the order of initialization in a Java class

The order of initialization of a Java class is the following:

1- Static constants, variables and blocks are first initialized in the order in which they appear in the code;
2- Then non-static constants, variables and blocks are first initialized in the order in which they appear in the code;
Consider the following code :

```java
public class Sample{
 
 static Sample2 a = new Sample2();
 
 
 Sample2 b = new Sample2("Instance variable");
 
 public Sample(){
 System.out.println("Constructor");
 }
 
 static{
 System.out.println("Static block");
 }
 
 public static void main(String[] args) {
 new Sample();
 }
}

class Sample2{
 
 public Sample2(){
 System.out.println("Sample2 Constructor");
 }
 
 public Sample2(String str){
 System.out.println(str);
 }

}
```

Accoding the above points 1 and 2, the displayed result will be :

```
Sample2 Constructor
Static block
Instance variable
Constructor
```

