const abstractWords = document.querySelectorAll(".abstract-word");
const abstractContainer = document.querySelector(".abstract-container");
const abstractText = document.querySelector(".abstract-text");


abstractWords.forEach(abstractWord => {
    abstractWord.addEventListener('click', showAbstract);
});

function showAbstract(e){
    // console.log(e.target.parentElement.lastElementChild);
    e.target.parentElement.lastElementChild.classList.toggle('appear');
    e.target.parentElement.lastElementChild.children[0].classList.toggle('appear-txt');
    // console.log(e.target.parentElement.lastElementChild.children[0]);
    if(e.target.parentElement.lastElementChild.classList.contains('appear')){
        e.target.innerText = "- Abstract";
    }else{
        e.target.innerText = "+ Abstract";
    }
}

