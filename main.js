// design 변경
// 밥먹으러가기 클릭 기능 구현

const target = document.querySelector(".large_text");

let texts = [
  "수라상",
  "혼밥 싫어",
  "소금구이덮밥",
  "배고파",
  "육회비빔밥",
  "세종대왕 돈까스",
];

// text 중복 제거
let index = -1;

function nextText() {
  target.textContent = "";
  let temp = Math.floor(Math.random() * texts.length);
  if (temp != index) {
    index = temp;
  } else {
    index = (temp + 1) % texts.length;
  }
  let text = texts[index];
  let letters = text.split("");
  writeText(letters);
}

// 커서 깜빡임 함수
function blink() {
  target.classList.toggle("active");
}

// 글자 쓰기
function writeText(_letters) {
  if (_letters.length > 0) {
    target.textContent += _letters.shift();
    setTimeout(() => writeText(_letters), 100);
  } else {
    setTimeout(() => nextText(), 1000);
  }
}

setInterval(blink, 500);
nextText();
