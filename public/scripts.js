const currentPage = location.pathname //pathname diz o nome do lugar que está
const menuItens = document.querySelectorAll("header .links a")

for (item of menuItens){
  if(currentPage.includes(item.getAttribute("href"))){
    item.classList.add("active")
  }
}