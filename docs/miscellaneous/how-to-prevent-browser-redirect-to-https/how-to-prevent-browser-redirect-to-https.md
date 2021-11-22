---
slug: "/how-to-prevent-firefox-and-chrome-from-forcing-dev-and-foo-domains-to-use-https/"
title: "How to prevent Firefox and Chrome from forcing dev and foo domains to use https"
---

In their last update, Chrome and Firefox browsers now redirect all domains with the pattern *.dev and *.foo to https. This can be annoying for develepers and campanies who must deal with such domain names.

It is possible to disable this behavior for Firefox, but not for Chrome, unless you have an alternative solution.

In the following I will show the solution for Firefox and give some alternatives for Chrome.

## Firefox

1. Visit the address **about:config**
2. Search for the parameter **network.stricttransportsecurity.preloadlist** and change it’s value to false

## Chrome
You can find some solutions on the Internet talking about the **chrome://net-internals/#hsts**  but this doesn’t seem to work. If you know a working solution, please let me know in the comments section.

## Other alternatives
- Change your URLs and use new domains .
- Modify the hosts file, If you point on IP addresses or virtual hosts, you can modify your hosts file to use local domains
- Or, Use SSL, you can choose to activate SSL on your web server.