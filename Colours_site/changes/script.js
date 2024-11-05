const paragraph = document.getElementById('myParagraph');
const texts = ['Текст 1', 'Текст 2', 'Текст 3'];

paragraph.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * texts.length);
  paragraph.textContent = texts[randomIndex];
});