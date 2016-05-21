#Creating a basic online Pokémon game

<img src="http://i.imgur.com/c448U9D.jpg" />

In this tutorial we will be creating a simple Pokémon game where you will play as Blastoise and are currently in battle with a fierce Charizard. The game will be created using HTML, CSS, and JavaScript. 

We will be using [CodePen](https://codepen.io) to write our code in. It will give us an easy place to write our code and see our changes quickly.

##What is HTML?

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


####What is a class?

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

To do this we need to create two HTML `div` elements. 

```
<div class="game">
</div>
<div class="box">
</div>
```
##Adding a background and Pokémon

##Creating the stat boxes

##Adding Pokéballs

##Adding action buttons for our Pokémon
