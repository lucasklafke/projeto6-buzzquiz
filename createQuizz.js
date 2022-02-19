function buttonEnterForm(){
    const homeLayout = document.querySelector('.initial-layout').style.display = 'none';
    const firstFormLayout = document.querySelector('.form1-layout').style.display='block';
}

function buttonInfosQuizz(next){
    const infosLayout = document.querySelector('.form1-layout').style.display = 'none';
    const questionsLayout = document.querySelector('.form2-layout').style.display='block';

}
function buttonQuestionsQuizz(next){
    const questionsLayout = document.querySelector('.form2-layout').style.display = 'none';
    const levelsLayout = document.querySelector('.form3-layout').style.display = 'block';

}
function buttonLevelsQuizz(next){
    const levelsLayout = document.querySelector('.form3-layout').style.display = 'none';
    const finalLayout = document.querySelector('.form4-layout').style.display = 'block';
}



function createQuestion2(question){
    const newQuestion = document.querySelector('.questions');
    newQuestion.innerHTML = `

    <div class="questions-box create-section">

                <h2 class="create-quizz-sections">Pergunta 2</h2>
                 <input class="questions-field" type="text" name="" placeholder=" Texto da sua pergunta">
                 <input class="questions-field" type="text" name="" placeholder=" Cor de fundo da pergunta">

                 <h2 class="create-quizz-sections">Resposta correta</h2>
                 <input class="questions-field" type="text" name="" placeholder=" Resposta correta">
                 <input class="questions-field" type="url" name="" placeholder=" URL da imagem">

                 <h2 class="create-quizz-sections">Resposta incorretas</h2>
                 <input class="questions-field" type="text" name="" placeholder=" Resposta incorreta 1">
                 <input class="questions-field" type="url" name="" placeholder=" URL da imagem 1">
                 <input class="questions-field" type="text" name="" placeholder=" Resposta incorreta 2">
                 <input class="questions-field" type="url" name="" placeholder=" URL da imagem 2">
                 <input class="questions-field" type="text" name="" placeholder=" Resposta incorreta 3">
                 <input class="questions-field" type="url" name="" placeholder=" URL da imagem 3">
             </div>
             
             <div class="write-question question-2">
                <h2 class="create-quizz-sections">Pergunta 3</h2>
                <ion-icon class="create-quizz-icons" name="create-outline" onclick="createQuestion2(this)"></ion-icon>
             </div>
             <div class="write-question question-3">
                <h2 class="create-quizz-sections">Pergunta 4</h2>
                <ion-icon class="create-quizz-icons" name="create-outline" onclick="createQuestion(this)"></ion-icon>
             </div>
             <button class="form-button button-2" onclick="buttonQuestionsQuizz(this)">Prosseguir pra criar niveis</button>

             <footer class="fake-footer"></footer>
    `
}

function createLevel2(level){
    const newLevel = document.querySelector('.levels');
    newLevel.innerHTML = `

    <div class="questions-box levels-section">

                <h2 class="create-quizz-sections">Nivel 2</h2>
                 <input class="questions-field" type="text" name="" placeholder=" Titulo do nível">
                 <input class="questions-field" type="text" name="" placeholder=" % de acerto mínimo">
                 <input class="questions-field" type="url" name="" placeholder=" URL da imagem do nível">
                 <input class="questions-field description" type="text" name="" placeholder=" Descrição do nível">
            </div>

            <div class="write-question nivel-2">
                <h2 class="create-quizz-sections">Nivel 3</h2>
                <ion-icon class="create-quizz-icons" name="create-outline"></ion-icon>
             </div>
             <div class="write-question nivel-3">
                <h2 class="create-quizz-sections">Nivel 4</h2>
                <ion-icon class="create-quizz-icons" name="create-outline"></ion-icon>
             </div>
             <button class="form-button button-3" onclick="buttonLevelsQuizz(this)">Finalizar Quizz</button>
             <footer class="fake-footer"></footer>
    `
}