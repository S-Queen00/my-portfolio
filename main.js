//要素の取得
const myName = document.getElementById("Name");
const Age = document.getElementById("Age");
const University = document.getElementById("University");
const Hobbby = document.getElementById("Hobby");

//好きな映画Quiz
//アベンジャーズ、グッドウィルハンティング、ガタカのうち私が一番好きな映画は何でしょう？

const avengers = document.getElementById("avengers");
const goodWill = document.getElementById("goodWill");
const gattaca = document.getElementById("Gattaca");
const answer = document.getElementById("answer");
const movieContents = document.getElementById("movieContensts");

//music カーソル当てたらテキストと好きなアーティスト表示？
//Bowie, Queen, Harry あたり

//drawing カーソル当てたらテキストとIGのページに移動？させたい

//quiz
avengers.onclick = function () {
  answer.textContent = "Close!";
};
goodWill.onclick = function () {
  answer.textContent = "That's right!";
};
gattaca.onclick = function () {
  answer.textContent = "Close!";
};
//カーソル当てたら映画の詳細をanswerの下に表示？
