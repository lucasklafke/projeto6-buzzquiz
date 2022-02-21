function buttonEnterForm(){
    const homeLayout = document.querySelector('.initial-layout').style.display = 'none';
    const firstFormLayout = document.querySelector('.form1-layout').style.display='block';
}

function buttonInfosQuizz(next){
    
    let counterForm1 = 0;
    let counterTitle = false;
    let counterNumberQuestions = false;
    let counterLevels = false;
    const infosForm1 = document.querySelectorAll('.form1-layout input');

    for(let i = 0; i < infosForm1.length; i++){
        let element = infosForm1[i].value;
        if(element != ""){
            counterForm1 ++;
        }
    }

    const titleChar = infosForm1[0].value;

    if((titleChar !== "") && (titleChar.length < 20 || titleChar.length > 65 )){
        alert('O titulo do quizz deve ter entre 20 e 65 caracteres. Por favor, escolha outro titulo para o seu quizz.')
        
    } else if((titleChar !== "") && (titleChar.length >= 20 || titleChar.length <= 65 )){
        counterTitle = true;
    }

    const questionsNumber = infosForm1[2];

    if(questionsNumber.value < 3){
        alert('Aquantidade mínima de perguntas são 3, por favor digite um número válido.')
    } else if(questionsNumber.value >= 3){
        counterNumberQuestions = true;
    }

    const levelsNumber = infosForm1[3];

    if(levelsNumber.value < 2){
        alert('Aquantidade mínima de niveis são 2, por favor digite um número válido.')
    } else if(levelsNumber.value >= 2){
        counterLevels = true;
    }

    
    if((counterForm1 == 4) && (counterTitle) && (counterNumberQuestions) && (counterLevels)) {
        const infosLayout = document.querySelector('.form1-layout').style.display = 'none';
        const questionsLayout = document.querySelector('.form2-layout').style.display='block';
        
    }
    
}


function buttonQuestionsQuizz(next){

    const infosForm2 = document.querySelectorAll('.form2-layout input');
    // let verifyText_Color = false;
    let verifyText = false;
    let verifyColor = false;
    let verifyCorrectAnswer = false;
    let verifyWrongAnswer = false;

    const textQuestion = infosForm2[0].value;
    const colorQuestion = infosForm2[1];

    const hexadecimalArray = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    const colorQuestionArray = colorQuestion.value;

    if((textQuestion !== "") && (textQuestion.length >= 20)){
        verifyText = true;
        console.log('verificação do titulo OK');
    } else if((textQuestion == "") || (textQuestion.length < 20)){
        alert('O titulo do quizz deve ter entre 20 e 65 caracteres.')
    }
    
    if(colorQuestionArray !== ""){
        let counterColor = 0;

        if((colorQuestionArray[0] == '#') && (colorQuestionArray.length == 7)){
            for(let i = 0; i < hexadecimalArray.length; i++){
    
                for(let j = 1; j < colorQuestionArray.length; j++){
                    if(colorQuestionArray[j].toLowerCase() === hexadecimalArray[i].toLowerCase()){
                        counterColor++;
                        console.log(counterColor);
                    }
                }
            }
        } else {
            console.log('A cor do quizz deve estar no formato hexadecimal');
        }

        if(counterColor == 6){
            verifyColor = true;
        }
    }


    if((infosForm2[2].value !== "") && (infosForm2[3].value !== "")){

        const verifyURL = infosForm2[3].value;
        const validationURL = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if(validationURL.test(verifyURL)){
            console.log('Teste URL OK');
            verifyCorrectAnswer = true;
        } else {
            console.log('URL inválida');
        }

    } else if((infosForm2[2].value == "") || (infosForm2[3].value == "")){
        alert("Por favor, preencha os campos 'Resposta correta' e 'URL da imagem'.")
    }  

    let counterWrongAnswers = 0;
    let counterURL = 0;
    const arrayWrongAnswers = document.querySelectorAll('.wrong-questions > input');
    
    for(let i = 0; i <= 5; i = i + 2){
        
        let wrongAnswer = arrayWrongAnswers[i];
        let imageURL = arrayWrongAnswers[i+1];
        
        if((wrongAnswer.value !== "") || (imageURL.value !== "")){

            if(wrongAnswer.value == ""){
                alert('Uma das URLs de imagem adicionadas está sem sua respectiva resposta incorreta.')

            } else {
                counterWrongAnswers ++;
            } 

            if(imageURL.value == ""){
                alert('Uma das respostas incorretas adicionadas está sem sua respectiva URL de imagem.')

            } else {
                const verifyURL = imageURL.value;
                const validationURL = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

                if(validationURL.test(verifyURL)){
                    console.log('Teste URL da questão incorreta OK');
                    verifyCorrectAnswer = true;
                    counterURL++;

                } else {
                    console.log('URL inválida');
                }
            }
        }

        if((counterWrongAnswers == 0) || (counterURL == 0)){
            alert('Por favor, adicione pelo menos 1 reposta incorreta e url correspondentes.');
    
        } else if(counterWrongAnswers == counterURL) {
            verifyWrongAnswer = true;
            console.log('Resposta errada OK');
            console.log((counterWrongAnswers == counterURL));

        }
    }

    if((verifyText) && (verifyColor) && (verifyCorrectAnswer) && (verifyWrongAnswer)) {
        const questionsLayout = document.querySelector('.form2-layout').style.display = 'none';
        const levelsLayout = document.querySelector('.form3-layout').style.display = 'block';
    
    }

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
             
             <button class="form-button button-2" onclick="buttonQuestionsQuizz(this)">Prosseguir pra criar niveis</button>

             <footer class="fake-footer"></footer>
    `
}

function buttonLevelsQuizz(next){

    const infosForm3 = document.querySelectorAll('.form3-layout input');
    const titleLevel = infosForm3[0].value;
    const correctAnswersPercent = parseInt(infosForm3[1].value);
    const imageURL = infosForm3[2].value;
    const descriptionLevel = infosForm3[3].value;
    let verifyTitle = false;
    let verifyLevel = false;
    let verifyURL = false;
    let verifyDescription = false;

    if((titleLevel != "") && (titleLevel.length >= 10)){
        verifyTitle = true;
        console.log('Verificação do titulo OK');

    } else{
        alert('O titulo do nivel deve ter pelo menos 10 caracteres.')

    }
    
    if(correctAnswersPercent != ""){

        if(((titleLevel.length >= 0) && (titleLevel.length <=100))){
            verifyLevel = true;
            console.log('Verificação da porcentagem OK');
        }
    } else {
        alert('A porcentagem deve ser um número entre 0 e 100. Por favor, digite novamente.')

    }

    if(imageURL != ""){

        const validationURL = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if(validationURL.test(imageURL)){
            console.log('Teste URL da questão incorreta OK');
            verifyURL = true;

        } else {
            alert('A URL digitada é inválida.');
        }
    }

    if((descriptionLevel != "") && (descriptionLevel.length >= 30)){
        verifyDescription = true;
        console.log('Verificação da descrição OK');

    } else{
        alert('A descrição do nivel deve ter pelo menos 30 caracteres. Por favor, reescreva a descrição.')

    }

    if((verifyTitle) && (verifyLevel) && (verifyURL) && (verifyDescription)){

        const levelsLayout = document.querySelector('.form3-layout').style.display = 'none';
        const finalLayout = document.querySelector('.form4-layout').style.display = 'block';

    }
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
             <button class="form-button button-3" onclick="buttonLevelsQuizz(this)">Finalizar Quizz</button>
             <footer class="fake-footer"></footer>
    `
}