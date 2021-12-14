---
slug: "/unit-testing-best-practices/characteristics-of-a-good-unit-test/"
title: "Characteristics of a good unit test"
sidebar_label: "Characteristics of a good unit test"
sidebar_position: 2
keywords:
    - Characteristics of a good unit test
    - Good Unit tests
    - Unit tests best practices
    - Unit testing best practices
    - Junit best practice
    - How to write good unit tests
description: "Characteristics of a good unit test."
---

A good unit test has certain characteristics, implementing them correctly will certainly increase the quality of our unit tests and then the overall code of the application/software. 

Following is a list of the most common characteristics a unit test should have.

## Automated

Executing unit tests and checking results for failure or success should be an automated process. 
Popular EDI tools like IntelliJ Idea and Eclipse offer the possibility to automatically run unit tests and collect execution results.

Unit tests should also be part of Continuous Integration process. A Good CI process should systematically run unit tests and provide the development team with reports containing valuable metrics like code coverage, coverage on new code, number of tests being run, performance etc. 

## Fast

A good unit test should be fast to run, we usually talk about a few milliseconds. Any test that takes a long time to be run should be reworked.

When a unit test is slow ( >500ms ), most likely that test is doing something it shouldn't be doing like accessing the file system, or an external resource. This principle iw known as "isolation" and it is the next characteristic.

## Isolated

Unit tests should be run in complete isolation. It means that the component under test should not depend on any external resource or other unit tests. Examples of external resources can be a database, file system, a REST or SOAP web service, etc.

When the component under test has a hard dependency on a resource (it cannot be run without it), you can create a "fake" copy of the dependency and define its behavior for each test case. This practice is called **Mocking** and many libraries and frameworks make it possible to mock dependencies and define their behavior.

## Descriptive

A Unit test is written as code, and that code should be written in a way that anyone who is reading it must understand what that test is doing. 

It means that anyone should understand what is the expected result when a specific input is provided, or a condition is met.



## Repeatable

Under the same conditions, a unit test should always produce the same result whenever and wherever you run it. 

Random or occasional failure or success of a unit test if for sure a sign of poor test quality.


## Self checking

This characteristic comes to reinforce the isolation principle. A unit test should be able to automatically detect if it failed or passed without any external or manual interaction. 




