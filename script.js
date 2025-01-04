const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;
let namePizza = document.querySelector('.PizzaName')
let valuePizza = document.querySelector('.value')
console.log(items)


console.log(items)
controls.forEach(control =>{
    control.addEventListener('click',()=>{
        const isLeft = control.classList.contains('buttonLeft')
        if(isLeft){
            currentItem -= 1;
        }else{
            currentItem += 1;
        }
        if(currentItem >= maxItems){
            currentItem = 0
        }
        if(currentItem < 0){
           currentItem = maxItems - 1;
          
        }
        if(items === 0){
            namePizza.innerHTML = "Calabresa";
           }else{
           
           }
        
        items.forEach(item => item.classList.remove('current-item'))

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"

        });
    });
});