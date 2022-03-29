const mediaQuery2 = window.matchMedia("(max-width: 900px)");
const cards = document.querySelectorAll(".imges")
const cards2 = document.querySelectorAll(".imges2")
const cards3 = document.querySelectorAll(".imges3")

if (mediaQuery2.matches) {
     cards.forEach((element2) => {
         element2.style.width = "150px";
         element2.style.height = "300px";
         element2.style.objectFit = "cover";
         
     });
    cards2.forEach((element2) => {
        element2.style.width = "190px";
        element2.style.height = "320px";
        element2.style.objectFit = "cover";
        
    });
    cards3.forEach((element2) => {
        element2.style.width = "300px";
        element2.style.height = "300px";
        element2.style.objectFit = "cover";
        // element2.src = "images/item4_mini.png"
    });
 }



// const iconMenu = document.querySelector(".menu-icon");
// const menuBody = document.querySelector(".menu-body");
// const iconMenu2 = document.querySelector(".iconw");
// const btn32 = document.querySelector(".buy-btn");
// const ifg = document.querySelectorAll(".ifg");
// if (iconMenu) {
//     iconMenu.addEventListener("click", function (e) {
//         document.body.classList.toggle("_lock");
//         iconMenu.classList.toggle("_active");
//         menuBody.classList.toggle("_active");
//         function sets() {
//             menuBody.classList.add("_back");
//         }
//         setTimeout(sets, 200);
//     });
// }

// const menuLinks = document.querySelectorAll(".menu-link[data-goto");
// if (menuLinks.length > 0) {
//     menuLinks.forEach((menuLink) => {
//         menuLink.addEventListener("click", onMenuLinkClick);
//     });
//     function onMenuLinkClick(e) {
//         const menuLink = e.target;
//         if (
//             menuLink.dataset.goto &&
//             document.querySelector(menuLink.dataset.goto)
//         ) {
//             const gotoBlock = document.querySelector(menuLink.dataset.goto);
//             const gotoBlockValue =
//                 gotoBlock.getBoundingClientRect().top +
//                 pageYOffset -
//                 document.querySelector("header").offsetHeight;

//             if (iconMenu.classList.contains("_active")) {
//                 document.body.classList.remove("_lock");
//                 iconMenu.classList.remove("_active");
//                 menuBody.classList.remove("_active");
//             }

//             window.scrollTo({
//                 top: gotoBlockValue,
//                 behavior: "smooth",
//             });
//             e.preventDefault();
//         }
//     }
// }

// let animItems = document.querySelectorAll("._anim-items");
// if (animItems.length > 0) {
//     window.addEventListener("scroll", animOnScroll);
//     function animOnScroll(params) {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem = animItems[index];
//             const animitemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animitemHeight / animStart;
//             if (animitemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }
//             if (
//                 pageYOffset > animItemOffset - animItemPoint &&
//                 pageYOffset < animItemOffset + animitemHeight
//             ) {
//                 animItem.classList.add("_active");
//             } else {
//                 if (!animItem.classList.contains("_anim-no-hide")) {
//                     animItem.classList.remove("_active");
//                 }
//             }
//         }
//     }
//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//     }
//     setTimeout(() => {
//         animOnScroll();
//     }, 300);
// }
// const cards2 = document.querySelectorAll(".card");

// const cards = document.querySelectorAll(".star-img");
// const mediaQuery = window.matchMedia("(max-width: 1200px)");
// const mediaQuery2 = window.matchMedia("(max-width: 960px)");
// const mediaQuery3 = window.matchMedia("(max-width: 600px)");
// const mediaQuery4 = window.matchMedia("(max-width: 500px)");
// if (mediaQuery.matches) {
//     cards.forEach((element) => {
//         element.style.height = "380px";
//         element.style.width = "100%";
//     });
// }
// if (mediaQuery2.matches) {
//     cards.forEach((element2) => {
//         element2.style.width = "100%";
//         element2.style.height = "400px";
//         element2.style.objectFit = "cover";
//     });
// }
// if (mediaQuery3.matches) {
//     cards.forEach((element2) => {
//         element2.style.width = "220%";
//         element2.style.height = "300px";
//     });
// }
// if (mediaQuery3.matches) {
//     cards.forEach((element2) => {
//         element2.style.width = "100%";
//     });
// }