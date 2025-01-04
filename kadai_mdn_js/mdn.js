function formatJapaneseDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月は0始まりのため+1
  const day = date.getDate();

  return `${year}年${month}月${day}日`;
}

// 日付を生成（例として現在の日付）
const today = new Date();
console.log(formatJapaneseDate(today));

