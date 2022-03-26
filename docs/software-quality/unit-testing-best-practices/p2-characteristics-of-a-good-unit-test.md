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
description: "Characteristics of a good unit test. Automated, Fast, Isolated, Self Checking, Descriptive, Repeatable."
---

A good unit test has some characteristics, implementing them correctly will certainly increase not only the quality of your unit tests but also the overall code of the application/software. What follows is a list of the most common characteristics.

### Automated

Executing unit tests and checking results for failure or success should be an automated process. 
Most of EDIs like IntelliJ Idea and Eclipse offer the possibility to automatically run unit tests and collect execution results. 

### Fast

A good unit test should be fast to run. We talk about a few milliseconds.

### Isolated

Unit tests should be run in complete isolation. It means that the component under test should not depend on any external resource or other unit test. Examples of external resources can be a database, the file system, a REST or SOAP web service, etc.

### Self checking

This characteristic comes to reinforce the isolation principle. A unit test should be able to automatically detect if it has failed or passed without any external or manual interaction.

### Descriptive

A Unit test is written as code, anyone who is reading the unit test should understand what that test is doing and what is the expected result.


### Repeatable

Under the same conditions, a unit test should always produce the same result whenever and wherever you run it. 

Random or occasional failure or success of a unit test is for sure a sign of poor test quality.

