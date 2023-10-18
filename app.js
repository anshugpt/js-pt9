//* DOM -> Document object 
// the DOM represent a document with a logical tree
// it allow us to manipulate / change webpage content (html elements)

// by using javascript to change html, css is tow step prosses
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

// heading.classList.toggle("green"); //* -> return true because gree class do not exist in heading element then he added the class "green".




