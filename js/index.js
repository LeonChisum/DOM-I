const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Top Header

const topHeader = document.getElementsByTagName('header');
topHeader.appendChild();

// Nav Bar anchor tags
let navBar = document.querySelectorAll("header a");
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];

navBar.forEach((a) => a.style.color = 'green');

// Slogan Header Text
let slogan = document.querySelector(".cta-text h1");
slogan.textContent = siteContent["cta"]["h1"];

const titleBreak = document.createElement("br"); /* br element? */
 slogan.appendChild(titleBreak);

// Slogan button
const sloganBtn = document.querySelector(".cta-text button");
sloganBtn.textContent = siteContent['cta']['button'];

// Slogan Header Img
 let sloganImg = document.getElementById("cta-img");
 sloganImg.setAttribute('src', siteContent['cta']['img-src']);

//  Main Content
const contentHeader = document.querySelectorAll('.text-content h4');
const contentText = document.querySelectorAll('.text-content p');
const contentImg = document.getElementById("middle-img");

contentImg.src = siteContent["main-content"]['middle-img-src'];

// Features
contentHeader[0].textContent = siteContent['main-content']['features-h4'];
contentText[0].textContent = siteContent['main-content']['features-content'];

// About
contentHeader[1].textContent = siteContent['main-content']['about-h4'];
contentText[1].textContent = siteContent['main-content']['about-content'];

// Services
contentHeader[2].textContent = siteContent['main-content']['services-h4'];
contentText[2].textContent = siteContent['main-content']['services-content'];

// Product
contentHeader[3].textContent = siteContent['main-content']['product-h4'];
contentText[3].textContent = siteContent['main-content']['product-content'];

// Vision
contentHeader[4].textContent = siteContent['main-content']['vision-h4'];
contentText[4].textContent = siteContent['main-content']['vision-content'];

// Contact Section

const infoHeader = document.querySelector('.contact h4');
const infoText = document.querySelectorAll('.contact p');

infoHeader.textContent = siteContent["contact"]['contact-h4']; /* br element? */
infoText[0].textContent = siteContent['contact']['address'];
infoText[1].textContent = siteContent['contact']['phone'];
infoText[2].textContent = siteContent['contact']['email'];

// Footer
const copyright = document.querySelector('footer p');
copyright.textContent = siteContent['footer']['copyright'];



