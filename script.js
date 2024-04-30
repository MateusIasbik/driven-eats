let dishChecked = false;
let drinkChecked = false;
let dessertChecked = false;

function closeOrder() {
    alert("botão ativado");
}

function buttonReleased(){
    if(dishChecked === true && drinkChecked === true && dessertChecked === true){
        const grayButton = document.querySelector(".footer button");
        console.log(grayButton);
        grayButton.removeAttribute('disabled');
        grayButton.innerHTML = "Fechar pedido"
        grayButton.classList.add("selectedButton");
        console.log(grayButton);
    }
}

function selectDessert(dessert) {
    previousDessert = document.querySelector(".dessert .selected");

    if(previousDessert !== null) {
        previousDessert.classList.remove("selected");
    }

    dessert.classList.add("selected");
    dessertChecked = true;

    buttonReleased();
}

function selectDrink(drink) {
    previousDrink = document.querySelector(".drinks .selected");

    if(previousDrink !== null) {
        previousDrink.classList.remove("selected");
    }

    drink.classList.add("selected");
    drinkChecked = true;

    buttonReleased()
}

function selectDish(dish) {
    previousDish = document.querySelector(".dishes .selected");

    if(previousDish !== null) {
        previousDish.classList.remove("selected");
    }
    
    dish.classList.add("selected");
    dishChecked = true;

    buttonReleased()
}