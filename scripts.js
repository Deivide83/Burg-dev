const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapALL = document.querySelector(".map-all");
const totalProducts = document.querySelector(".total-soma");
const filterAll= document.querySelector(".filter-all")


function formatCurrency(value) {
  const newvalue = value.toLocaleString("pt-br",{
   style : "currency",
   currency: "BRL",
  })
   return newvalue
}



function showAll(productsArray) {
  let myLi = "";
  productsArray.forEach((product) => {
    myLi += `
      
        <li>
          <img src=${product.src} >
          <p>${product.name}</p>
          <p class="item-price">R$ ${formatCurrency (product.price)}</p>
        </li>
    `;
  });

  list.innerHTML = myLi;
}

function mapAllItems() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));

  showAll(newPrices);
}

function totalSoma() {
  const somaAll = menuOptions.reduce((acc, product) => acc + product.price, 0);
  
list.innerHTML = `<li>

   <p> O valor Total do itens é R$: ${formatCurrency(somaAll)}  </p>
   </li>
`

}

function filterItems() {
  const filterVegan = menuOptions.filter((item)=> item.vegan)
  

  showAll(filterVegan)
}



buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapALL.addEventListener("click", mapAllItems);
totalProducts.addEventListener("click", totalSoma);

