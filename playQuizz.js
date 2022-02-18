let questionList = []
let counterQuestion = 0
let counterQuestionAux = 1
function enterQuizz(quizz){
    const initialLayout = document.querySelector(".initial-layout").style.display = "none"
    const quizLayout = document.querySelector(".quiz-layout").style.display = "block"
    getQuizz(quizz)
}
function getQuizz(quizz){
    const id = quizz.id
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`)
    promise.then(renderQuizzLayout)
    promise.catch()
}
function renderQuizzLayout(response){
    console.log('deubom')
    const infos = response.data
    
    const quizTitle = document.querySelector(".quiz-header span")
    quizTitle.innerHTML = infos.title
    
    const headerImage = document.querySelector(".quiz-header img")
    headerImage.setAttribute("src",infos.image)

    const questions = infos.questions
    renderQuestions(questions)
    
}   
function errorRenderQuizzLayout(response){
    console.log(response.response)
}
function renderQuestions(questions){
    let questionsContainer = document.querySelector(".questions-container")
    console.log(questions)
    for(i = 0; i <questions.length;i++){
        questionList.push(questions[i])
        const answers = questions[i].answers
        console.log(answers[0])
        if(answers.length == 2){
            questionsContainer.innerHTML +=
            `
                <div class="question${i}">
                    <div class="question-text">
                        <span>${questions[i].title}</span>
                    </div>
                    <div class="option-container">
                        <div class="option" onclick="selectOption(this)">
                            <img src="${answers[0].image}" alt="">
                            <span class="option-text">${answers[0].text}</span>
                        </div>
                        <div class="option" onclick="selectOption(this)">
                            <img src="${answers[1].image}" alt="">
                            <span class="option-text">${answers[1].text}</span>
                        </div>
                    </div>
                </div>
            `
        } else if(answers.length == 3){
            questionsContainer.innerHTML +=
            `
                <div class="question${i}">
                    <div class="question-text">
                        <span>${questions[i].title}</span>
                    </div>
                    <div class="option-container">
                        <div class="option" onclick="selectOption(this)">
                            <img src="${answers[0].image}" alt="">
                            <span class="option-text">${answers[1].text}</span>
                        </div>
                        <div class="option" onclick="selectOption(this)">
                            <img src="${answers[1].image}" alt="">
                            <span class="option-text">${answers[1].text}</span>
                        </div>
                        <div class="option" onclick="selectOption(this)">
                            <img src="${answers[2].image}" alt="">
                            <span class="option-text">M${answers[1].text}</span>
                        </div>
                        
                    </div>
                </div>
            `
        } else{
            questionsContainer.innerHTML +=
            `
                <div class="question${i}">
                    <div class="question-text">
                        <span>${questions[i].title}</span>
                    </div>
                    <div class="option-container">
                        <div class="option" onclick="selectOption(this)">
                            <img src="$${answers[0].image}" alt="">
                            <span class="option-text">Mustela putorius (o Furão)</span>
                        </div>
                        <div class="option" onclick="selectOption(this)">
                            <img src="${answers[1].image}" alt="">
                            <span class="option-text">${answers[1].text}</span>
                        </div>
                        <div class="option" onclick="selectOption(this)">
                            <img src="${answers[2].image}" alt="">
                            <span class="option-text">${answers[1].text}</span>
                        </div>
                        <div class="option" onclick="selectOption(this)">
                            <img src="${answers[3].image}" alt="">
                            <span class="option-text">${answers[1].text}</span>
                        </div>
                    </div>
                </div>
            `
        }
    }
    const question = document.querySelector(".question0").style.display = "flex"
}
function selectOption(selected){
    if(selected.classList.contains("selected") || selected.classList.contains("wrong-answer")){
        window.alert("você ja marcou essa questão")
    } else{
        if(counterQuestion < questionList.length){
            selected.classList.add("selected")
            let answers = questionList[counterQuestion].answers
            let arrayOptions = document.querySelectorAll(`.question${counterQuestion} .option`)
            for(i = 0; i < answers.length;i++){
                if(arrayOptions[i].classList.contains("selected")){
                    console.log("tem selected")
                }else{
                    arrayOptions[i].classList.add("wrong-answer")
                }
            }
        }else{
            window.alert("você ja marcou essa questão")
        }
        counterQuestion++
        if(counterQuestion == questionList.length){
            const resultContainer = document.querySelector(".result-container").style.display = "flex"
            const finishMenu = document.querySelector(".quiz-menu").style.display = "flex"
        } else{
            const question = document.querySelector(`.question${counterQuestionAux}`)
            question.style.display = "flex"
            question.scrollIntoView()
            console.log(counterQuestionAux)
            counterQuestionAux +=1
        }
    }
}