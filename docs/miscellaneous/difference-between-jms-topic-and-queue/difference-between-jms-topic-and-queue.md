---
slug: "/difference-between-jms-topic-and-queue"
title: "Difference between JMS Topic and Queue"
sidebar_label: "Difference between JMS Topic and Queue"
keywords:
    - Order of initialization in java
    - Java class order of initialization
tags:
    - Queue
    - Topic
    - JMS
description: "Difference between JMS Topic and Queue"
---

# Difference between JMS Topic and Queue

## Queue

A JMS topic implements a publisher/subscriber(s) model. When you publish a message on a topic, all the subscribers who have an active subscription will receive the message ( Zero or more ) .

## Topic

A JMS Queue implements a one-to-one or load balancer model. When you send a message to the queue, one and only one consumer will receive that message.

If there are no consumers at the time the message is sent, it will be kept on the queue until a consumer can process the message.

