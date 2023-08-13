# Landing Page Project

## Table of Contents

* [Instructions](#instructions)
* [Project Description](#project-description)
* [Usage](#usage)
    * [dynamically content](#dynamically-content)
    * [Events](#event)
* [Dependencies](#dependencies)


## Instructions

[(Back to top)](#table-of-contents)

This project aims to give us real-world scenarios of manipulating the DOM. The functionality you will be using serves two purposes: to prepare you for appending dynamically added data to the DOM, and to show you how javascript can improve the usability of an otherwise static site. This project barely touches the surface of what is possible, but it does use some incredibly common events, methods, and logic.

>**Note**: This project will be reviewed by *Udacity code reviewer* So we will have to follow some Interface and Architecture.

## Project Description

[(Back to top)](#table-of-contents)

This project requires us to build a multi-section **landing page**, with a dynamically updating navigational menu based on the amount of content that is added to the page.

> I used the provided a starter project (i.e., a "skeleton").

## Usage

[(Back to top)](#table-of-contents)

This project is a manipulating the DOM.
 The functionality :

- appending dynamically added data to the DOM
- how javascript can improve the usability of an otherwise static site.
- use some incredibly common events, methods, and logic.


#### dynamically content

Often times, we don’t know how much content will be added to a page through a CMS or an API. To circumvent this problem, we can dynamically add the content to the page. We will be demonstrating this with the navigation menu.

here is my code :

````

    const navbar = document.getElementById('navbar__list')
    

    const link1 = document.createElement('a')
    link1.className ='menu__link'
    link1.classList.add('section1')
    link1.innerHTML  = '<li> Section 1 </li>'
    link1.href='#section1'
    navbar.append(link1)

   
````

>I know that there is an easier way to repeat the process through a loop, but at the moment, since I am a beginner, I prefer this method.


#### Event

````


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


````

## Dependencies

[(Back to top)](#table-of-contents)

This project contains the dynamice menu bar, which shortens the process of moving between sections, which was built using JavaScript .