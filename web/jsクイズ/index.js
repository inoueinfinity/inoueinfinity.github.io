const quiz = [
    {
        question:'正解はどれでしょう？',
        answers: [
            '１＋１＝５',
            '２＋２＝３',
            '３－３＝０',
            '４ー４＝１'
        ],
        correct: '３－３＝０'
    },
    {
        question:'ソニーのゲーム機はどれ？',
        answers: [
            'ファミコン',
            'プレステ',
            'セガサターン',
            'ゲームボーイ'
        ],
        correct: 'プレステ'
    },
    {
        question:'任天堂のゲームソフトでゼルダの〜といえば何？',
        answers: [
            '旅行',
            '建設',
            '勇者',
            '伝説'
        ],
        correct: '伝説'
    },
    {
        question:'任天堂の代表作で二人の兄弟がピーチ姫を助けるゲームといえば何？',
        answers: [
            'スーパードンキーコング２',
            'アイスクライマー',
            'スーパーマリオブラザーズ２',
            '星のカービィ'
        ],
        correct: 'スーパーマリオブラザーズ２'
    },
    {
        question:'【おまけ】僕の名前は井上〜弘でしょう？',
        answers: [
            '高',
            '崇',
            '嵩',
            '貴'
        ],
        correct: '嵩'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;



const $button = document.getElementsByTagName('button');
const buttonLength = $button.length

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score +'/' + quizLength + 'です！');
    }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });    
    handlerIndex++;
}
