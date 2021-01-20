module.exports = [
    {
        "topic": "js",
        "code": "const x = 2",
        "instructions": "Declare a constant called x. Set it equal to the number 2."
    },
    {
        "topic": "css",
        "code": "p + ul",
        "instructions": "Just the selector. Select all unordered lists that are placed immediately after a paragraph"
    },
    {
        "topic": "html",
        "code": "<h1>Hello world</h1>",
        "instructions": "A level-1 heading with the text content: Hello world"
    },
    {
        "topic": "js",
        "code": "list.push(5)",
        "instructions": "Push the number 5 onto an array called list"
    },
    {
        "topic": "css",
        "code": ".button.primary",
        "instructions": "Just the selector. Target one element that has two classes: button and primary"
    },
    {
        "topic": "html",
        "code": "<label for='name'>Name</label>",
        "instructions": "A label element associated with an input field that has the id 'name'. The label's text content is: Name"
    },
    {
        "topic": "js",
        "code": "Math.min(a,b)",
        "instructions": "Use the built-in Math object's min method to compare two numbers that are stored in the varaibles a and b"
    },
    {
        "topic": "css",
        "code": "li + li",
        "instructions": "Just the selector. Target all list items placed immediately after a list item."
    },
    {
        "topic": "html",
        "code": "<p class='mt-5'>Paragraph</p>",
        "instructions": "A paragraph with the class 'mt-5' and the text content: Paragraph"
    },
    {
        "topic": "js",
        "code": "new Date().getFullYear()",
        "instructions": "Generate a string representing the current full year. Use the built-in Date object. Don't forget the new keyword!"
    },
    {
        "topic": "css",
        "code": "article:last-of-type",
        "instructions": "Just the selector. Target the article elements that are the last of their type within their parent element"
    },
    {
        "topic": "html",
        "code": "<nav role='navigation'></nav>",
        "instructions": "The semantic navigation element with the role attribute set to navigation"
    },
    {
        "topic": "js",
        "code": "var name",
        "instructions": "Declare an old-fashioned variable called name. Don't initialize it with a value. Just declare it."
    },
    {
        "topic": "css",
        "code": "main > section > h3",
        "instructions": "Select all level-3 headings where their parent is a section element, and where their parent is a main element"
    },
    {
        "topic": "html",
        "code": "<dl></dl>",
        "instructions": "An empty definition list. Just the open and closing tags."
    },
    {
        "topic": "js",
        "code": "$('#twitter').hide()",
        "instructions": "Invoke a function called $. Pass as an argument a string representing the CSS selector for an element with the ID of twitter. This function returns an object with a method called hide. Invoke that method, too. In other words, call jQuery to select an element with the id 'twitter', then hide that element."
    },
    {
        "topic": "html",
        "code": "<time datetime='05/21/1987'></time>",
        "instructions": "A time element with the datetime attribute set to the MM/DD/YYYY equivalent of May 21, 1987"
    },
    {
        "topic": "css",
        "code": "p { background-color: red; }",
        "instructions": "Select all paragraphs. Set their background-color to red."
    },
    {
        "topic": "js",
        "code": "window.location.protocol === 'https:'",
        "instructions": "Write a strictly-equal condition checking whether the protocol of the page's URL is https"
    },
    {
        "topic": "html",
        "code": "<img src='sample.jpg' alt='' />",
        "instructions": "A decorative image who's source is sample.jpg. It should not be announced by screen readers."
    },
    {
        "topic": "css",
        "code": "a:active, a:focus, a:hover",
        "instructions": "Just the selector. Target three states of anchor elements: active, focus and hover"
    },
    {
        "topic": "js",
        "code": "[1,2,3].length",
        "instructions": "Access the length of an array who's three values are the numbers 1, 2 and 3. No variables. Do this in a single statement."
    },
    {
        "topic": "html",
        "code": "<p>I am <strong>here</strong></p>",
        "instructions": "A paragraph with the text content: I am here. 'here' is inside a strong element."
    },
    {
        "topic": "css",
        "code": "input:required",
        "instructions": "Just the selector. Target all required input elements."
    },
    {
        "topic": "js",
        "code": "document.forms[0].submit()",
        "instructions": "Trigger the first form on the page to submit by using the DOM API to access the first index of the forms array within the global object...and invoking its submit method."
    },
    {
        "topic": "html",
        "code": "<link rel='stylesheet' href='styles.css' />",
        "instructions": "Link to a stylesheet in the same folder called styles.css"
    },
    {
        "topic": "css",
        "code": "li > a",
        "instructions": "Just the selector. Target all anchor elements where the parent is a list item"
    },
    {
        "topic": "js",
        "code": "document.getElementById('myText').style.fontSize = '20px'",
        "instructions": "Access the element with id myText and set its font size to 20px"
    },
    {
        "topic": "html",
        "code": "<th scope='col'>Player</th>",
        "instructions": "A table header element whose text content is Player. It is scoped to the column."
    },
    {
        "topic": "css",
        "code": "h2 ~ p",
        "instructions": "Just the selector. Target all paragraphs that are preceded by a level-2 heading"
    },
    {
        "topic": "js",
        "code": "{ 'creator': 'Robert Mion' }",
        "instructions": "Proper JSON for an object with one key-value pair: creator is 'Robert Mion'"
    },
    {
        "topic": "html",
        "code": "<a href='#main'>Skip to main content</a>",
        "instructions": "An anchor element that links to an element on the same page. That element has an ID of main. The anchor's text content is: Skip to main content"
    },
    {
        "topic": "css",
        "code": "a[href$='.pdf']",
        "instructions": "Just the selector. Target all anchor elements whose href attribute ends with '.pdf'"
    },
    {
        "topic": "js",
        "code": "3 + 2 + +true",
        "instructions": "A math expression that returns 6 by adding 3, 2 and the result of coercing true to a number using the unary plus operator"
    },
    {
        "topic": "html",
        "code": "<button type='submit'>Add</button>",
        "instructions": "A button element that is of type submit and the text content: Add"
    },
    {
        "topic": "css",
        "code": "a:not(:visited)",
        "instructions": "Just the selector. Target all anchor elements that have not been visited."
    },
    {
        "topic": "js",
        "code": "[1, 2, 3].pop()",
        "instructions": "Remove the last item from an array with three values: the numbers 1, 2 and 3. No variables. Do this in a single statement."
    },
    {
        "topic": "html",
        "code": "<form action='submit.php' method='POST'>",
        "instructions": "The opening tag of a form element where the action refers to a file called submit.php and uses the POST method"
    },
    {
        "topic": "css",
        "code": "p:only-of-type",
        "instructions": "Just the selector. Target all paragraphs that are the only elements of that type within their parent"
    },
    {
        "topic": "js",
        "code": "game['cheatcode'] = 'ababxyxy'",
        "instructions": "Assign the string ababxyxy as the value of a key called cheatcode within an object called game. Use the square bracket syntax, not the dot accessor syntax."
    },
    {
        "topic": "html",
        "code": "<input type='text' id='name' />",
        "instructions": "A text input element with the id name"
    },
    {
        "topic": "css",
        "code": ":root { --primary-color: red; }",
        "instructions": "Set a custom property on the root element called primary-color with the value red"
    },
    {
        "topic": "js",
        "code": "num => () => num",
        "instructions": "An anonymous function that accepts one parameter called num and returns an anonymous function that accepts no parameters and returns num"
    },
    {
        "topic": "html",
        "code": "<h6>Level-6 Heading</h6>",
        "instructions": "A level-6 heading with text content: Level-6 Heading"
    },
    {
        "topic": "css",
        "code": ".elem { color: var(--primary-color); }",
        "instructions": "Select elements with class elem and set their text color to the value associated with the custom property primary-color"
    },
    {
        "topic": "js",
        "code": "function sum(a,b) { return a + b }",
        "instructions": "Define a function named sum that expects two paramaters - a and b - and returns the sum of a and b."
    },
    {
        "topic": "html",
        "code": "<!doctype html>",
        "instructions": "The first line in a valid HTML5 document. The first word should be all lowercase, not all-caps."
    },
    {
        "topic": "css",
        "code": "* + *",
        "instructions": "The 'owl' selector: Select all elements placed directly after any other element"
    },
]