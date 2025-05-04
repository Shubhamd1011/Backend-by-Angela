/* 
1. HTTP It stands for (HyperText Transfer protocol) 
it means the language that allows to talk the computers across the internet.

There are 5 main words by using those they communicate with each other it means it is a vocablury of http.(HTTP methods)
1.GET = 
- By using get we make request to server for getting the resource like html css or js file.
- Purpose: Retrieve data from the server.
- Example: Get a list of users.
- Usage: Read-only.
- Analogy: Reading a book without changing anything.

2.POST =
- By using that we send a resource to the server.
- Purpose: Create a new resource on the server.
- Example: Add a new user.
- Usage: Sends data to the server.
- Analogy: Writing a new page in a notebook.

3.PUT = 
- It is a update methode by using that we update entire content.
- Purpose: Update entire existing data on the server.
- Example: Replace a user's entire profile with new data.
- Analogy: Rewriting the whole page with new content.


4.PATCH =
- It is also update method but using that we can only update a perticular content.
- Purpose: Update part of existing data on the server.
- Example: Change just the user's email.
- Analogy: Editing only one sentence in a paragraph.

5.DELETE = 
- Purpose: Remove data from the server.
- Example: Delete a user account.
- Analogy: Tearing out a page from a notebook.

*/

import express from "express";
const app = express();
const port = 3000;

// .get method is comes from thw express that we use here, after that we give here the path here the path is root folde "/"
app.get("/", (req,res)=>{
  res.send("<h1>Hello this is get</h1>")
})

app.listen(port, ()=>{
  console.log(`Server is running on ${port}`);
})