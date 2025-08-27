
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer:
1.getElementById("id")

  Selects only one element with the given id.

  Always returns a single element object (or null if not found).

2.getElementsByClassName("class")

  Selects all elements with the given class name.

  Returns an HTMLCollection (live list, updates if DOM changes).

3.querySelector("selector")

  Selects the first element that matches a CSS selector.

  Returns a single element (or null).

4.querySelectorAll("selector")

  Selects all elements matching the CSS selector.

  Returns a NodeList.

  Can be looped with forEach.


2. How do you **create and insert a new element into the DOM**?
Answer:

Create the element : document.createElement("tagName")

Set content/attributes : .textContent, .className, .id, etc.

Insert into the DOM using appendChild, prepend, insertBefore, etc.


3. What is **Event Bubbling** and how does it work?
Answer:
When an event happens (e.g., a click) on an element, it bubbles up the DOM tree.
Example: Clicking a button inside a div → first the button’s event triggred, then the parent div, then body, then document, etc.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer:
A technique where a single event listener is added to a parent element, instead of adding listeners to many child elements.
It Uses event bubbling to catch events from child elements.

Useful when:

we have many child elements (performance gain).

Child elements are added dynamically.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:

1.event.preventDefault()

  Prevents the default browser behavior.

  Example: Stops a link from navigating, or stops a form from submitting.

2.event.stopPropagation()

  Stops the event from bubbling (or capturing) further up the DOM tree.

  Example: If we click a button inside a div, the event won’t reach the parent div if you use this.
