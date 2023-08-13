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

// build the nav  && // Build menu 
    const navbar = document.getElementById('navbar__list')
    

    const link1 = document.createElement('a')
    link1.className ='menu__link'
    link1.classList.add('section1')
    link1.innerHTML  = '<li> Section 1 </li>'
    link1.href='#section1'
    navbar.append(link1)
   

    const link2 = document.createElement('a')
    link2.className ='menu__link'
    link2.classList.add('section2')
    link2.innerHTML  = '<li> Section 2 </li>'
    link2.href='#section2'
    navbar.append(link2)
  
    // const Sec2 = document.createElement('li')
    // Sec2.textContent = 'Section 2';
    // link2.appendChild(Sec2)

    const link3 = document.createElement('a')
    link3.className ='menu__link'
    link3.classList.add('section3')
    link3.innerHTML  = '<li> Section 3 </li>'
    link3.href='#section3'
    navbar.append(link3)



    const link4 = document.createElement('a')
    link4.className ='menu__link'
    link4.classList.add('section4')
    link4.href='#section4'
    link4.innerHTML  = '<li> Section 4 </li>'
    navbar.append(link4)
   



    const sections =  document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.menu__link');





/**
 * End Main Functions
 * Begin Events
 * 
*/


// Scroll to anchor ID using scrollTO event
// Scroll to section on link click

navLi.forEach(link => {

  link.addEventListener("click", (e) => {
   e.preventDefault();
   const herf = document.querySelector(link.getAttribute('href'));
    herf.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

   }) 
 })




// Set sections as active &&
// Add class 'active' to section when near top of viewport



window.addEventListener('scroll', ()=> {
  let carrent='';


  sections.forEach(section => {
    const SectionTop = section.offsetTop;
    const SectionHeight =section.clientHeight;

    
      // section.classList.remove('your-active-class');

    if(window.scrollY >= (SectionTop - SectionHeight / 4)){
      carrent =section.getAttribute('id');
      document.querySelector('.your-active-class')?.classList.remove('your-active-class');
      section.className = 'your-active-class';
    }


  })
  navLi.forEach( li => {
    // li.classList.remove('active');

    if(li.classList.contains(carrent)){
      document.querySelector('.active')?.classList.remove('active');
      li.classList.add('active')
    }
  })
})
