const mainFooterQuoteBtn = document.querySelector('.main__footer-quote-btn');
const mainFooterModalOpenBlur = document.querySelector('.main__footer-modal-open-wrap');
const mainFooterForm = document.querySelector('.main__footer-quote-form');
let quoteFormIsOpen = false;



 document.addEventListener('click', (e) => {
        const isQuoteForm = e.target.matches("[data-quote-form]");
        const isQuoteFormOpenBtn = e.target.matches("[data-quote-form-open]");
        if(isQuoteFormOpenBtn) {
            mainFooterModalOpenBlur.style.display = 'block';
            mainFooterForm.style.display = "flex";
            quoteFormIsOpen = true;
        } else if (quoteFormIsOpen && !isQuoteForm) {
            mainFooterModalOpenBlur.style.display = 'none';
            mainFooterForm.style.display = "none";
            quoteFormIsOpen = false;
        }
    });

