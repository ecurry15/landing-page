const homeFooterQuoteBtn = document.querySelector('.home__footer-quote-btn');
const homeFooterModalOpenBlur = document.querySelector('.home__footer-modal-open-wrap');
const homeFooterForm = document.querySelector('.home__footer-quote-form');
let quoteFormIsOpen = false;



 document.addEventListener('click', (e) => {
        const isQuoteForm = e.target.matches("[data-quote-form]");
        const isQuoteFormOpenBtn = e.target.matches("[data-quote-form-open]");
        if(isQuoteFormOpenBtn) {
            homeFooterModalOpenBlur.style.display = 'block';
            homeFooterForm.style.display = "flex";
            quoteFormIsOpen = true;
        } else if (quoteFormIsOpen && !isQuoteForm) {
            homeFooterModalOpenBlur.style.display = 'none';
            homeFooterForm.style.display = "none";
            quoteFormIsOpen = false;
        }
    });

