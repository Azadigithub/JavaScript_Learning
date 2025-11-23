// Dom => Document Object Model

let element = document.getElementById(""); // ID    => Select UnicElement
document.getElementsByClassName(""); // Class => Select MultiElements
element[1];

document.querySelector("Element"); // h1 ,div ,span , ...
document.querySelector(".ClassnameElement");
document.querySelector("#ElementID")
document.querySelectorAll("");

// Dom Css Styles 
element.style.backgroundColor = 'red'

// Dom Attributes
element.getAttribute('class')
element.setAttribute('class' ,'li-elems' )
element.removeAttribute('class')

// Dom ClassNames
element.classList.add('new class name')
element.classList.remove('remove class name')
element.classList.toggle('add or remove class name')

// Dom Content 
element.innerHTML   = 'insert a text'
element.innerText   = 'insert a text'
element.textContent = 'insert a text'

// Dom Value 
element.value = 'insert a value'


