/*************HEADER*****************/
// html("page-header",function(){
// return `
// <div id="hamburger-icon" class="hide">
// <svg class="svg-icons">
// <use xlink:href="#menu-i"></use>
// </svg>
// </div>
// <div id="logo-icon">
// <span id="E-logo">E</span><span id="web-logo">Web</span>
// </div>
// <div class="desk-menu show">
// <ul>
// <li class="active"><a href="./Home.html" id="home-page">Home</a></li>
// <li><a href="./Services.html" id="service-page">Services</a></li>
// <li><a href="./Our-work.html" id="work-page">Our Works</a></li>
// <li><a href="./Contact.html" id="contact-page">Contact Us</a></li>
// <li><a href="./About.html" id="about-page">About Us</a></li>
// </ul>
// </div>
// <div id="search-icon">
// <label class="switch">
//   <input type="checkbox" checked>
//   <span class="slider round"></span>
// </label>
// </div>
// `
// });
/************* END OF HEADER*****************/


/*************FOOTER*****************/



/************* END OF FOOTER*****************/




/*************MOBILE*****************/
html("mobile-sidebar",function(){
return `
<div id="close-mob-sidebar" title="close">
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" title="close">
  <circle cx="12" cy="12" r="10" opacity=".35" />
  <path d="M14.812,16.215L7.785,9.188c-0.384-0.384-0.384-1.008,0-1.392l0.011-0.011c0.384-0.384,1.008-0.384,1.392,0l7.027,7.027c0.384,0.384,0.384,1.008,0,1.392l-0.011,0.011C15.82,16.599,15.196,16.599,14.812,16.215z" />
  <path d="M7.785,14.812l7.027-7.027c0.384-0.384,1.008-0.384,1.392,0l0.011,0.011c0.384,0.384,0.384,1.008,0,1.392l-7.027,7.027c-0.384,0.384-1.008,0.384-1.392,0l-0.011-0.011C7.401,15.82,7.401,15.196,7.785,14.812z"  />
</svg>
</div>
<div class="mobile-menu">
<ul>
<li class="active">Home</li>
<li>Services</li>
<li>Our Works</li>
<li>Contact Us</li>
<li>About Us</li>
</ul>
</div> 
`
})
/*************END OF MOBILE*****************/



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
Id("page-header").style.top = "0";
removeClass("#contact-info-btn","transY");
}
else{
Id("page-header").style.top = "var(--page-header-h)";
addClass("#contact-info-btn","transY");

}
prevScrollpos = currentScrollPos;
};



// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
// if (prevScrollpos > currentScrollPos) {

// // Id("page-header").style.top = "0";
// }

// else{
// // Id("page-header").style.top = "var(--page-header-h)";
// }
// prevScrollpos = currentScrollPos;
// };