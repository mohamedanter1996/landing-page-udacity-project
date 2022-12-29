/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
let navigatinelement=document.querySelector("#navbar__list");
const addButton=document.querySelector("#plus");
const parentbar=document.querySelector("#navbar__list");
const parentsection=document.querySelector("main");
let t=1;
let containerbar=document.querySelectorAll(".sectionBar");
let container=document.querySelectorAll(".sectionPart"); 

/*function for add new section*/ 
function addnewsection(evt){   
    let idsection="section"+t;
    let idsectionname="Section "+t;
    let idsectionbar="sectionbar"+t;
    if(t>=5){
const addsection=document.createElement("section");
parentsection.appendChild(addsection);
addsection.innerHTML="<div><h2></h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p></div>";
addsection.firstElementChild.firstElementChild.innerText= idsectionname;
addsection.firstElementChild.classList.add("landing__container");
addsection.setAttribute("class","sectionPart");
addsection.setAttribute("id",idsection);
addsection.setAttribute("data-nav","section "+t);}
const addsectionbar=document.createElement("li");
parentbar.appendChild(addsectionbar);
addsectionbar.innerText=idsection;
addsectionbar.setAttribute("style","color:black");
addsectionbar.setAttribute("style","padding:1.5em;");
addsectionbar.setAttribute("id",idsectionbar);
addsectionbar.classList.add("sectionBar");
container=document.querySelectorAll(".sectionPart"); 
containerbar=document.querySelectorAll(".sectionBar");
navigatinelement=document.querySelector("#navbar__list");
t++;
}

/*function for make viweport active*/ 
function makeActive(){
    const VALUE=150;
    container=document.querySelectorAll(".sectionPart"); 
    containerbar=document.querySelectorAll(".sectionBar");
    navigatinelement=document.querySelector("#navbar__list");
    for (let i=0;i<container.length;i++) {
        
    const box = container[i].getBoundingClientRect();
    //Find a value that works best, but 150 seems to be a good start.
    if (box.top <= VALUE && box.bottom >= VALUE) {
    //apply active state on current section and corresponding Nav link
   container[i].classList.add("your-active-class");
   if(t>=4){
   containerbar[i].classList.add("back_color");
   }
    } else {
    //Remove active state from other section and corresponding Nav link
    container[i].classList.remove("your-active-class");
    if(t>=4){
    containerbar[i].classList.remove("back_color");
    }
    }
    }
    }
/*function for make sectionbar in navigation List highlighted when mouseover it or when section in viewport position*/ 
   function changeColor(event){
    navigatinelement=document.querySelector("#navbar__list");
    if(event.target===navigatinelement){
        navigatinelement.classList.add("white_color");
    }
    else{
event.target.classList.add("back_color");

    }
   }
/*event function response for Scroll to section  when click on sectoin bar item*/
   function scrolltosectin(listItem){
if(listItem.target.nodeName==="LI"){
let listItemElement=document.querySelectorAll(".sectionBar");
let sectionNumber=document.querySelectorAll(".sectionPart");

Array.from(document.querySelectorAll('.nav li')).indexOf(document.querySelector('.active'));
sectionNumber[Array.from(document.querySelectorAll("#navbar__list li")).indexOf(listItem.target)].scrollIntoView({behavior: "smooth"});
}

}

   
   /*event method for navigation List when mouse is over sectoin bar*/ 
navigatinelement.addEventListener("mouseover",changeColor)

/*event method for highlight section when be is viewport position*/ 
    document.addEventListener("scroll", function() { makeActive();});

    /*event method for navigation List when mouse move away sectoin bar*/ 
    navigatinelement.addEventListener("mouseout",function removeColor(ev){
            ev.target.classList.remove("back_color");
    });

 /*event method for add new section  when click on add new section button*/
addButton.addEventListener("click",addnewsection);
/*event method for Scroll to section  when click on sectoin bar item*/
navigatinelement.addEventListener("click",scrolltosectin);
