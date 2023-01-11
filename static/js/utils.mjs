export const $ = (selector) => {
    return document.querySelector(selector);
}

export const $$ = () => {
    return document.querySelectorAll(selector);
}