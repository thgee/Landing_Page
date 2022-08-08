const target = document.querySelector(".large_text");

let texts = [
  "수라상",
  "혼밥 싫어",
  "배고파배고파배고파배고파",
  "소금구이 덮밥",
  "육회 비빔밥",
  "세종대왕 돈까스",
  "새우튀김알밥",
  "우삼겹 된장찌개",
  "불닭 치즈 도리아",
  "웨지감자 오믈렛",
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
