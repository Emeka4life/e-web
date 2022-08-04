html("title",function(){
return `
<h1>OUR SERVICES</h1>   

<div id="content-main">
<div class="content-main-sub">
<div class="content-main-icons">
<svg class="svg-icons">
<use xlink:href="#web-i"></use>
</svg>
</div>
<h4 class="content-main-titles">Website Design</h4>
<div class="content-main-descs">
We at E-Graphics Offer Standard Enterprise,Corporate Solutions and Services.
</div>
</div>

<div class="content-main-sub">
<div class="content-main-icons">
<svg class="svg-icons">
<use xlink:href="#window-i"></use>
</svg>
</div>
<h4 class="content-main-titles">Software Development</h4>
<div class="content-main-descs">
Contrary to popular belief, We at E-Graphics Offer Standard Corporate Solutions and Services.
</div>
</div>


<div class="content-main-sub">
<div class="content-main-icons">
<svg class="svg-icons">
<use xlink:href="#cloud-i"></use>
</svg>
</div>
<h4 class="content-main-titles">Cloud Development</h4>
<div class="content-main-descs">
Contrary to popular belief, We at E-Graphics Offer Standard Corporate Solutions and Services.
</div>
</div>
</div>

<div id="content-main">
<div class="content-main-sub">
<div class="content-main-icons">
<svg class="svg-icons">
<use xlink:href="#mobile-i"></use>
</svg>
</div>
<h4 class="content-main-titles">Mobile Development</h4>
<div class="content-main-descs">
We at E-Graphics Offer Standard Enterprise,Corporate Solutions and Services.
</div>
</div>

<div class="content-main-sub">
<div class="content-main-icons">
<svg class="svg-icons">
<use xlink:href="#desktop-i"></use>
</svg>
</div>
<h4 class="content-main-titles">Desktop Development</h4>
<div class="content-main-descs">
Contrary to popular belief, We at E-Graphics Offer Standard Corporate Solutions and Services.
</div>
</div>


<div class="content-main-sub">
<div class="content-main-icons">
<svg class="svg-icons">
<use xlink:href="#database-i"></use>
</svg>
</div>
<h4 class="content-main-titles">Database Management</h4>
<div class="content-main-descs">
Contrary to popular belief, We at E-Graphics Offer Standard Corporate Solutions and Services.
</div>
</div>
</div>
`
});





html("why__choose__us",function(){
 return `

  <header><h3>Why Choose Us?</h3></header>

    <section id="why__choose__us__reason">
        <section class="why__choose__us__reason__section">
            <section class="reason__section__inner" id="rSection-1">
                <h3>
                <div class="reason__section__inner-h3">High Quality<div>
                <div>Website</div>
               </h3>
                <section class="reason__section__desc">We Offer top-notch Website to develop the most efficient apps for our customers</section>
            </section>

              <section class="reason__section__inner" id="rSection-2">
                <h3>
                <div class="reason__section__inner-h3">Dedicated 24\/7<div>
                <div>Support</div>
               </h3>
                <section class="reason__section__desc">We Offer top-notch Website to develop the most efficient apps for our customers</section>
            </section>


              <section class="reason__section__inner" id="rSection-3">
                <h3>
                <div class="reason__section__inner-h3">30-Day Monkey-back<div>
                <div>Guarantee</div>
               </h3>
                <section class="reason__section__desc">We Offer top-notch Website to develop the most efficient apps for our customers</section>
            </section>
         
        </section>
       <section class="why__choose__us__reason__section">
            <section class="reason__section__inner" id="rSection-4">
                <h3>
                <div class="reason__section__inner-h3">Agile and Fast<div>
                <div>Working Style</div>
               </h3>
                <section class="reason__section__desc">We Offer top-notch Website to develop the most efficient apps for our customers</section>
            </section>

              <section class="reason__section__inner" id="rSection-5">
                <h3>
                <div class="reason__section__inner-h3">Some Apps<div>
                <div>are free</div>
               </h3>
                <section class="reason__section__desc">We Offer top-notch Website to develop the most efficient apps for our customers</section>
            </section>


              <section class="reason__section__inner" id="rSection-6">
                <h3>
                <div class="reason__section__inner-h3">High Level of<div>
                <div>Usability</div>
               </h3>
                <section class="reason__section__desc">We Offer top-notch Website to develop the most efficient apps for our customers</section>
            </section>
         
        </section>

    </section>
 `
})

const swiper = new Swiper('.swiper-container', 
 {loop: true,autoplay: {delay: 3000,},
pagination: {el: '.swiper-pagination',},
navigation: {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev',},
scrollbar: {el: '.swiper-scrollbar',},});

/*******************************************/
/**************************************/
Id("hamburger-icon").addEventListener("click",function(){
addClass("body","overflow-hidden");
addClass("#mobile-sidebar ","transX");
});

Id("close-mob-sidebar").addEventListener("click",function(){
removeClass("body","overflow-hidden");
removeClass("#mobile-sidebar ","transX");
});
/*************************************/
/***************************************/

// function openSearch(){
// addClass("#search-content","show");
// addClass("body","overflow-hidden-all");
// }

// function closeSearch(){
// removeClass("#search-content","show");
// removeClass("body","overflow-hidden-all");
// }

// Id("search-icon").addEventListener("click",openSearch);

// Id("close-search").addEventListener("click",closeSearch);
/***************************************/
/***************************************/
// window.oncontextmenu = function(){
//    return false;
// }
/***************************************/


/**************************/
window.addEventListener("keydown",function(evt){
if (evt.defaultPrevented) {
return; 
}
if(evt.ctrlKey && "KeyS" === evt.code){
evt.preventDefault();
// openSearch();
}
switch (evt.key) {
case "Escape":
evt.preventDefault();
// history.go(1);
break;
default:
return;
}

});

/**************************/

