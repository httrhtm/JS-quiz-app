//配列を作る
const quiz = [
  {
    question: 'ゲーム市場最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン', 
      'プレステ2', 
      'ニンテンドースイッチ', 
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  },{
    question: 'ゲーム市場最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン', 
      'プレステ2', 
      'ニンテンドースイッチ', 
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'

  },{
    question: 'ゲーム市場最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン', 
      'プレステ2', 
      'ニンテンドースイッチ', 
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'

  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


//htmlのオブジェクトを取ってくる場合は$をつける
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//関数で囲う
const setupQuiz = () => {

  //id = js-questionの中身にquestionを入れる
  document.getElementById('js-question').textContent = quiz[quizIndex];

  let buttonIndex = 0;
  while(buttonIndex < buttonLength){ //buttonの長さ分繰り返すよ
    //buttonの中身=上で定義したanswersだよ
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];

    buttonIndex++; //回ったらindexに1足すよ
  }
};

setupQuiz(); //関数を呼んであげる

const clickHandler = (e) => {
  if(quiz[quizIndex].corect ===  e.target.textContent) {
    window.alert('正解');
    score++;
  }else {
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだある場合
    setupQuiz();
  } else {
    //問題数がない場合
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => { //e: イベントのオブジェクト
    clickHandler(); //関数を呼び出し
  });

  handlerIndex ++ ;
}
