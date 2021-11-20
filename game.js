'use strict';

const body = document.getElementsByTagName('body')[0];

body.innerHTML = `
<h1>ホンモノ探しゲーム！！88888888888888888888</h1>
<p>推奨環境：PC全画面表示</p>
<p>
  正しい人の名前を探すゲームで、ダミーがいっぱいあるんだ！！<br>
  制限時間は2分！！<br>
  どの人がいいかな？次のリストから入力してね！！<br>
  キャンセルを押したり、リスト外のものが入力されたときは、自動的に小枝先生になるよ！<br>
</p>

<select>
    <option value="小枝先生">小枝先生</option>
    <option value="折原先生">折原先生</option>
    <option value="らべねこ先生">らべねこ先生</option>
    <option value="吉村先生">吉村先生</option>
    <option value="ふーちん">ふーちん</option>
    <option value="satsukizzz">satsukizzz</option>
    <option value="○○ックマ">○○ックマ</option>
</select>

<button onclick="gameStart()"/>スタート</button>
`
function gameStart () {

const selectForm = document.getElementsByTagName('select')[0];

const index = selectForm.selectedIndex;

const gameName = selectForm.options[index].value;

let btnText1 = null;
let btnText2 = null;

switch(gameName) {
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

  case `○○ックマ`:
    btnText1 = `○○ックマ`;
    btnText2 = [`&star;&star;ックマ`, `&xutri;&xutri;ックマ`, `&boxbox;&boxbox;ックマ`, `&blk12;&blk12;ックマ`, `&block;&block;ックマ`, `&phone;&phone;ックマ`, `&yen;&yen;ックマ`, `○○ッタマ`, `wwックマ`];
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


  const num = Math.floor( Math.random() * btnHtml.length);
  btnHtml[num] = `<button onmousedown="honmono()" id="honmono">${btnText1}</button>`;
  body.innerHTML = btnHtml.join(' ');
}

const seikai = document.getElementById('honmono');

function gameFinish() {
  seikai.style.border = '5px solid #00f'
  window.setTimeout(function(){
    location.href = "https://www.nnn.ed.nico";
  }, 5000);
}

window.setTimeout(function(){
  alert('あと1分～');
}, 60000);

window.setTimeout(function(){
  alert('あと30秒！');
}, 90000);

window.setTimeout(function(){
  body.style.background = '#f00';
  alert('あと10秒！！');
}, 110000);

window.setTimeout(function(){
  alert('時間切れ～～！！\nまた遊びに来てね！(^^)\nあっ！そうだ！プログラミング授業の予習をしよう！');
  gameFinish();
}, 120000);



function honmono () {
  alert(`!(^^)!ピンポーン!(^^)!\nまた遊びに来てね！(^^)\nあっ！そうだ！プログラミング授業の予習をしよう！`);
  gameFinish();
}

let failNum = 0;

function nise () {
  alert(`ニセモノだよ！(間違いは3回までだよ！)`);
  failNum++;
  alert(`チャンスはあと${3 - failNum}回だよ！！`);
  console.log(`${failNum}回失敗したよ！`);
  if(failNum >= 3) {
    alert(`終了ーー！残念！\nまた遊びに来てね～(^^)\nあっ！そうだ！プログラミング授業の予習をしよう！`);
    gameFinish();
  }
}

// たった1日で作りました。
