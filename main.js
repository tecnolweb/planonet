const quizData = [ 
     { 
         question: "Quantas pessoas usam a internet na sua casa?", 
         a: "1", 
         b: "2", 
         c: "3", 
         d: "4 ou+", 
         correct: "d", 
     }, 
     { 
         question: "Quais conteúdos são acessados com mais frequência?", 
         a: "Redes sociais: Instagram, Facebook, Tik Tok...", 
         b: "Site no geral: Notícias, Compras...", 
         c: "Streaming: YouTube, Netflix... ", 
         d: "Todas As Alternativas Acima", 
         correct: "b", 
     }, 
     { 
         question: "A internet é utilizada para fazer chamadas de vídeo ou trabalhar?", 
         a: "Sim, Quase todo o dia", 
         b: "Sim, poucas vezes", 
         c: "Não", 
         d: "", 
         correct: "a", 
     }, 
     { 
         question: "A internet de casa é usada para jogar online?", 
         a: "Sim", 
         b: "Não", 
         c: "", 
         d: "", 
         correct: "b", 
     }, 
 ]; 
  
 const quiz = document.getElementById('quiz') 
 const answerEls = document.querySelectorAll('.answer') 
 const questionEl = document.getElementById('question') 
 const a_text = document.getElementById('a_text') 
 const b_text = document.getElementById('b_text') 
 const c_text = document.getElementById('c_text') 
 const d_text = document.getElementById('d_text') 
 const submitBtn = document.getElementById('submit') 
  
 let currentQuiz = 0 
 let score = 0 
  
 loadQuiz() 
  
 function loadQuiz() { 
     deselectAnswers() 
  
     const currentQuizData = quizData[currentQuiz] 
  
     questionEl.innerText = currentQuizData.question 
     a_text.innerText = currentQuizData.a 
     b_text.innerText = currentQuizData.b 
     c_text.innerText = currentQuizData.c 
     d_text.innerText = currentQuizData.d 
 } 
  
 function deselectAnswers() { 
     answerEls.forEach(answerEl => answerEl.checked = false) 
 } 
  
 function getSelected() { 
     let answer 
  
     answerEls.forEach(answerEl => { 
         if(answerEl.checked) { 
             answer = answerEl.id 
         } 
     }) 
  
     return answer 
 } 
  
 submitBtn.addEventListener('click', () => { 
     const answer = getSelected() 
  
     if(answer) { 
         if(answer === quizData[currentQuiz].correct) { 
             score++ 
         } 
  
         currentQuiz++ 
  
         if(currentQuiz < quizData.length) { 
             loadQuiz() 
         } else { 
             quiz.innerHTML = ` 
                
  
                 <button onclick="location.reload()">Refazer</button> 
                 <a href="plano.html">Enviar</a>
                 
             ` 
         } 
     } 
 })