const inputText = document.getElementById("inputText");
const fromLanguage = document.getElementById("fromLanguage");
const toLanguage = document.getElementById("toLanguage");
const translateButton = document.getElementById("translateButton");
const outputText = document.getElementById("outputText");
const copyButton = document.getElementById("copyButton");
const clearButton = document.getElementById("clearButton");

translateButton.addEventListener("click", function () {
  const text = inputText.value;

  if (text === "") {
    outputText.textContent = "Please enter some text.";
    return;
  }

  outputText.textContent = "This is where the AI translation will appear.";
});

copyButton.addEventListener("click", function () {
  const text = outputText.textContent;

  navigator.clipboard.writeText(text);
});

clearButton.addEventListener("click", function () {
  inputText.value = "";
  outputText.textContent = "Translation will appear here.";
});
