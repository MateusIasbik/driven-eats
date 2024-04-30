let dishChecked = false;
let drinkChecked = false;
let dessertChecked = false;

let dishName = "";
let drinkName = "";
let dessertName = "";

let dishValue;
let drinkhValue;
let dessertValue;

let dishValueNumber;
let drinkValueNumber;
let dessertValueNumber;

function closeOrder() {
    const boxOrder = document.querySelector(".confirmOrder");
    document.querySelector(".dishSelected").innerHTML = dishName;
    document.querySelector(".drinkSelected").innerHTML = drinkName;
    document.querySelector(".dessertSelected").innerHTML = dessertName;

    document.querySelector(".dishValueSelected").innerHTML = dishValue;
    document.querySelector(".drinkValueSelected").innerHTML = drinkValue;
    document.querySelector(".dessertValueSelected").innerHTML = dessertValue;


    boxOrder.style.display = "flex";

}

function buttonReleased(){
    if(dishChecked === true && drinkChecked === true && dessertChecked === true){
        const grayButton = document.querySelector(".footer button");
        grayButton.removeAttribute('disabled');
        grayButton.innerHTML = "Fechar pedido"
        grayButton.classList.add("selectedButton");
    }
}

function selectDessert(dessert) {
    dessertName = dessert.querySelector("h3").innerText;
    dessertValue = dessert.querySelector("span").innerText;
    dessertValueNumber = Number(dessertValue.replace(",", "."));

    previousDessert = document.querySelector(".dessert .selected");

    if(previousDessert !== null) {
        previousDessert.classList.remove("selected");
    }

    dessert.classList.add("selected");
    dessertChecked = true;

    buttonReleased();
}

function selectDrink(drink) {
    drinkName = drink.querySelector("h3").innerText;
    drinkValue = drink.querySelector("span").innerText;
    drinkValueNumber = Number(drinkValue.replace(",", "."));

    previousDrink = document.querySelector(".drinks .selected");

    if(previousDrink !== null) {
        previousDrink.classList.remove("selected");
    }

    drink.classList.add("selected");
    drinkChecked = true;

    buttonReleased()
}

function selectDish(dish) {
    dishName = dish.querySelector("h3").innerText;
    dishValue = dish.querySelector("span").innerText;
    dishValueNumber = Number(dishValue.replace(",", "."));
    console.log(dishValue);

    previousDish = document.querySelector(".dishes .selected");

    if(previousDish !== null) {
        previousDish.classList.remove("selected");
    }
    
    dish.classList.add("selected");
    dishChecked = true;

    buttonReleased()
    
}