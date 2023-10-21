//* DOM -> Document object 
// the DOM represent a document with a logical tree
// it allow us to manipulate / change webpage content (html elements)

// by using javascript to change html, css is two step prosses
// 1. select
//2. change / manipulate

//* Document object
// this is the main object where all the js function for webpage written
// we can access the object by -> console.dir(document);
// in document object there is a property name all
// in all property there is all of the html function written


//* Selecting Elements

//* By id

// To access the element we can do it by id 
// we can use a method which is a document method name -> getElementById
// syntax -> document.getElementById("idName"); -> we have to write our id in double quotes otherwise js will treat as variable.
// idName -> the id which we give in html tag
// Return the element as an object or null(if not found)
// we get it as object form which is prepared in DOM

//* By class

// we get it by class as well
// return the elements as an  html collection or empty collection(if not found)
// syntax -> document.getElementByClassName("className"); -> className will be in double quotes 

//* let copyImg = document.getElementsByClassName("oldImg");
//* for(let i=0; i<copyImg.length; i++){
//*     console.dir(copyImg[i].src);
//* }


//* By Tag name

// we can get element by tag name also
// return the element as an HTML collection or empty collection (if not found)
// syntax -> document.getElementByTagName("tagName");


//* Query Selectors
// most used selector
// allows us to use any CSS selector
// syntax -> 
// document.querySelector("p"); //* -> selects first p element
// document.querySelector("#myId"); //* -> selects first element with id = myId
// document.querySelector(".myClass"); //* -> selects the first element with class = myClass

// document.querySelectorAll("p"); //* select all p elements


//* Properties & Methods

//* innerText
// show the visible text contained in node
// show what we see in screen

//* textContent
// show all the full text that we write on HTML
// no hidden

//* innerHTML
// show the full markup like all the tags

//* Manipulating on HTML

let heading = document.querySelector("h1");
heading.innerText = "Anshu Gupta"


//* Manipulating Attribute
//* if we want to change value of attribute -> obj.setAttribute("attr", "val"); -> obj -> document
// attr -> the attribute we want to change
// val -> the change in attribute

// if you want to access the attribute :-
//* document.getAttribute("attr");

// the pair is called getter & setter


//* Manipulating Style
// we access style from document object by -> document.style


// let's change color of all ancor of box class

let ancColor = document.querySelectorAll(".box a");
for(let i=0; i<ancColor.length; i++){
    ancColor[i].style.color = "yellow"; //* that are inline style can't change css style
}

//* using classList
// we can access the class of the element
// syntax -> document.classList -> to access class list of element

//* to add new class in the element -> classList.add("className");

//* to remove class from the element -> classList.remove("className");

//* to check the class exist in the element -> classList.contains("className"); return -> true / false

//* toggle method -> pass className -> if class exist then this method remove it if class do not exist then this method will add that class -> syntax -> classList.toggle("className");

// heading.classList.toggle("green"); //* -> return true because green class do not exist in heading element then he added the class "green".




//* Navigation 
// we can navigate the parent of the element

//* parentElement -> to navigate the parent of the element

// heading.parentElement //* -> return body -> for heading element body is the parent -> only return one output because there will be only one parent not many

//* children -> to navigate the children of the given element

let imgBox = document.querySelector(".images");
// imgBox.children //* -> we will get a collection of array of children of the element -> in this we got an array of length 3 collection


//* Siblings
//* previousElementSibling -> access the just before element of the mentioned element

//* nextElementSibling -> access the just after element of the mentioned element



//* Adding Element
// to add new element in your document
// document.createElement("nameOfElement");
// now we just created it it time to add into our body tag

//* parentName.appendChild(created variable name);

let newP = document.createElement("p") // created
newP.innerText = "Hi i am new here!"
let body = document.querySelector("body")
body.appendChild(newP); // added to page

//* Append
// by this method we can add str, elements, etc
// add at last

// like we want to add more text into new para

newP.append(" I'm appended by Anshu"); // more text added to new para


//* Prepend
// same as append but -> add at first
// prepend(element)

newP.prepend("Hello I'm Anshu "); // added at start


//* insertAdjacentElement(position, element)
//* see mdn for more clarity

// there are four type of position

// if we want to insert before -> beforebegin
// if insert inside it as a first child -> afterbegin
// if insert inside but at last child -> beforeend
// if insert after the element -> afterend


//* Removing Element
//* removeChild(element)
// body.removeChild(newP);

//* remove(element)
// body.remove() -> remove all the body :<)


//* PQ 


//Qs1

let pq1 = document.createElement("p");
pq1.setAttribute("class", "red-text");
pq1.append("Hey I'm red!");
body.append(pq1);

//Qs2

let pq2 = document.createElement("h3")
pq2.setAttribute("class", "blue-text")
pq2.append("I'm a blue h3!") 
body.append(pq2)


//Qs3

let pq3 = document.createElement("div")
let h1Div = document.createElement("h1")
let pDiv = document.createElement("p")
pq3.setAttribute("class", "div-pq")
h1Div.append("I'm in a div!")
pDiv.append("ME TOO!")
pq3.appendChild(h1Div)
pq3.appendChild(pDiv)
body.append(pq3)



//* Assiment Question

//Qs1

let input = document.createElement("input")
let btn = document.createElement("button")
btn.append("Click me")
body.append(input)
body.append(btn)

//Qs2

input.setAttribute("placeholder", "username")
btn.setAttribute("id", "btn")

//Qs3

let styleBtn = document.querySelector("#btn")
styleBtn.style.backgroundColor = "blue"
styleBtn.style.color = "white"

//Qs4

let h1elem = document.createElement("h1")
h1elem.append("DOM Practice")
h1elem.style.textDecoration = "underlined"
h1elem.style.color = "purple"
body.append(h1elem)

//Qs5

let pTag = document.createElement("p")
pTag.append("Anshu Gupta Practice")
pTag.style.fontWeight = "bold"
body.append(pTag)









