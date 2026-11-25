// Menu de navegação para dispositivos móveis.
const menu = document.querySelector('.menu');
const links = document.querySelector('#links');
menu.addEventListener('click', () => {
  const aberto = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(aberto));
});
links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  });
});
// Rolador de dados: gera um número inteiro de 1 até o número de faces.
const tipo = document.querySelector('#tipo-dado');
const resultado = document.querySelector('#resultado');
const mensagem = document.querySelector('#mensagem');
const historico = document.querySelector('#historico');
const dado = document.querySelector('.die');
const ultimas = [];
document.querySelector('#rolar').addEventListener('click', () => {
  const faces = Number(tipo.value);
  const valor = Math.floor(Math.random() * faces) + 1;
  resultado.textContent = valor;
  mensagem.textContent = `Você tirou ${valor} no D${faces}!`;
  ultimas.unshift(`D${faces}: ${valor}`);
  if (ultimas.length > 5) ultimas.pop();
  historico.textContent = `Últimas rolagens: ${ultimas.join(' · ')}`;
  dado.classList.remove('rolled');
  void dado.offsetWidth;
  dado.classList.add('rolled');
});
