//要素の取得
const myName = document.getElementById("Name");
const Age = document.getElementById("Age");
const University = document.getElementById("University");
const Hobbby = document.getElementById("Hobby");

//Nameをクリックしたら、下に名前を表示させたい
//Name.onclick = function () {
//Nameを押したときのイベント
//const nameText = document.createElement("div"); //nameMineというdivを作る
//nameText.className = "nameText"; //nameMineというクラス
//nameText.textContent = "Saki Takeda"; //Saki Takedaと表示させる。
//};

//jsからhtmlに表示されない！！
//myAnswer.append(nameText);

//好きな映画Quiz
//アベンジャーズ、グッドウィルハンティング、ガタカのうち私が一番好きな映画は何でしょう？

const avengers = document.getElementById("avengers");
const goodWill = document.getElementById("goodWill");
const gattaca = document.getElementById("Gattaca");
const answer = document.getElementById("answer");
const movieContents = document.getElementById("movieContensts");

avengers.onclick = function () {
  answer.textContent = "Close!";
};
goodWill.onclick = function () {
  answer.textContent = "That's right!";
};
gattaca.onclick = function () {
  answer.textContent = "Close!";
};
//映画の詳細をanswerの下に表示したいな
