function getQuizzes(){
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes")
    promise.then(renderQuiz)
    promise.catch(solveProblem)
}

function renderQuiz(response){
    const infos = response.data
    const main = document.querySelector(".quizz-container")
    for(i = 0; i < infos.length; i++){
        main.innerHTML += 
        `<div class="quizz" id="${infos[i].id}" onclick="enterQuizz(this)" data-identifier="quizz-card">
            <img src='${infos[i].image}' alt="">
            <h3>${infos[i].title}</h3>
        </div>
        `
    }
    //console.log(infos)
    //console.log(infos.response)
}

function solveProblem(response){
    window.alert("Deu erro! Por favor recarregue a pagina")
}
getQuizzes()