let articleHeader = document.querySelector(".article__header");
articleHeader.textContent = "Welcome to the Tyler blog";

const articleHeaders = document.querySelectorAll(".article__header");
// Couldn't get this to work until Kristen told me to iterate through
// articleHeaders via for loop to add the class to each instance
// since articleHeaders is an array. So, when modifying a 
// querySelectorAll DOM component, will need to use a loop.
for (let i="0"; i<articleHeaders.length; i++) {
    articleHeaders[i].classList.add("important");
}

const removeDash = document.querySelector(".dashed");
removeDash.classList.remove("dashed");

const articleFooter = document.querySelector(".article__footer");
articleFooter.classList.add("goldenrod");