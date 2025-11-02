// ギャル語のメッセージリスト
const gyaruMessages = [
  'まじ卍〜！',
  'あげぽよ〜♡',
  'それな〜！',
  'やばたにえん！',
  'ぴえん🥺',
  'エモい〜✨',
  'あざまる水産〜',
  'おけまる〜！',
  'しんどみ〜',
  'よき〜！',
  'ぱおん🐘',
  'てぇてぇ💕',
  'きゅんです♡',
  'ばぶみ〜',
  'あーね！',
  'まじ神〜',
  'ぴえんこえてぱおん',
  'あげみざわ〜',
  'おしゃピク行きたい！',
  'かわちい〜',
  'あざお〜す',
  'おつかれ山です',
];

// ランダムにメッセージを選択して表示
function displayRandomMessage() {
  const messageElement = document.getElementById('gyaru-message');
  const randomIndex = Math.floor(Math.random() * gyaruMessages.length);
  messageElement.textContent = gyaruMessages[randomIndex];
}

// ページ読み込み時に実行
displayRandomMessage();
