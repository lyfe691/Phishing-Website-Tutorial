The rest is pretty simple because ive already coded everything for you!

Download the files [here](https://github.com/lyfe691/Phishing-Website-Tutorial/releases/tag/script). If you dont trust them, you can look at the source code [here](https://github.com/lyfe691/Phishing-Website-Tutorial/commit/891db114bfee84505c089a6e4f5aa09e5d5b6310)

After youve done that open the files in an editor, i recommend visual studio code (i made it there)

**!IMPORTANT!**

the only file you'll have to edit/adjust is the server.js file. the rest of the files is optional.
ive made it clear in the server.js file what you need to do with comments next to the code you need to adjust.


Cool! youve now entered your sender email and your reciever email. If you havent, please do so! 
Now youre probably wondering why you should put in your gmail accoutn password, well you technically do but just not the one you think you do(ill explain it). -->

**This step is very important -->**

I asume youre using gmail, thats also what i said in the code.
<--! https://myaccount.google.com/ --> *ONLY SENDER EMAIL*  
What you need to do is activate 2fa in your SENDER gmail account.
after that type app in the search bar on top when youre in the security tab and write *"app"*.
after that you should see *"app passwords"* click on that and make a new one, name it whatever you want. --> **click "create"**

It will give you the password. **THIS PASSWORD IS IMPORTANT SAVE IT SOMEWHERE.** 
okay, lets head back to the server.js file and paste in the password that the app generated for you. i also made it clear where with comments in the code.
make sure the password you pasted in doesnt have any spaces for example: ```**** **** **** ****```. **YOU HAVE TO WRITE IT TOGETHER** like this: ```****************```.


Cool! youve made it far and youre almost done!

open your terminal and follow the instructions:
You have to navigate to the path of the folder you downloaded. If you put the extracted folder on your desktop just right click the folder and click copy path. 
First you have to write: 
```bash
cd "path/to/the/folder/I/gave/you"
```
now when youre successfully in the path of the folder i gave you, type:
```bash
node server.js
```
the output should be: ```Server is running on port 3000```
if it isnt, you made something wrong.


Cool! you made it this far and youre practically done!
now open ```http://localhost:3000/``` in your browser and SIGN IN, sign up doesnt work cause of cause itll harm the user, but its easy to make. 
enter your cridentials and press sign in. If everything worked right oyu should get an email from the sender gmail to the recipient gmail of the users input/credentials.

Boom, youre done!
Obviously this wont work like youd want it to work since it would be unethical, however, it gives you the idea.
Dont use it for malicious purposes, instead, prank your friends!


