const resturentMenu = [
  {
    id: 1,
    title: "Chicken Biryani",
    price: 350,
    imageurl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    description: "Zaikaydar basmati chawal aur narm gosht ka behtareen imtizaj.",
    catagory: "lunch"
  },
  {
    id: 2,
    title: "Juicy Beef Burger",
    price: 550,
    imageurl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    description: "Grilled beef patty with melted cheese and fresh veggies.",
    catagory: "breakfast"
  },
  {
    id: 3,
    title: "Pepperoni Pizza",
    price: 1200,
    imageurl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    description: "Cheese-loaded pizza topped with spicy pepperoni slices.",
    catagory: "shakes"
  },
  {
    id: 4,
    title: "Chicken Tikka",
    price: 280,
    imageurl: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80",
    description: "Koylon par paka hua spicy aur chatpata chicken tikka.",
    catagory: "lunch"
  },
  {
    id: 5,
    title: "Club Sandwich",
    price: 400,
    imageurl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    description: "Classic 3-layer sandwich with chicken, egg, and mayo.",
    catagory: "breakfast"
  },
  {
    id: 6,
    title: "Fettuccine Pasta",
    price: 750,
    imageurl: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmV0dHVjY2luZSUyMGFsZnJlZG98ZW58MHx8MHx8fDA%3D",
    description: "Creamy white sauce pasta with grilled chicken and herbs.",
    catagory: "shakes"
  },
  {
    id: 7,
    title: "Crispy French Fries",
    price: 200,
    imageurl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
    description: "Golden crispy potato fries with a pinch of sea salt.",
    catagory: "lunch"
  },
  {
    id: 8,
    title: "Chocolate Brownie",
    price: 250,
    imageurl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    description: "Rich chocolate brownie served with hot fudge sauce."
  },
  {
    id: 9,
    title: "Mango Shake",
    price: 180,
    imageurl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    description: "Fresh mango pulp blended with chilled milk and ice cream.",
    catagory: "breakfast"
  },
  {
    id: 10,
    title: "Iced Coffee",
    price: 300,
    imageurl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    description: "Refreshing cold coffee with a hint of vanilla and cream.",
    catagory: "shakes"
  }
];
const parentdiv = document.querySelector('#foodItems')
menu()

function menu(catagory) {
  const menuHtmlfoo = resturentMenu.filter(function (menu) {
    if (catagory) {
      return menu.catagory == catagory
    } else {
      return true
    }
  })
displayMenu(menuHtmlfoo)
}

const searchInput=document.querySelector('#searchMenu')
searchInput.addEventListener("keyup",function(){
  const searchValue=searchMenu.value.toLowerCase()
  console.log(searchValue);
  const filtersearch=resturentMenu.filter(function(item){
    return item.title.toLowerCase().includes(searchValue)
  })
  displayMenu(filtersearch)
})

function displayMenu(items) {
  const menuHtmlfoo = items.map(function (menu) {
    return ` <div class="foodItem">
      <div id="image">
        <img src="${menu.imageurl}" alt="">
      </div>
      
      <div id="titleDescription">
        <div class="titlePrice">
          <h2>${menu.title}</h2>
          <p>${menu.price}</p>
        </div>
        <p>${menu.description}</p>
      </div>
    </div>`
  })

  parentdiv.innerHTML = menuHtmlfoo.join('')
}