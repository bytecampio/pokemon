# Creating a basic online Pokémon game

<img src="http://i.imgur.com/c448U9D.jpg" />

In this tutorial we will be creating a simple Pokémon game where you will play as Blastoise and are currently in battle with a fierce Charizard. The game will be created using HTML, CSS, and JavaScript. 

We will be using [CodePen](https://codepen.io) to write our code in. It will give us an easy place to write our code and see our changes quickly.

## What is HTML?

HTML, or **H**yper**T**ext **M**arkup **L**anguage is a markup language used to define the structure and elements on a web page. Everything like buttons, menus, images, etc. are defined using HTML. 

The basic structure of HTML is as follows:

```
<article>
  <img />
</article>
```

HTML tags surround themselves in angle brackets. If an HTML tag allows for other HTML tags to be inside of it, like an image or paragraph inside of an article, the tags inside are its children. In our example above, the `img` tag is the child of the `article` tag.

Once you specify all of the children for the tag, you must close the HTML tag with an ending tag. HTML tags are closed using a forward slash (`/`) after the first angle bracket. 

### Self-closing tags

The exception to this is shown in my example with the `img` tag. In HTML, there are some tags that are self-closing. With self-closing tags, the slash is placed before the ending angle bracket, and there is no need for a closing tag. This is because those tags cannot have children. For example, the `img` tag shown above is the HTML tag for displaying an image. It logically doesn't make sense to allow another tag to be displayed inside of it, because it is an image.

### HTML tag attributes

In my example above, we have an image tag. However, there's an issue. While we have a tag, how does the browser know what image to display? We can supply it with an attribute that gives the tag a URL or the location of the image we would like it to display.

```
<img src="http://bit.ly/charizardgif" />
```

In this example, we have an image tag. The `src` attribute is the name of the argument, in this case it's the source or location of the image we would like to display. We then tell it in quotations the location of our image, `http://bit.ly/charizardgif`.

##What is CSS?

CSS or **C**ascading **S**tyle **S**heets is a stylesheet language that allows to to add styling to your HTML. 

Things like adding a background, changing your font, and setting the sizes of HTML elements are things that can be done in CSS. 

Let's learn how CSS works by example:

```
.game {
  background-color: #000;
}
```
The CSS syntax is different than HTML. Instead of angle brackets we use curly braces and semi-colons. Let's break down the above example.

### CSS Selectors and Classes

```
.game {
```
Here we have our CSS selector. A CSS selector tells our browser which HTML elements it would like to style. In this example, you can note that our selector is `.game`. The dot tells our browser that we are looking for a class, and the name of that class is `game`. 

In the next line we have the following:

```
background-color: #000;
```
In this case, `background-color` is a property that we want to change, and `#000` is the value that we want to change the background color to. `#000` is a hexadecimal representation of a color. In programming, we frequently use hexadecimal colors to get specific colors. These colors are in RGB. So, `#000` translate to 0 amount of red, 0 amount of green, and 0 amount of blue. Thus, `#000` is black. 

CSS also allows for us to use some color names like black or red, but using hex allows us to have more flexibility and customization.


#### What is a class?

A class is a way of identifying HTML elements that are similar, should share a common style, and/or their purpose. 

To set the class of an HTML element, specify them in the `class` attribute like so:

```
<div class="orange dog">
</div>
```
In this example, we give our `div` element two classes. HTML elements can have multiple classes, and should be separated by a space. The first class we provide it is `orange`. If we defined `orange` in css like so:

```
.orange {
  background-orange: orange;
}
```
This would set the background of not only that element to orange, but all elements that also have the orange class.

The second class we provide is `dog`. For this example, we could assume that our `div` element is meant to represent or display a dog because we give it the `dog` class. So we could define a universal style that every dog has to follow like so:

```
.dog {
  width: 100px;
}
```
Basically, we're saying that all dogs, or all HTML elements with the `dog` class should have a width of 100 pixels. Simple enough right?

But what if we want orange dogs to be only 50 pixels wide? Maybe orange dogs are always smaller. We can approach it like so:

```
.orange.dog {
  width: 50px;
}
```
Here we're providing the class `orange`, and the class `dog` combined. Note that there is _no space_ between `.orange` and `.dog`. This is how we would say if an HTML element has the class `orange` _and_ `dog` use this style. 

This selector is also more specific than just `orange` or `dog`. Meaning our browser will display its properties over the others if we define all 3 examples.

### Select Element by ID

```
#attack {
  color: orange;
  font-family: "Times New Roman";
}
```
In this example we'll talk about selecting a specific element for styling. Let's say we have an image, it's a special button for attacking. We only want this specific button to have this style. Instead of using a class, we'll use an ID. An ID is a unique identifier for a HTML element that allows us to single out that specific element. We can set this attribute similar to a class:

```
<button id="attack"></button>
```
The only difference is, we're only allowed to give an element one ID. So based on our examples, our button has the id `attack`. In our CSS, we'll tell our browser that we want to select an ID. So we use the hash symbol (`#`) followed by our ID. This will tell the browser to style our button to have orange text, and to use the Times New Roman font. 

It's generally a good idea to use classes instead of IDs for applying styles. It makes reading and understanding code easier.

### Element Selectors
```
button {
  border-color: blue;
  border-style: solid;
  border-width: 1px;
}
```
Now we look at the case of when we want to style all of a specific type of tag or element. In this case, we want to style every single button on our page. To do this, we do not specify a dot or a hash. Instead we specify the tag's name. In this example, we are telling our browsers to style every button with a blue border, that's a solid line, and it has a 1 pixel width all around the button.

### Styling children
```
.opponent .pokemon {
  width: 100px;
  height: 100px;
}
```

What if we're in the scenario where we want to style a child of an element? In this example, we want to style the `pokemon` that is owned by, or is the child of our `opponent`. Only our opponent, not our own `pokemon`. We'll specify the parent class `.opponent` and then _with_ a space we'll specify the child class `.pokemon`. So, our `opponent`'s `pokemon` will have a width and height of 100 pixels;

This child class can be replaced by an ID, an element type, or any other selector as well. There are other ways of selecting children elements to be more specific, but for this tutorial we'll just be using this method to keep things simple.

##Structuring our game using HTML

We'll start off with creating sectioning our game into two parts. The game and menu where we can see messages and the actions we can choose for our Pokémon.

To do this we need to create two HTML `div` elements with their appropriate classes.

In HTML, a `div` element is section of the document. `div` stands for division, meaning by default when you use a `div` element, elements after it will break onto a new line instead of staying in the same line. `div`s are the most common HTML tag you will see and use.

```
<div class="game">
</div>
<div class="menu">
</div>
```

### What we need

Let's take a minute to think about the HTML elements we need. We need four buttons for our attacks, and a place for a message in our menu. For the game, we need

  - two images for our Pokemon
  - a place to display our HP (Health)
  - the name and level of our Pokemon
  - how many Pokemon we have
  - and a box to keep all of that information tidy

We'll also need a way to tell apart our opponent's stuff from our stuff, so it would be good if we had two different parents: `player` and `opponent` so we can know which child belongs to who.

First we'll add our parents for each player:

```
<div class="game">
  <div class="opponent">
  </div>
  <div class="player>
  </div>
</div>
```

### Adding our Pokemon

Next we'll add our Pokemon. We'll use an `img` tag to display our images on the screen and give them the class `pokemon`.

```
<div class="game">
  <div class="opponent">
    <img class="pokemon" src="http://bit.ly/charizardgif" />
  </div>
  <div class="player>
    <img class="pokemon" src="http://bit.ly/blastoisegif" />
  </div>
</div>
```
I supplied each `img` tag with the URLs of our appropriate image in their `src` attribute. I had these URLs made beforehand, but you can use any image you want as long as it's uploaded on the internet with a URL you can use.

##Formatting our view using CSS

### Setting our base dimensions

As you may notice, things don't look quite like a game, or even like boxes. Let's set some sizes using CSS so that we can start visualizing our game better.

Let's set the height of our `.game` to `480px` and `800px`. This will give our game a fixed size, making it easier to design in for now. 

```
.game {
  height: 480px;
  width: 800px;
}
```

We'll apply the same width, but a smaller height for the menu:

```
.menu {
  height: 120px;
  width: 800px;
}
```

### Adding backgrounds

Now, let's add some color to our boring white landscape. 

We'll use an image of a background from Pokemon battle sequence for our game's background. 

```
.game {
  background-image: url('http://bit.ly/pokemonbg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  ...
}
```

Here we're setting the `background-image` property to the url of our background image, we're telling our browser that the size of our background should be `100%` the height and width of our `.game`, and that we don't want our background to repeat.

We'll also want a background for our menu. A nice gray color should do. I frequently like to use #333 as my gray color for backgrounds:

```
.menu {
  background-color: #333;
  ...
}
```

### Positioning our Pokemon

Now that we have our backgrounds, we can position our Pokemon into their battle positions. 

#### Setting boundaries

<img src="http://i.imgur.com/l6bJS1N.jpg" />

If we look at our game with the background, we can clearly see that one area is only occupied by the opponent, and the other only by the player. To make things clearer, what we can do is use our already existing `player` and `opponent` elements to split the game into two portions. The top will be for the `opponent`, and the bottom for the `player.

We can set these boundaries by splitting the height of the `game` between the two characters.

Since the opponent has more room than the player, we can give it something like 300 pixels, and the remaining player 180 pixels.

```
.opponent {
  height: 300px;
}

.player {
  height: 180px; 
}
```

#### Absolute positioning

In CSS, all elements have a `position` property. By default the value of `position` is `static`, meaning the elements you write are displayed in the order you wrote them.

However, there are other options. The option we will be using to position our pokemon is `absolute`. Absolute allows us to specify the location of our element relative to the first non-static parent using anchors. 

Okay, so that was a bunch of words that might have made a lot or no sense. Basically: We can tell our image how far it should be from the top, left, right, and bottom if its first parent that isn't static.

Remember, by default elements are static. So, if there is no non-static parent, it will position itself based on the document. 

I don't expect you to grasp this concept immediately. Most people only grasp positioning after lots of trial and error and experience. There are many in-depth articles on CSS layout positioning as well.

##### So, let's position our Pokemon.
```
.opponent .pokemon {
  position: absolute;
}

.player .pokemon {
  position: absolute;
}
```

Now, just like I said above, if there isn't a parent that's non-static, it will position itself based on the document. So, we need to create a parent that's non-static.

We'll set our `player` and `opponent` areas to be `relative`, this will allow our `absolute` positioned `pokemon` to stay within and anchor to our character's respective areas. `relative` is very simlar to `static`, only it allows modifying the anchor points similar to an `absolute` positioned element.

```
.opponent {
  position: relative;
}

.player {
  position: relative;
}
```

##### Anchor points

So, I've said the words Anchor points a few times now. You might not have an idea on what those are. Anchor points tell elements how far they should be from a certain side, and which sides they should base its position on.

For example:
```
left: 20px;
```

This would tell the specified element that its anchor point should be 20 pixels from the left of its normal positioin. For `absolute` that would mean its first non-static parent, and for `relative` that would be its normal position.

Let's position Blastoise (the player's pokemon). It'll be on the bottom of its area for sure, and it's much further left than it is right. Therefore it would be smart to set the anchors of Blastoise to be the `bottom` and the `left`.

We'll set our Blastoise a little bit higher than the `bottom`, say, 10 pixels, and we'll position him so that he's inside his spot on the background. This takes some trial and error, but 100 pixels away from the `left` works out well if we make the `width` of Blastoise 160 pixels.

```
.player .pokemon {
  position: absolute;
  left: 100px;
  bottom: 10px;
  width: 160px;
}
```

Now we need to position Charizard (our opponent's monster). Charizard is in the distance, so let's make its `width` smaller; 100 pixels will do. Charizard is leaning more towards the `right` than the left. Now, remember we split our game into two sections. Meaning Charizard should be positioned closely to the `bottom` of the `opponent` section since that section ends right below Charizard's place.

With some trial and error, we arrive at these values:

```
.opponent .pokemon {
  position: absolute;
  bottom: 0;
  right: 140px;
  width: 100px;
}
```

## Creating the stat boxes

Now that we have our pokemon positioned, we need to show their stats! Let's add some HTML for their stat boxes.

Inside each character, we need a stat box with pokeballs, hp, pokemon name, and pokemon level.

```
<div class="opponent">
  <div class="stats">
  	<div class="pokeballs">
  	</div>
  	<div class="hp-count">
  	  100
  	</div>
  	<span class="name">
     Charizard
  	</span>
  	<span class="level">
  	  86
  	</span>
  </div>
  ...
</div>
```

Okay, so we have a couple things to talk about.

First, HP count and Level. Notice how I only put numbers, I didn't add a label like 'HP: 100'. We'll be doing some CSS magic to make that happen.

Second, the `span` tag. In HTML, the `span` tag is just like the `div` tag. Only instead of the tags after it breaking to a new line, they stay on the same line as the previous tag.

### Position, margins, padding, and style stat boxes

To help us position our stat boxes, let's give them a style:

```
.stats {
  background: #111;
  border: 2px solid black;
  border-radius: 8px;
  color: white;
  padding: 12px;
}
```

There are two new properties here. `border-radius` and `padding`. `border-radius` simply rounds the endges of our element based on the value we give. `padding` will add some space inside our element so that our text and such aren't on the edge.

The opposite of `padding` is `margin`, where instead of adding space on the inside, it adds space on the outside to keep it away from other elements.

<img src="http://www.mrwebmaster.it/images/guide/css/boxmodel.png" />

#### Positioning the stat boxes
Since we already set `player` and `opponent`'s `position`s to `relative` we can also use `absolute` `position`ing here.
Stat boxes are generally positioned more towards the `top` and the opposite side of the Pokemon.


```
.opponent .stats {
  position: absolute;
  top: 96px;
  left: 40px;
  width: 320px;
}

.player .stats {
  position: absolute;
  top: 48px;
  right: 40px;
  width: 320px;
}
```

With some trial, error, and eyeballing you'll come up with numbers similar to this.

### CSS Pseudo Classes

Now, let's add some labels to our HP and Level. In CSS3, Pseudo Classes were introduced. These pseudo classes allow us to manipulate certain states of an element that are not accessible via HTML.

The pseudo class we will be using is `:before`. When we use the `:before` pseudo class, we can set the CSS `content` property which will insert text before our element. For example:

```
.stats .hp-count:before {
  content: 'HP: '
}
```
Adds an 'HP: ' before the number we inputed. Meaning all we have to do is change our number, and not have to worry about the label changing.

The same thing goes for level:

```
.stats .level:before {
  content: 'LVL '
}
```
### Adding Pokéballs
Now to add some Pokeballs. These are just for display, the game we're building will only have one Pokemon on each side.

```
.stats .pokeballs {
  display: inline-block;
}
```

Woah woah woah. What is this `display` property?

#### CSS Display

So the `display` property in CSS specifies the type of rendering box used for an HTML element. 

So what's a rendering box? There's no concise definition. But each type of rendering box tells the elements inside how to size and arrange themselves. Every element comes with its own default display value, most being `inline` or `block`. `inline` is what's used for `span` meaning elements will not break and continue on the same line. `block` is used for `div` meaning elements will break to the next line after it.

`inline-block` in this case is a hybrid of the two. It will maintain the sizing properties of `block`, but keep the single-line flow of `inline`. This keeps elements better aligned.

So, by setting `display` to `inline-block` each Pokeball inside of `pokeballs` will be able to continue on the same line, left-to-right. But it requires its children to have a certain property to do that.

#### Adding Pokeballs

```
.stats .pokeballs .pokeball {
  float: left;
  background-image: url('http://bit.ly/pokeballimg');
  background-size: 100% 100%;
  width: 25px;
  height: 25px;
}
```
Here we're setting the background and size of each `pokeball`. I've introduced yet another new property: `float`. 

Once we have that property set, all we need to do is add `div` elements with the class `pokeball` inside `pokeballs`

```
<div class="pokeballs">
  <div class="pokeball"></div>
  <div class="pokeball"></div>
  <div class="pokeball"></div>
</div>
```

#### CSS Float

The `float` property is required in order to make elements appear from left-to-right or vice-versa. 

There are 3 values for float: 
  - `left` for left-to-right
  - `right` for right-to-left
  - `clear` for breaking

### Adding the rest

Alright, now to finish off our stat boxes, we want our HP to be on the right. That's a simple fix using `float` again. 

```
.stats .hp-count {
  float: right;
}
```

But, if you notice, we have some issues with our `span` elements slipping in. We'll want to make sure those stay on their own line. To do this we can simply wrap our top line (pokeballs and hp) with a `div`.

```
<div class="top">
  <div class="pokeballs">
  ...
</div>
```

## Building our menu
Alright! so our game looks pretty spiffy now eh?

### Displaying a message

To display a message, all we have to do is add a simple `div` with a class, this may be a good place to put an ID for as well since we only have one message.

```
<div class="menu">
  <div class="message">
    What should Blastoise do?
  </div>
</div>
```

### Creating our action buttons

Next we'll need to create an area for our actions. Simply add another `div` with the class `actions` below `message`.

Inside of `actions`, add four buttons with attack names.

```
<div class="menu">
  <div class="message">
    What should Blastoise do?
  </div>
  <div class="actions">
    <button>Water Cannon</button>
    <button>Water Pulse</button>
    <button>Surf</button>
    <button>Bite</button>
  </div>
</div>
```

### Styling our menu
Now we need to actually style our menu. Those OS default buttons don't do our game justice.

#### Split the menu
Let's split the menu in two. On the left we should have our message, and on the right we should have our actions.

```
.menu .message {
  float: left;
  font-size: 24px;
  width: 50%;
}

.menu .actions {
  float: left;
  width: 50%;
}
```

All we did here was set the `float` to `left`, so that we could split the menu into left and right segments. Remember, without float we can't have left-to-right layouts.

#### Styling the buttons
```
.menu .actions button {
  position: relative;
  float: left;
  background: #666;
  border: 3px solid #888;
  border-radius: 4px;
  color: #fff;
  font-family: monospace;
  font-size: 20px;
  line-height: 14px;
  margin: 4px;
  padding: 16px;
  width: calc(50% - 8px);
  height: calc(50% - 8px);
}

.menu .actions button, 
.menu .actions button:hover, 
.menu .actions button:active {
  outline: none;
} 

.menu .actions button:hover {
  background: #777;
  border-color: #999;
}

.menu .actions button:active {
  background: #555;
  border-color: #666;
}
```

## Adding functionality

Now we've completed our game's scene! But, we don't have any functionality! It may look like a game, but if I press those buttons nothing happens! Unfortunately we cannot add functionality just by using HTML and CSS. We have to introduce another language, JavaScript.

# Introduction to JavaScript

![JavaScript logo](http://cdn.tutorialzine.com/wp-content/uploads/2015/12/javascript.png)

Computer aren't very smart. For a computer to do even the simplest of actions like turning itself on, we have to give it explicit instructions. This is a universal fact for desktops, laptops, phones and any other electronic device. That's what programming languages like JavaScript, C++ and Java are used for. In the case of Web Development, it follows similar reasoning. For a button to work or for a new page to load, we have to give it concise instructions. This is where JavaScript comes in. 

Web Development consist of three main parts, HTML, CSS and JavaScript. Html handles the skeleton of the web page/app. CSS handles the design and JavaScript handles the logic or functionality. 

![MacDown Screenshot](http://i.imgur.com/32gibcI.png)

## Data Types:
The most basic concept in programming are Data Types. Data Types represent the types of data a computer is able to process using some computer program. Some types include: 

- **int: integer**
- **char: character** 
- **String: sequence of characters** 

In Traditional programming languages like C++ and Java, you would have to specify the specific types you'll be using. Like so: 

	int testInteger = 2; 
	char testCharacter = 'x';
	string testString = "programming is cool";
	
In JavaScript, it's a lot simpiler. You use type var to define any type. like so: 

	var testInteger = 2;
	var testCharacter = ‘x’;		
	var testString = “Programming is cool”;
	
Now, in JavaScript there are two other datatypes, const and let. Const is used when you know the data you are storing will not chagne throughout your whole program. Let is used when there is a chance of the data changing. Now, for best practices it's always better to use const and let instead of var. 

### Booleans:
Booleans are data types that represent true or false. In other languages booleans are declared like: 

	bool testBoolean = true;
	bool testBoolean2 = false;  

In JavaScript:

	Var testBoolean = true; 
	testBoolean2 = false; 

## Arithmetic:
Another essential part of programming is Arithmetic. To do this, we have arithmetic operators: 

![MacDown Screenshot](http://i.imgur.com/muyYZ3X.png)

Example usage in code:

![MacDown Screenshot](http://i.imgur.com/2GYeHjh.png)

## Comments: 
**//** is used to write comments in the program to explain parts of hte code. this is done so anyone that may view your code will have an easier time understhanding what's going on. 
/* ... */ is used for large blocks of texts. For example: 

![MacDown Screenshot](http://i.imgur.com/u8xYf7F.png)

## Arrays
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

## Functions:
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

## Scopes
Now that we've talked about functions, this would be a good time to go over the concept of scopes. Scopes, in simple terms is the set of variables that you have access to. The idea is a variable could be a global variable or a local variable. A variable declared at the beginning of the program can be accessed by any function within that program but a variable declared inside a function cannot be accessed by anything outside that function.

The variable testVar is a global variable since it's declared at the beginning of the program: 

![MacDown Screenshot](http://i.imgur.com/ZERrhCP.png)

The variable testVar is a local variable since it's declared within a function block: 

![MacDown Screenshot](http://i.imgur.com/DVpyt8t.png)

Now that we've discussed global and local variables, lets take a look at **Automatically Global** variables. These are variables that are used without being declared first. for example: 

![MacDown Screenshot](http://i.imgur.com/k2n3H0F.png)

The variable testVar in the above code snippet is a global variable because it was assigned a value without the actual variable being declared. 

## Conditionals
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

## Loops

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
