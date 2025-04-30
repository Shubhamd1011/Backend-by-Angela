/* In backend there are three things present 
1. Server
2. Application
3. Backend

1. Server = It is big computer which is on 24/7 and always listening a request which looking for a perticular resource like a html file css js etc.
2. Application = Here all the logic is present how the req get how to send res etc, And this application is always running on server computer.
3. Which stores the data

Now there are 6 Steps to our server using express

1.Create Directory.
2.Create .js file.
3.Initialize NPM.
4.Install express package.
5.Write server application.
6.Start server.

- Local Host = When we dont have a server on internet on that time we use our computer as a server and that is known as local host.
- Port = is like doors present on the server and it always listening the req and here our server is running on port 3000.
*/

import express from "express";
 const app = express();
 const port = 3000;

 app.listen(port,()=>{
  console.log(`Server is running on ${port}`)
 })