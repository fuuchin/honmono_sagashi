'use strict';

const body = document.getElementsByTagName('body')[0];

function gameStart () {
  const selectForm = document.getElementsByTagName('select')[0];
  const index = selectForm.selectedIndex;
  const gameName = selectForm.options[index].value; // セレクトボックスで選ばれた人物名

  let btnText1 = null; // 正解の人物名
  let btnText2 = null; // ダミーの配列

  switch(gameName) {
    case `小枝先生`:
      btnText1 = `小枝先生`;
      btnText2 = [`小技先生`, `子枝先生`, `大技先生`, `小投先生`, `イケメン`];
      break;

    case `折原先生`:
      btnText1 = `折原先生`;
      btnText2 = [`折源先生`, `祈原先生`, `斫原先生`, `斤原先生`, `抗原先生`, `イケメン`];
      break;

    case `らべねこ先生`:
      btnText1 = `らべねこ先生`;
      btnText2 = [`らべいぬ先生`, `らいおん先生`, `らへねこ先生`, `うべねこ先生`, `らべれこ先生`, `らべわこ先生`];
      break;

    case `吉村先生`:
      btnText1 = `吉村先生`;
      btnText2 = [`古村先生`, `吉材先生`, `吉林先生`, `吉朽先生`, `吉朾先生`];
      break;


    case `ふーちん`:
      btnText1 = `ふーちん`;
      btnText2 = [`ぷーちん`, `ふちきん`, `ふっちん`, `ふ＝ちん`, `ふ～ちん`, `ふーさん`];
      break;

    case `satsukizzz`:
      btnText1 = `satsukizzz`;
      btnText2 = [`salsukizzz`, `satsukizz`, `satsukizzzz`, `satzukizzz`, `satsuklzzz`, `setsukizzz`];
      break;

    case `kenton116`:
      btnText1 = `kenton116`;
      btnText2 = [`kentonll6`, `kanton116`, `kenton110`, `Kenton116`, `kenken116`, `ken&dagger;on116`];
      break;

    case `BlueZhiaar`:
      btnText1 = `BlueZhiaar`;
      btnText2 = [`BlaeZhiaar`, `BlueZh&iexcl;aar`, `PlueZhiaar`, `DlueZhiaar`, `BlueZniaar`, `BlueZhiaan`];
      break;

    case `○○ックマ`:
      btnText1 = `○○ックマ`;
      btnText2 = [`&star;&star;ックマ`, `&xutri;&xutri;ックマ`, `&boxbox;&boxbox;ックマ`, `&blk12;&blk12;ックマ`, `&block;&block;ックマ`, `&phone;&phone;ックマ`, `&yen;&yen;ックマ`, `○○ッタマ`, `wwックマ`];
      break;

    case `野田クリスタル`:
      btnText1 = `野田クリスタル`;
      btnText2 = [`野田クリステル`, `野口クリスタル`, `野田クりスタル`, `野田クリスナル`, `野田クリフタル`, `野田クリスタレ`, `野田コリスタル`];
      break;

    case `チュートリアル`:
      btnText1 = `ホンモノ`;
      btnText2 = [`ニセモノ`, `クセモノ`, `ナマモノ`];
      break;
  }

  let btnHtml = [];
  // ダミーの文字列が入った配列からランダムに出す
  for(let i = 0; i < 154; i++) {
    let btnTag = `<button onmousedown="nise()">${btnText2[Math.floor( Math.random() * btnText2.length)]}</button>`;
    btnHtml.push(btnTag);
  }

  // ダミーいっぱいの配列のうち、一つだけ本物をランダムに選んで入れる
  const num = Math.floor( Math.random() * btnHtml.length);
  btnHtml[num] = `<button onmousedown="honmono()" id="honmono">${btnText1}</button>`;
  body.innerHTML = btnHtml.join(' ');

  // スタートボタンを押して間もないころに、
  // チュートリアルを表示
  window.setTimeout(function(){
    if(btnText1 === `ホンモノ`) {
      alert(`ニセモノやクセモノ、ナマモノなどが書かれたボタンがたくさんあるね！`);
      alert(`その中でも、「ホンモノ」と書かれたボタンが1つだけあるんだけど、分かったかな？`);
      alert(`ほら、あそこ！`);
      alert(`分かったらそのボタンをクリックしてね！\n「ホンモノ」以外のボタンをクリックしたらダメだよ！！`);
      alert(`制限時間は2分！！`);
      alert(`それではスタート！！`);
    }
  }, 50);

  // スタートボタンを押してから何秒経ったかを計ることで、
  // 残り時間をアラートとして警告する
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
    alert('時間切れ～～！！\nまた遊びに来てね！(^^)');
    gameFinish();
  }, 120000);
} // gameStart関数の終わり

function gameFinish() {
  alert(`あっ！そうだ！`);
  alert(`プログラミング授業の予習をしよう！\nN予備校のページにジャンプするよ！`);
  location.href = "https://www.nnn.ed.nico";
}

function honmono () {
  alert(`!(^^)!ピンポーン!(^^)!\nまた遊びに来てね！(^^)`);
  gameFinish();
}

let failNum = 3; // 失敗した回数を数えるための変数 失敗は3回まで

function nise () {
  alert(`ニセモノだよ！`);
  failNum--; // ニセモノをクリックするたびにあと何回失敗できるかの数を減らす

  switch(failNum) {
    case 0: // failNum変数が0に達するということは、3回ニセモノをクリックしたので、ゲームオーバー
      alert(`終了ーー！残念！\nまた遊びに来てね～(^^)`);
      gameFinish();
      break;

    default:
      alert(`チャンスはあと${failNum}回だよ！！`);
      break;
  }
}

/** 
 * ほとんど1日で作りました。もう少し時間があれば色々変えられたけど...
*/
