# Portfólio pessoal — Arthur Camargo Pinheiro
Projeto Final A1. Site estático feito com HTML, CSS e JavaScript, sem bibliotecas externas.

## Estrutura
- `index.html`: conteúdo e estrutura da página.
- `css/style.css`: aparência, cores, espaçamentos e responsividade.
- `js/script.js`: menu mobile, rolagem de dados e histórico.
- `imagens/`: ícones vetoriais e foto pessoal.

## Abrir no computador
Extraia o ZIP e abra `index.html` no navegador. Mantenha todas as pastas juntas.

## Foto pessoal
A foto já está incluída em `imagens/foto-perfil.jpg`. O CSS ajusta o enquadramento.

## Publicar no GitHub Pages
1. Acesse https://github.com/new e crie um repositório público chamado `portfolio`.
2. Escolha Add file > Upload files e envie os arquivos e pastas extraídos, incluindo o `index.html` na raiz (não envie só o ZIP). Confirme o commit.
3. No repositório, abra Settings > Pages.
4. Em Build and deployment, selecione Deploy from a branch. Escolha `main`, `/ (root)` e Save.
5. Aguarde a publicação e abra o endereço informado em Settings > Pages. Geralmente será `https://manjirosano05.github.io/portfolio/`.

## Como explicar o código
O HTML define seções, títulos, textos, navegação e controles. O CSS utiliza Grid, Flexbox e media queries para ajustar o layout a telas diferentes. O JavaScript usa eventos de clique para abrir o menu e calcular um número aleatório com `Math.floor(Math.random() * faces) + 1`. O histórico guarda até cinco resultados na sessão atual.

A publicação ainda precisa ser feita na conta do aluno. A foto pessoal já está incluída.
