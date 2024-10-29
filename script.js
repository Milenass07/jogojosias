let questions = {
    easy: [
        { question: "Qual é o verdadeiro nome do Homem-Aranha?", answers: ["Peter Parker", "Bruce Wayne", "Tony Stark"], correct: 0 },
        { question: "Qual cidade o Homem-Aranha protege?", answers: ["Nova York", "Gotham", "Metropolis"], correct: 0 },
        { question: "Quem é o melhor amigo de Peter Parker?", answers: ["Harry Osborn", "Ned Leeds", "Flash Thompson"], correct: 0 },
        { question: "Qual o nome da tia de Peter Parker?", answers: ["May", "Marie", "Sally"], correct: 0 },
        { question: "Qual vilão é chamado de cabeça de teia?", answers: ["Duende Verde", "Venom", "Rei do Crime"], correct: 1 },
        { question: "Quem é o interesse amoroso de Peter Parker em 'O Espetacular Homem-Aranha 2'?", answers: ["Gwen Stacy", "Mary Jane", "Felicia Hardy"], correct: 0 },
        { question: "Quem é o mentor de Peter Parker em 'Homem-Aranha: De Volta ao Lar'?", answers: ["Tony Stark", "Nick Fury", "Steve Rogers"], correct: 0 },
        { question: "Quem interpreta o Homem-Aranha nos filmes mais recentes?", answers: ["Tom Holland", "Tobey Maguire", "Andrew Garfield"], correct: 0 },
        { question: "Qual é o nome do melhor amigo de Peter Parker na trilogia original?", answers: ["Harry Osborn", "Ned Leeds", "Flash Thompson"], correct: 0 },
        { question: "Quem é o vilão em 'Homem-Aranha: No Aranhaverso'?", answers: ["Rei do Crime", "Electro", "Duende Verde"], correct: 0 },
        { question: "Quem interpreta o vilão 'Mistério' em 'Homem-Aranha: Longe de Casa'?", answers: ["Jake Gyllenhaal", "Willem Dafoe", "Jamie Foxx"], correct: 0 },
        { question: "Qual é o nome do jornal onde Peter Parker trabalha como fotógrafo?", answers: ["Clarim Diário", "O Globo", "Planeta Diário"], correct: 0 },
        { question: "Quem sequestra Mary Jane em 'Homem-Aranha 1'?", answers: ["Duende Verde", "Venom", "Rino"], correct: 0 },
        { question: "Qual é o nome do primeiro filme solo do Homem-Aranha no MCU?", answers: ["Homem-Aranha: De Volta ao Lar", "Homem-Aranha 2", "Homem-Aranha no Aranhaverso"], correct: 0 },
        { question: "Quem foi o primeiro ator a interpretar o Homem-Aranha no cinema?", answers: ["Tobey Maguire", "Tom Holland", "Andrew Garfield"], correct: 0 },
        { question: "Qual é o nome completo do Tio Ben?", answers: ["Benjamin Parker", "Bruce Parker", "Benji Parker"], correct: 0 },
        { question: "Quem foi o primeiro ator a interpretar o Homem-Aranha em uma série de TV?", answers: ["Nicholas Hammond", "Tom Holland", "Tobey Maguire"], correct: 0 },
        { question: "Em qual filme o Homem-Aranha se junta pela primeira vez aos Vingadores?", answers: ["Capitão América: Guerra Civil", "Vingadores: Guerra Infinita", "Homem-Aranha: Longe de Casa"], correct: 0 },
        { question: "Qual é o apelido do editor-chefe do Clarim Diário?", answers: ["J.J. Jameson", "Jonah", "Jay"], correct: 0 },
        { question: "Quem foi o primeiro vilão que o Homem-Aranha enfrentou em 'Homem-Aranha: De Volta ao Lar'?", answers: ["Abutre", "Rino", "Shocker"], correct: 0 }
    ],
    medium: [
        { question: "Quem foi o primeiro vilão que o Homem-Aranha enfrentou?", answers: ["Duende Verde", "Rino", "Electro"], correct: 0 },
        { question: "Quem é o amor de infância de Peter Parker?", answers: ["Mary Jane", "Gwen Stacy", "Felicia Hardy"], correct: 1 },
        { question: "Quem é o segundo Homem-Aranha no universo Ultimate?", answers: ["Miles Morales", "Ben Reilly", "Miguel O'Hara"], correct: 0 },
        { question: "Qual é o nome do simbionte que se une ao Eddie Brock?", answers: ["Venom", "Carnificina", "Toxin"], correct: 0 },
        { question: "Qual é o nome do jornal onde Peter Parker trabalha?", answers: ["Clarim Diário", "Planeta Diário", "Bugle"], correct: 0 },
        { question: "Quem foi o segundo ator a interpretar o Homem-Aranha nos filmes?", answers: ["Andrew Garfield", "Tobey Maguire", "Tom Holland"], correct: 0 },
        { question: "Em 'Homem-Aranha: Longe de Casa', qual é o nome da tecnologia que Mistério usa para criar ilusões?", answers: ["Drones", "Simbiontes", "Realidade Virtual"], correct: 0 },
        { question: "Quem é o vilão que aparece como mentor de Miles Morales no 'Aranhaverso'?", answers: ["Aaron Davis", "Norman Osborn", "Otto Octavius"], correct: 0 },
        { question: "Em qual quadrinho Peter Parker revela sua identidade secreta durante os eventos da Guerra Civil?", answers: ["Amazing Spider-Man #533", "Ultimate Spider-Man #1", "The Avengers #250"], correct: 0 },
        { question: "Em que ano o Homem-Aranha fez sua estreia nos quadrinhos?", answers: ["1962", "1958", "1971"], correct: 0 },
        { question: "Qual é o nome do filme de animação de 2018 que apresenta múltiplas versões do Homem-Aranha?", answers: ["Homem-Aranha no Aranhaverso", "O Espetacular Homem-Aranha", "Homem-Aranha: De Volta ao Lar"], correct: 0 },
        { question: "Qual é o nome verdadeiro do vilão Lagarto?", answers: ["Curt Connors", "Otto Octavius", "Adrian Toomes"], correct: 0 },
        { question: "Em 'Homem-Aranha: Sem Volta Para Casa', quem ajuda Peter Parker a desfazer o feitiço que deu errado?", answers: ["Doutor Estranho", "Tony Stark", "Nick Fury"], correct: 0 },
        { question: "Quem se torna o Homem-Aranha em 'Spider-Man 2099'?", answers: ["Miguel O'Hara", "Miles Morales", "Ben Reilly"], correct: 0 },
        { question: "Em qual filme o vilão Duende Verde é derrotado pelo Homem-Aranha?", answers: ["Homem-Aranha (2002)", "Homem-Aranha 3", "Homem-Aranha: No Aranhaverso"], correct: 0 }
    ],
    hard: [
        { question: "Em que edição o Homem-Aranha apareceu pela primeira vez?", answers: ["Amazing Fantasy #15", "The Amazing Spider-Man #1", "Avengers #4"], correct: 0 },
        { question: "Qual vilão matou Gwen Stacy?", answers: ["Duende Verde", "Venom", "Doutor Octopus"], correct: 0 },
        { question: "Quem criou o Homem-Aranha?", answers: ["Stan Lee e Steve Ditko", "Jack Kirby", "Bob Kane"], correct: 0 },
        { question: "Em qual arco de histórias o Homem-Aranha revela sua identidade ao mundo?", answers: ["Guerra Civil", "Ultimato", "Homem-Aranha 2099"], correct: 0 },
        { question: "Qual é a identidade secreta do Homem-Aranha 2099?", answers: ["Miguel O'Hara", "Miles Morales", "Ben Reilly"], correct: 0 },
        { question: "Quem é o primeiro vilão a unir forças com outros para formar o Sexteto Sinistro?", answers: ["Doutor Octopus", "Duende Verde", "Electro"], correct: 0 },
        { question: "Qual personagem, além de Peter Parker, já assumiu a identidade do Homem-Aranha no universo 616?", answers: ["Ben Reilly", "Miguel O'Hara", "Miles Morales"], correct: 0 },
        { question: "Qual é o nome do arco de histórias em que Peter Parker faz um pacto com Mephisto para salvar sua tia?", answers: ["One More Day", "The Clone Saga", "Spider-Verse"], correct: 0 },
        { question: "Quem é o cientista responsável por transformar o vilão Escorpião?", answers: ["J. Jonah Jameson", "Curt Connors", "Norman Osborn"], correct: 0 },
        { question: "Em qual quadrinho Ben Reilly se torna o principal Homem-Aranha enquanto Peter Parker se afasta temporariamente?", answers: ["The Amazing Spider-Man #149", "Spider-Man #1", "Spectacular Spider-Man #25"], correct: 0 }
    ]
};

