const startButton = document.querySelector('#start');

startButton.addEventListener('click', () => {
  const section = document.querySelector('#challenge');
  section.scrollIntoView({ behavior: 'smooth' });
});
