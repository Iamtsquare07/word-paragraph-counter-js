const textInput = document.getElementById("input-text");
document.getElementById("check").addEventListener("click", () => {
  const text = textInput.value;
  countWords(text);
});

function countWords(text) {
  text = text.trim();
  const wordsArray = text.split(/\s+/);
  const wordCount =
    wordsArray.length === 1 && wordsArray[0] === "" ? 0 : wordsArray.length;
  const paragraphsArray = text.split(/\n\n|\r\n\r\n/);
  const paragraphCount = paragraphsArray.length;

  console.log(wordCount);
  if (wordCount > 0) {
    if (wordCount === 1) {
      if (text.length === 1) {
        document.getElementById(
          "result"
        ).textContent = `${text.length} character, ${wordCount} word, ${paragraphCount} paragraph`;
      } else {
        document.getElementById(
          "result"
        ).textContent = `${text.length} characters, ${wordCount} word, ${paragraphCount} paragraph`;
      }
    } else {
      if (paragraphCount === 1) {
        document.getElementById(
          "result"
        ).textContent = `${text.length} characters, ${wordCount} words, ${paragraphCount} paragraph`;
      } else {
        document.getElementById(
          "result"
        ).textContent = `${text.length} characters, ${wordCount} words, ${paragraphCount} paragraphs`;
      }
    }
  } else {
    document.getElementById("result").textContent = "";
    alert("Paste taste in the text field below.");
  }
}
