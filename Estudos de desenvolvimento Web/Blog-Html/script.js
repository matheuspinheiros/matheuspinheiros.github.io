
const body = document.querySelector("body") //body
const menu = [document.querySelector("#icon-menu"),document.querySelector("#close-menu")] // Menu Responsivo
const darkmode_btn = document.querySelector("#darkmode-container") // Modo Escuro
const searchForm = document.getElementById('search-form'); //Form para pesquisa
const searchInput = document.getElementById('search'); //input para pesquisa  
const posts = document.querySelectorAll('.post'); // Seleciona todos os posts
const categoryLinks = document.querySelectorAll('#categories a'); // Categorias, aplicando rolagem suave


function addDarkmode() {
  body.classList.toggle("dark")
}

// carrega tema dark

function loadTheme() {
  const darkmode = localStorage.getItem("dark")
  if (darkmode)
    addDarkmode()
}
loadTheme()

darkmode_btn.addEventListener("click", () => {
  addDarkmode()
  // salva o remove tema dark
  localStorage.removeItem("dark")
  if (body.classList.contains("dark"))
    localStorage.setItem("dark", 1)
})

// adiciona ou sai do menu

menu.map(i => {
  i.addEventListener("click", () => {
    body.classList.toggle("overflow")
    document.querySelector("#navbar-inner").classList.toggle("show")
  })
})

// evento de pesquisa
searchForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Impede o comportamento padrão de envio do formulário

  const searchTerm = searchInput.value.toLowerCase(); // converte para achar o valor em letras minusculas
  let found = false; // Variável para verificar se a música foi encontrada

  posts.forEach(post => {
    const title = post.querySelector('.title').textContent.toLowerCase(); // pega o titulo do Post

    // verifica se o termo de busca está contido no título
    if (title.includes(searchTerm)) {
      post.scrollIntoView({ behavior: 'smooth' }); // Rola até o post da música
      found = true;
    } 
  });
  if (!found) {
    alert('Nenhuma música encontrada com esse nome.');
  }
});

// Ao clicar na categoria leva suave a categoria
categoryLinks.forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault(); // Impede o comportamento padrão do link

      // Obtém o ID da seção de destino
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // Rola suavemente até a seção de destino
      targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});
