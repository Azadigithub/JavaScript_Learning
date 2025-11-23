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

// Dom Attributes (id, className ,'src',... )
element.getAttribute('class')
element.setAttribute('id' ,'li-elems'  )
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

//Dom Create element 
let newElement = document.createElement ('div')

//Dom Methods
element.append(newElement)
element.appendChild(newElement)

// Dom Events
onchange() , onfocus() , onblur() , onclick() , ondblclick() , ondrag() ,
oncopy() , oncut(),
onkeydown() , onkeyup() , onkeypress()

// Create Functions
function clickHandler (){
    // ...
}

// Set Events on Dom elements
element.addEventListener('event',function(){
    ///...
})

