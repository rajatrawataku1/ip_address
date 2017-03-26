

# ip_address
Find client IP address and web page loading.

<b> IP address of the client </b>

>> use request-ip node package for finding IP of the client

<b>Installation </b>

npm install request-ip --save

For further query on request-ip module visit https://www.npmjs.com/package/request-ip

<b> How it Works </b>

After all the setup,as you open the web page(index.html) is ready , an ajax get request to request-ip  is made which returns the client web ip address.

<b> Web page loading time </b>

Navigation timing API is used to find time taken to load the web page

> window.performance.timing.domContentLoadedEventEnd - returns the time immediately after the document's DOMContentLoaded event completes.

> window.performance.timing.navigationStart - This attribute must return the time immediately after the user agent finishes prompting to unload the previous document. If there is no previous document, this attribute must return the same value as fetchStart.

Fetch start : return the time when the user agent starts fetching the resource.

For more information vistit : https://www.w3.org/TR/navigation-timing/#dom-performancetiming-fetchstart
