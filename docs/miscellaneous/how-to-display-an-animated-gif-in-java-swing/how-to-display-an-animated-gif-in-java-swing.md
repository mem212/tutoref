---
slug: "/how-to-display-an-animated-gif-in-java-swing"
title: "How to display an animated gif in java swing"
---
The type ImageIcon (sub-type of Icon) allows to display an animated GIF. Example :

```java
// We suppose you have already set your JFrame 
Icon imgIcon = new ImageIcon(this.getClass().getResource("ajax-loader.gif"));
JLabel label = new JLabel(imgIcon);
label.setBounds(668, 43, 46, 14); // You can use your own values
frame.getContentPane().add(label);
```


