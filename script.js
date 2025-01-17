const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;
let namePizza = document.querySelector('.PizzaName')
let valuePizza = document.querySelector('.value')
console.log(items)
var pizzaIndex = 0
//
let menu = document.getElementById("menu-Mobile")
let btnMenu = document.getElementById("btn-mobile")

document.querySelector('.buttonBurger').addEventListener('click', () => {
	document.querySelector('.buttonBurger').classList.toggle('close');
})
//



controls.forEach(control =>{
    control.addEventListener('click',(indice)=>{
        const isLeft = control.classList.contains('buttonLeft')
        if(isLeft){
            currentItem -= 1;
        }else{
            currentItem += 1;
        }
        if(currentItem >= maxItems){
            currentItem = 0
            namePizza.innerHTML = "Calabresa"
        }
        if(currentItem < 0){
           currentItem = maxItems - 1;
           namePizza.innerHTML = "Frango com catupiry"
          
        }
       
 
       
        
        items.forEach(item => item.classList.remove('current-item'))

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"

        });
    });
});