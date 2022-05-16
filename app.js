//using selectors inside the element
// traversing the dom - You can up or down across the DOM

// const button = document.querySelectorAll(".question-btn");

// button.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle("show-text");
//     })
// })


// using classlist to add or remove effects
const questions = document.querySelectorAll(".question")

questions.forEach(function(question){
    const btn = question.querySelector(".question-btn")
    btn.addEventListener("click",function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text")
    })
})