const arrow = document.querySelectorAll('.arrow');
const question = document.querySelectorAll('.question');
const answer = document.querySelector('.answer');

for(let i = 0; i<question.length; i++) {
   question[i].addEventListener('click', function (){
   this.classList.toggle('question-active')

   let body = this.nextElementSibling;
   if(body.className === "answer-active"){
      body.className = "answer"
   }
   else {
      body.className = 'answer-active'
   }

   for(let i = 0; i<arrow.length; i++) {
      arrow[i].classList.toggle('arrow-active')
   }

   })
}

