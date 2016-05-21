#introduction to JavaScript

![JavaScript logo](http://cdn.tutorialzine.com/wp-content/uploads/2015/12/javascript.png)

Computer aren't very smart. For a computer to do even the simplest of actions like turning itself on, we have to give it explicit instructions. This is a universal fact for desktops, laptops, phones and any other electronic device. That's what programming languages like JavaScript, C++ and Java are used for. In the case of Web Development, it follows similar reasoning. For a button to work or for a new page to load, we have to give it concise instructions. This is where JavaScript comes in. 

Web Development consist of three main parts, HTML, CSS and JavaScript. Html handles the skeleton of the web page/app. CSS handles the design and JavaScript handles the logic or functionality. 

![MacDown Screenshot](http://i.imgur.com/32gibcI.png)

## Data Types:
The most basic concept in programming are Data Types. Data Types represent the types of data a computer is able to process using some computer program. Some types include: 
#####**int: integer**
#####**char: character** 
#####**String: sequence of characters** 

In Traditional programming languages like C++ and Java, you would have to specify the specific types you'll be using. Like so: 

	int testInteger = 2; 
	char testCharacter = 'x';
	string testString = "programming is cool";
	
In JavaScript, it's a lot simpiler. You use type var to define any type. like so: 

	var testInteger = 2;	var testCharacter = ‘x’;			var testString = “Programming is cool”;
	
Now, in JavaScript there are two other datatypes, const and let. Const is used when you know the data you are storing will not chagne throughout your whole program. Let is used when there is a chance of the data changing. Now, for best practices it's always better to use const and let instead of var. 

###booleans:
Booleans are data types that represent true or false. In other languages booleans are declared like: 

	bool testBoolean = true;	bool testBoolean2 = false;  In JavaScript:

	Var testBoolean = true; 	testBoolean2 = false; 
##Arithmetic:
Another essential part of programming is Arithmetic. To do this, we have arithmetic operators: 

![MacDown Screenshot](http://i.imgur.com/muyYZ3X.png)

Example usage in code:

![MacDown Screenshot](http://i.imgur.com/2GYeHjh.png)

##Comments: 
**//** is used to write comments in the program to explain parts of hte code. this is done so anyone that may view your code will have an easier time understhanding what's going on. 
/* ... */ is used for large blocks of texts. For example: 

![MacDown Screenshot](http://i.imgur.com/u8xYf7F.png)

##Arrays
Imagine a case where we need to store 5 inteers. In a normal case we'd say the following: 

![MacDown Screenshot](http://i.imgur.com/9jhyI78.png)

This is fine and simple because there are only 5 numbers. Now, let's imagine a case where we have to store 500, 1000 or even 10,000 numbers. Storing one number in one variable is clearly not practical in this situation. This is where arrays are useful. 

An array is a data structure used to store multiple value in one single variable. Imagine we have a variable called testArray. Instead of a regular variable with one slot for one value, this specific variable has 10 slots that can store 10 different values. For example: 

![MacDown Screenshot](http://i.imgur.com/eW8Qgzd.png)

In programming languages like C++ and Java, an array could only hold values of a certain type. Som an integer array can only hold values of type int and a string array could only hold values of type string and so on. In JavaScript, this is not the case.

JavaScript Arrays allow you to have variables of different types in the same array. Like so:

![MacDown Screenshot](http://i.imgur.com/jUGe6bZ.png)

Later in your program, you would be able to call these values by **testArray[index]**. Like so:

![MacDown Screenshot](http://i.imgur.com/BNT0kVt.png)

Note, that the index starts from 0 and goes up to 3. Arrays in almost all programming languages reference the first index with 0 and goes up to one minus the total copacity of the array. So, an array of 10 indexes would start at 0 and go up to 9. 

Other possible ways of declarying an array and things to watchout for: 

![MacDown Screenshot](http://i.imgur.com/KBjUTfw.png)

##Functions:

##Scopes

##Conditionals

##Loops



