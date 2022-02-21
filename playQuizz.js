let questionList = []
let counterQuestion = 0
let counterQuestionAux = 1
let idQuizSelecionado = 0
let countCorrectAnswers = 0
let quizInfos = []
let counterLevel = 0
function enterQuizz(quizz){
    const initialLayout = document.querySelector(".initial-layout").style.display = "none"
    const quizLayout = document.querySelector(".quiz-layout").style.display = "block"
    getQuizz(quizz)
}
function getQuizz(quizz){

    if(typeof(quizz.id) === 'string'){
        idQuizSelecionado = quizz.id
    }
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${idQuizSelecionado}`)
    promise.then(renderQuizzLayout)
    promise.catch(errorRenderQuizzLayout)
    
}
function renderQuizzLayout(response){

    const infos = response.data
    quizInfos.push(infos)
    const quizTitle = document.querySelector(".quiz-header span")
    quizTitle.innerHTML = infos.title
    
    const headerImage = document.querySelector(".quiz-header img")
    headerImage.setAttribute("src",infos.image)

    const questions = infos.questions
    renderQuestions(questions)
}   
function errorRenderQuizzLayout(response){
    window.alert("houve um problema ao inicializar o quiz! Recarregue a página e tente novamente")
}
function renderQuestions(questions){
    let questionsContainer = document.querySelector(".questions-container")
    for(i = 0; i <questions.length;i++){
        questionList.push(questions[i])
        const answers = questions[i].answers
        if(answers.length == 2){
            questionsContainer.innerHTML +=
            `
                <div class="question${i}">
                    <div class="question-text" style="background-color:${questions[i].color};">
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
                    <div class="question-text" style="background-color:${questions[i].color};">
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
                    <div class="question-text" style="background-color:${questions[i].color};">
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
                }else{
                    arrayOptions[i].classList.add("not-selected")
                }


                if(answers[i].isCorrectAnswer === false){
                    arrayOptions[i].classList.add("wrong-answer")
                } else{
                    arrayOptions[i].classList.add("correct-answer")
                }
                
                if(arrayOptions[i].classList.contains("selected") && arrayOptions[i].classList.contains("correct-answer")){
                    countCorrectAnswers++
                }
            }
        }else{
            window.alert("você ja marcou essa questão")
        }
        counterQuestion++
        if(counterQuestion == questionList.length){
            const resultContainer = document.querySelector(".result-container")
            resultContainer.style.display = "flex"
            const finishMenu = document.querySelector(".quiz-menu").style.display = "flex"
            resultContainer.scrollIntoView()
            createResult()
        } else{
            setTimeout(scrollNextQuestion,2000)
        }
    }
}
function reloadPage(){
    location.reload()
}
function restartQuiz(){
    questionList = []
    counterQuestion = 0
    counterQuestionAux = 1
    counterLevel = 0
    countCorrectAnswers = 0
    document.querySelector(".questions-container").innerHTML = ''
    getQuizz(idQuizSelecionado)
    const resultContainer = document.querySelector(".result-container")
    resultContainer.style.display = "none"
    const finishMenu = document.querySelector(".quiz-menu").style.display = "none"
    finishMenu.style.display = "none"
    const question = document.querySelector(".question0")
    question.scrollIntoView()
     

}
function scrollNextQuestion(){
    const question = document.querySelector(`.question${counterQuestionAux}`)
    question.style.display = "flex"
    question.scrollIntoView()
    counterQuestionAux +=1
}
function createResult(){
    const levels = quizInfos[0].levels
    let porcentage = 0
    porcentage = calcLevel(levels,porcentage)
    const levelTitle = document.querySelector(".result-level span")
    const levelImage = document.querySelector(".result-image")
    const levelText = document.querySelector(".result-message span")
    levelTitle.innerHTML = `${porcentage}% de acerto: `
    levelTitle.innerHTML += levels[parseInt(counterLevel)].title
    levelImage.setAttribute("src",`${levels[parseInt(counterLevel)].image}`)
    levelText.innerHTML = levels[parseInt(counterLevel)].text
}
function calcLevel(levels,porcentage){
    console.log(porcentage)
    porcentage = 0
    console.log(porcentage)
    porcentage = (countCorrectAnswers / questionList.length) * 100
    const qntLevels = levels.length
    for(i = 1; i < levels.length;i++){
        if(porcentage >= levels[i].minValue){
            counterLevel++
        }
    }
    console.log(porcentage)
    return porcentage
}