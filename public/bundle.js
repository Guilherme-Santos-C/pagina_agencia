(()=>{document.querySelectorAll(".items-list-nav").forEach((function(e){var a=e.children[1];"contact-item-navbar"!=e.children[0].id&&(e.addEventListener("mouseover",(function(){a.className="border-bottom-link animate__animated animate__slideInLeft"})),e.addEventListener("mouseout",(function(){a.className=""})))}));var e=document.getElementsByTagName("header")[0];document.addEventListener("scroll",(function(){window.scrollY>100?(e.classList.remove("header-onTop"),e.classList.add("header-offTop")):(e.classList.remove("header-offTop"),e.classList.add("header-onTop"))})),console.log("fim")})();