// Função para embaralhar respostas
function shuffleAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
}

let currentLevel = '';
let currentQuestionIndex = 0;
let timer = null;
let timeLimit = 30;

function startGame(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    timeLimit = level === 'easy' ? 30 : level === 'medium' ? 20 : 10;
    
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions[currentLevel].length) {
        showCongrats();
        return;
    }
    
    const currentQuestion = questions[currentLevel][currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    
    const answersList = document.getElementById('answer-buttons');
    answersList.innerHTML = '';

    const shuffledAnswers = shuffleAnswers(currentQuestion.answers.map((answer, index) => ({ answer, index })));

    shuffledAnswers.forEach((item) => {
        const li = document.createElement('li');
        li.innerText = item.answer;
        li.onclick = () => checkAnswer(item.index);
        answersList.appendChild(li);
    });

    startTimer();
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentLevel][currentQuestionIndex].correct;
    if (selectedAnswer === correctAnswer) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        restartQuiz();  // Volta para a tela inicial se errar
    }
}

function startTimer() {
    clearInterval(timer);
    let timeRemaining = timeLimit;
    document.getElementById('timer').innerText = `Tempo: ${timeRemaining}`;
    
    timer = setInterval(() => {
        timeRemaining--;
        document.getElementById('timer').innerText = `Tempo: ${timeRemaining}`;
        
        if (timeRemaining <= 0) {
            clearInterval(timer);
            restartQuiz();  // Volta para a tela inicial se o tempo acabar
        }
    }, 1000);
}

function showCongrats() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('congrats-screen').style.display = 'block';
}

function restartQuiz() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('congrats-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
    currentQuestionIndex = 0;  // Reinicia o índice de perguntas
    clearInterval(timer);  // Para o temporizador
}