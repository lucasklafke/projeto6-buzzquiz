function buttonEnterForm(){
    const homeLayout = document.querySelector('.initial-layout').style.display = 'none';
    const firstFormLayout = document.querySelector('.form1-layout').style.display='block';
}

function buttonInfosQuizz(next){
    
    let counterForm1 = 0;
    let counterTitle = false;
    let counterNumerQuestions = false;
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
        counterNumerQuestions = true;
    }

    const levelsNumber = infosForm1[3];

    if(levelsNumber.value < 2){
        alert('Aquantidade mínima de niveis são 2, por favor digite um número válido.')
    } else if(levelsNumber.value >= 2){
        counterLevels = true;
    }

    
    if((counterForm1 == 4) && (counterTitle) && (counterNumerQuestions) && (counterLevels)) {
        const infosLayout = document.querySelector('.form1-layout').style.display = 'none';
        const questionsLayout = document.querySelector('.form2-layout').style.display='block';
        
    }
    
}


function buttonQuestionsQuizz(next){

    const infosForm2 = document.querySelectorAll('.form2-layout input');
    let counter = 0;
    let verifyText_Color = false;
    let verifyCorrect_Answer = false;
    let verifyWrong_Answer = false;

    const textQuestion = infosForm2[0];
    const colorQuestion = infosForm2[1];

    const hexadecimalArray = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    const colorQuestionArray = [colorQuestion.value];

    if(((textQuestion.value != "") && (textQuestion.value >= 20) ) && (colorQuestion.value != "")){

            for(let i = 0; i < hexadecimalArray.length; i++){

                for(let j = 1; j < colorQuestionArray.length; j++){

                    if(!colorQuestionArray[j].includes(hexadecimalArray[i])){
                        alert('A cor deve estar no formato hexadecimal. Por favor, digite novamente.')
    
                    } else if(colorQuestionArray[j].includes(hexadecimalArray[i])){
                        verifyText_Color = true;
                        // counter ++;
                        console.log(`quantidade primeiro count ${counter}`);
    
                    }
                }
            }

    } else if((textQuestion.value == "") || (textQuestion.value.length < 20)){
        alert('Por favor, digite uma pergunta com 20 caracteres ou mais.');
        
    }

    if((infosForm2[2].value != "") && (infosForm2[3].value != "")){
        verifyCorrect_Answer = true;
        // counter ++;
        console.log(`quantidade segundo count ${counter}`);


    } else if((infosForm2[2].value = "") || (infosForm2[3].value = "")){
        alert("Por favor, preencha os campos 'Resposta correta' e 'URL da imagem'.")
    }  

    const wrongQuestion = document.querySelectorAll('.form2-layout .wrong-quetions input');
    let counterWrongQuestions = 0;
    
    for(let i = 0; i < 5; i++){

        let arrayWrongQuestions = wrongQuestion[i];
        let arrayURL = wrongQuestion[i+1];
    
        if(i % 2 == 0){
            if((wrongQuestion.value = "") || (wrongQuestion.value = "")){
                counterWrongQuestions ++;
                console.log(`quantidade wrong questions ${counter}`);
    
            }
        }
        if(counterWrongQuestions > 2){
            alert('Por favor, adicione pelo menos 1 reposta incorreta e url correspondentes.');
    
        } else if(counterWrongQuestions <= 2){
            // counter++;
            verifyWrong_Answer = true;
            console.log(`quantidade ultimo count ${counter}`);
    
        }
    }
    if((verifyText_Color) && (verifyCorrect_Answer) && (verifyWrong_Answer)) {
        const questionsLayout = document.querySelector('.form2-layout').style.display = 'none';
        const levelsLayout = document.querySelector('.form3-layout').style.display = 'block';
    
    }

}



const infosForm2 = document.querySelectorAll('.form2-layout input');

for( let i = 0; i < infosForm2.length; i++){
    console.log(infosForm2[i].value);
}

function buttonLevelsQuizz(next){
    const levelsLayout = document.querySelector('.form3-layout').style.display = 'none';
    const finalLayout = document.querySelector('.form4-layout').style.display = 'block';
}

const infosForm3 = document.querySelectorAll('.form3-layout input');

for( let i = 0; i < infosForm3.length; i++){
    console.log(infosForm3[i].value);
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