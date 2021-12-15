# jQuery

*What is jQuery?*
- The most popular JavaScript tool of all time.

[Function](#test)


# How does it work?
- We add a script element on top of the page. 
- In the script we add code such as below:
```jQuery
$(document).ready(function() {
    ......
      });
```
- Inside the function, you can write jQuery function that starts with a dollar sign($).


# Function

1. Add animation to all buttons
- If you do not put any special characters, jQuery will assume that you want to select an HTML element.
```jQuery
$("button").addClass("animated bounce");
// All buttons inside the HTML will be animated.
```

2. Target class to add animations
- Make sure to add dot(.) in the beginning before an addClass() function if you want to target classes.
```jQeury
$(".text-primary").addClass("animated shake");
// add animation class to the HTML element with a class "text-primary."
```

3. Target ID
- Make sure to add pound key(#) in the beginning before an addClass() function if you want to target IDs.
```jQuery
$("#target3").addClass("animated fadeOut");
```

4. RemoveClass()
- You can remove a class using removeClass() just as you used addClass().
```jQuery
$("button").removeClass("btn-default");
// remove a class "btn-default" from all button classes.
```

5. Change CSS
- jQuery has a function called .css() that allows you to change the CSS of an element.

```jQuery
$("#target1").css("color", "blue");
// change the css of a div with the id "#target1" to blue.
```

6. Disable a button using .prop().
- jQuery has a function called .prop() that allows you to adjust the properties of elements.
- Using .prop(), you can disable a button.
- When you disable a button, it will become grayed-out and can no longer be clicked.
```jQuery
$("button").prop("disabled", true);
```

7. Change HTML markup
ex1: change the HTML markup into italic.
```js
$("h3").html("<em>jQuery Playground</em>");
// change the HTML markup for all h3 tags.
```

8. Remove HTML markup.
```js
$("#target4").remove();
// remove a div with id target4.
```

9. Append to another HTML element. 
- jQuery has a function called appendTo() that allows you to select HTML elements and append them to another element.

```js
$("#target4").appendTo("#left-well");
// jQuery will move div with the id "#target4" into a div with id "#left-well"
```

10. Make a copy of an element > Move to another HTML.
- clone() function makes a copy of an element.

```js
$("#target2").clone().appendTo("#right-well");
// Make a copy of a div with an id "#target2" and move it to the right well. 
```

11. Refer to an element's parent > change css of it.

- parent() function allows you to access the parent of whichever element you've selected.
```js
$("#target1").parent().css("background-color", "red")
// Retrieve the parent element of the div id "target1" > Modify the css to make the background color red.
```
# Test

12. Refer to an element's children

- children() function allows you to access the children of selected element. 
```js
$("#left-well").children().css("color", "blue")
// Retrieve the parent element of the div id "left-well" > Modify the css to make the background color blue.
```

13. Select certain number of children
- target:nth-child(n) CSS selector allows you to select all the nth elements with the target class or element type. 
```js
$(".target:nth-child(3)").addClass("animated bounce");
// select all divs with target class and add "animated bounce" class.
```

14. Select even or odd child elements
- zero-indexed which means the first element in a selection has a position of 0. 
- This can be a little confusing as, counter-intuitively, :odd selects the second element (position 1), fourth element (position 3), and so on.
```js
$(".target:odd").addClass("animated shake");
// select an odd; add a class animated shake. 
```

15. Select the body > animated fadeOut

```js
$("body").addClass("animated fadeOut");
// select the body; add animation "fadeOut".
```