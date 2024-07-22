---
slug: "/how-to-disable-ssl-certificat-validation-in-java/"
title: "How to disable SSL certificate validation in Java"
keywords:
  - Disable SSL
  - Custom TrustManager
  - Bypass SSL
  - Disable SSL validation
description: "How to disable SSL certificate validation in Java."
tags:
  - SSL
  - Disable SSL
---


## Summary
Disabling SSL certificate validation in Java can be necessary for testing purposes, but it comes with security risks. This one-page tutorial is a step-by-step guide on how to achieve this "risky" operation.
 
I will put all the code inside the 'SSLDisableExample' class. This class disables the SSL certificate validation by:
 
 1. Implementing a custom 'TrustManager' that trust all certificates;
 2. Initializing an SSLContext with this TrustManager, and 
 3. Setting a hostname verifier that accepts all hostnames.

## The code

```java
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.X509Certificate;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

public class SSLDisableExample {

    public static void execute() {
        TrustManager[] trustAllCerts = new TrustManager[] {
            new X509TrustManager() {
                public X509Certificate[] getAcceptedIssuers() {
                    return null;
                }

                @Override
                public void checkClientTrusted(X509Certificate[] certs, String authType) {
                    // Trust all client certificates
                }

                @Override
                public void checkServerTrusted(X509Certificate[] certs, String authType) {
                    // Trust all server certificates
                }
            }
        };

        try {
            SSLContext sc = SSLContext.getInstance("SSL");
            sc.init(null, trustAllCerts, new java.security.SecureRandom());
            HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
        } catch (NoSuchAlgorithmException | KeyManagementException e) {
            e.printStackTrace();
        }

        HttpsURLConnection.setDefaultHostnameVerifier(new HostnameVerifier() {
            @Override
            public boolean verify(String hostname, SSLSession session) {
                return true;
            }
        });
    }
}
```

### Security Warning

Disabling SSL certificate validation makes your application vulnerable to man-in-the-middle attacks. Use this approach only in controlled environments and never in production.

## Example of usage

The following example demonstrates how to utilize the 'SSLDisableExample' class. You simply need to execute 'SSLDisableExample.execute()' before making your https connection.

```java
public class SSLExampleUsage {
    public static void main(String[] args) {

        SSLDisableExample.execute(); // Disable SSL validation
        
        // Example HTTP request
        try {
            URL url = new URL("https://example.com");
            HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuffer content = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }
            in.close();
            System.out.println(content.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

## Conclusion

This method helps bypassing SSL validation for testing purposes. Always make sure you implement the proper security measures in production environments.