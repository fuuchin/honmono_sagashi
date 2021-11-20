'use strict';

const game = prompt(`
ホンモノ探しゲーム！！88888888888888888888\n
正しい人の名前を探すゲームで、ダミーがいっぱいあるんだ！！\n
どの人がいいかな？次のリストから入力してね！！\n
キャンセルを押したり、リスト外のものが入力されたときは、自動的に小枝先生になるよ！\n
・小枝先生\n
・折原先生\n
・らべねこ先生\n
・吉村先生\n
・ふーちん\n
・satsukizzz\n
推奨環境：PC全画面表示`);
let btnText1 = null;
let btnText2 = null;

switch(game) {
  case `小枝先生`:
    btnText1 = `小枝先生`;
    btnText2 = [`小技先生`, `子枝先生`, `大技先生`, `小投先生`];
    break;

  case `折原先生`:
    btnText1 = `折原先生`;
    btnText2 = [`折源先生`, `祈原先生`, `斫原先生`, `斤原先生`, `抗原先生`];
    break;

  case `らべねこ先生`:
    btnText1 = `らべねこ先生`;
    btnText2 = [`らべいぬ先生`, `らいおん先生`, `らへねこ先生`, `うべねこ先生`, `らべれこ先生`, `らべわこ先生`];
    break;

  case `吉村先生`:
    btnText1 = `吉村先生`;
    btnText2 = [`吉村先生`, `古村先生`, `吉材先生`, `吉林先生`, `吉朽先生`, `吉朾先生`];
    break;


  case `ふーちん`:
    btnText1 = `ふーちん`;
    btnText2 = [`ぷーちん`, `ふちきん`, `ふっちん`, `ふ＝ちん`, `ふ～ちん`, `ふーさん`];
    break;

    case `satsukizzz`:
      btnText1 = `satsukizzz`;
      btnText2 = [`salsukizzz`, `satsukizz`, `satsukizzzz`, `satzukizzz`, `satsuklzzz`, `setsukizzz`];
      break;

  default:
    btnText1 = `小枝先生`;
    btnText2 = [`小技先生`, `子枝先生`, `大技先生`, `小投先生`];
    break;
}


let btnHtml = [];
for(let i = 0; i < 154; i++) {
  let btnTag = `<button onmousedown="nise()">${btnText2[Math.floor( Math.random() * btnText2.length)]}</button>`;
  btnHtml.push(btnTag);
}

const body = document.getElementsByTagName('body')[0];

function gameStart () {
  const num = Math.floor( Math.random() * btnHtml.length);
  btnHtml[num] = `<button onmousedown="honmono()">${btnText1}</button>`;
  body.innerHTML = btnHtml.join(' ');
}
gameStart();

function gameFinish() {
  open("https://www.nnn.ed.nico", "_blank");
  location.href = "https://slack.com/intl/ja-jp/";
}

function honmono () {
  alert(`!(^^)!ピンポーン!(^^)!\nまた遊びに来てね！(^^)\nあっ！そうだ！プログラミング授業の予習をしよう！`);
  gameFinish();
}

let failNum = 0;

function nise () {
  alert(`ニセモノだよ！(間違いは3回までだよ！)`);
  failNum++;
  alert(`もう、${failNum}回失敗したよ！`);
  console.log(`${failNum}回失敗したよ！`);
  if(failNum >= 3) {
    alert(`終了ーー！残念！\nまた遊びに来てね～(^^)\nあっ！そうだ！プログラミング授業の予習をしよう！`);
    gameFinish();
  }
}
