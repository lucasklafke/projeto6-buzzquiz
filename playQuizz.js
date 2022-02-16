function enterQuizz(quizz){
    const initialLayout = document.querySelector(".initial-layout").style.display = "none"
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
    console.log(response.data)
}
function errorRenderQuizzLayout(response){
    console.log(response.response)
}