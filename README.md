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
Functions are one of the fundamental concepts in programming. A function combines many instructions into one single line. This makes for cleaner, reusable code. On top of that it also helps us to save time during testing. 

The idea behind a function is that we take a piece of code and assign that piece of code a name so we can call it any time we want within our program. In a practical setting these pieces of codes typically does some sort of activity. 

A program of simple arithmetic without using any functions: 

![MacDown Screenshot](http://i.imgur.com/FeU0Uao.png)

Same program rewritten with functions:

![MacDown Screenshot](http://i.imgur.com/4U5zuZc.png)

Let's run through the above code. If we look at the bottom of the program, we'll see that the operations that we did in our previous program have been moved to individual function blocks. The **return** state throws the result of the operation into whatever variable we set to receive it. If we go up one section above where the functions are created, we'll see where the functions are being called. Each function is being called and the result of the operation that's being returned is being thrown into it's respected variable. Like shown below: 

![MacDown Screenshot](http://i.imgur.com/2aO6ABt.png)

![MacDown Screenshot](http://i.imgur.com/Kj1MBQa.png)

The program with functions may seem longer and more intimidating at first but if you take a closer look, you'll see that we're able to throw in any two variables as arguments for the functions and it'll give us the result of that operation. This is the definition of **reusable** code. 

##Scopes
Now that we've talked about functions, this would be a good time to go over the concept of scopes. Scopes, in simple terms is the set of variables that you have access to. The idea is a variable could be a global variable or a local variable. A variable declared at the beginning of the program can be accessed by any function within that program but a variable declared inside a function cannot be accessed by anything outside that function.

The variable testVar is a global variable since it's declared at the beginning of the program: 

![MacDown Screenshot](http://i.imgur.com/ZERrhCP.png)

The variable testVar is a local variable since it's declared within a function block: 

![MacDown Screenshot](http://i.imgur.com/DVpyt8t.png)

Now that we've discussed global and local variables, lets take a look at **Automatically Global** variables. These are variables that are used without being declared first. for example: 

![MacDown Screenshot](http://i.imgur.com/k2n3H0F.png)

The variable testVar in the above code snippet is a global variable because it was assigned a value without the actual variable being declared. 

##Conditionals
Conditionals are used to perform different actions based on different conditions. There are two types of conditionals in JavaScript and many other languages. If/Else conditional blocks and Switch blocks. The If/Else block is like follows: 

		if(condition 1 is true) {
			// execute this code 
		}
		else if(condition 2 is true) {
			// execute this code 
		}
		else {
			// if above conditions are all false, execute this code. 
		}
		
Example code: 

![MacDown Screenshot](http://i.imgur.com/OtUHJse.png)

A Switch block would be as follows: 

		switch(expression) {
			case n: 
				code block
				break;
			case m: 
				code block
				break;
			case j:
				code block
				break;
			default:
				code block
		}
		
Example code:

![MacDown Screenshot](http://i.imgur.com/1XAd9cv.png)

##Loops

Loops are one of the most powerful concepts in programming. Loops are used to execute a certain piece of code numerous times. Just like functions, loops help to clean up code as well as save time. There are three types of loops in JavaScript, for loop, while loop and do/while loop. 

A loop can be used to reduce this: 

 ![MacDown Screenshot](http://i.imgur.com/QPnG6Ve.png)

into this:

 ![MacDown Screenshot](http://i.imgur.com/67BU7sX.png)

In the above for loop, there are 3 parameters. First, it shows what i is "i = 0". Second, it shows what i must be within at all times, "i < cars.length". Third, it shows the change in i, "i++", which increases i one at a time. 
	for loop:
		
		for(statement 1, statement 2, statement 3) {
			// repeat this code until statement 2 fails 
		}
		
		// statement 1: sets value before loop starts 
		// statement 2: define the condition for the loop to run
		// statement 3: increases/decreases value. 
		
A while loop does the same function as a for loop but it checks the condition in a different way. 
	while loop:
	
		while(condition is true) {
			// repeat this code until conditon above is not true
		}
		
	Example Code:
	
![MacDown Screenshot](http://i.imgur.com/iOcMTmK.png)

In the code snippet above, the while loop checks the condition, "is the value of x still less than 10?". If it is, then the code whitin the while block runs. If not then the console.log does not get run. 

A do/while loop is very similar to a while loop. The only difference is when the condition for the loop is checked. In while loop, the condition is checked at the beginning of the while block. In a do/while loop, the condition is checked at the end of the do/while block after the first iteration is already completed. 

		do {
			// execute some code 
		}while(condition);
		
Example code:
	
![MacDown Screenshot](http://i.imgur.com/uWkoNOc.png)

If we take a look at the above code snippet, we can see how the loop performs the first iteration of the loop before it checks the condition. 


		


