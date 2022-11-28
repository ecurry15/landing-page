//Method to get a set value for vh -- fixes mobile vh problem ---
let vh = window.innerHeight * 0.01;
// set custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});




const mainFooterQuoteBtn = document.querySelector('.main__footer-quote-btn');
const mainFooterModalOpenBlur = document.querySelector('.main__footer-modal-open-wrap');
const mainFooterForm = document.querySelector('.main__footer-quote-form');
let quoteFormIsOpen = false;
const mobileSideBarOpenIcon = document.querySelector('.main-nav__mobile-menu-icon');
const mobileSideBar = document.querySelector('.mobile__nav-sideBar');
const mobileSideBarCloseIcon = document.querySelector('.mobile__sideBar-close-btn');
const mobileSideBarNav = document.querySelector('.mobile-sideBar__nav');
const mobileSideBarBtn = document.querySelector('.mobile-sideBar__btn');
const mobileSideBarLogo = document.querySelector('.mobile-sideBar__logo');

mobileSideBarOpenIcon.addEventListener('pointerdown', () => {
let largeMobile = window.matchMedia('(min-width: 768px)');
if(largeMobile.matches) {
mobileSideBar.style.animation = "large-mobile-sideBar-open .5s forwards";
} else if (!largeMobile.matches) {
    mobileSideBar.style.animation = "small-mobile-sideBar-open .5s forwards";
}
mainFooterModalOpenBlur.style.display = 'block';
setTimeout(() => {
    mobileSideBarCloseIcon.style.display = "block";
    mobileSideBarNav.style.display = "flex";
    mobileSideBarBtn.style.display = "block";
    mobileSideBarLogo.style.display = "block";
  }, "300")
});

mobileSideBarCloseIcon.addEventListener('pointerdown', () => {
    let largeMobile = window.matchMedia('(min-width: 768px)');
if(largeMobile.matches) {
mobileSideBar.style.animation = "large-mobile-sideBar-close .5s forwards";
} else if (!largeMobile.matches) {
    mobileSideBar.style.animation = "small-mobile-sideBar-close .5s forwards";
}
mobileSideBarCloseIcon.style.display = "none";
    mobileSideBarNav.style.display = "none";
    mobileSideBarBtn.style.display = "none";
    mobileSideBarLogo.style.display = "none";
    mainFooterModalOpenBlur.style.display = 'none';
});


 document.addEventListener('click', (e) => {
        const isQuoteForm = e.target.matches("[data-quote-form]");
        const isQuoteFormOpenBtn = e.target.matches("[data-quote-form-open]");
        const isSideBarQuoteFormOpenBtn = e.target.matches("[data-sideBar-quote-form-open]");
        let largeMobile = window.matchMedia('(min-width: 768px)');
        if(isQuoteFormOpenBtn) {
            mainFooterModalOpenBlur.style.display = 'block';
            mainFooterForm.style.display = "flex";
            quoteFormIsOpen = true;
        } else if (quoteFormIsOpen && !isQuoteForm) {
            mainFooterModalOpenBlur.style.display = 'none';
            mainFooterForm.style.display = "none";
            quoteFormIsOpen = false;
        } else if (isSideBarQuoteFormOpenBtn) {
            mainFooterModalOpenBlur.style.display = 'block';
            mainFooterForm.style.display = "flex";
            quoteFormIsOpen = true;
            if(largeMobile.matches) {
                mobileSideBar.style.animation = "large-mobile-sideBar-close .5s forwards";
                } else if (!largeMobile.matches) {
                    mobileSideBar.style.animation = "small-mobile-sideBar-close .5s forwards";
                }
                mobileSideBarCloseIcon.style.display = "none";
                    mobileSideBarNav.style.display = "none";
                    mobileSideBarBtn.style.display = "none";
                    mobileSideBarLogo.style.display = "none";
        }
    });