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

let total;

function finalizeOrder() {
    alert("Até aqui está tudo bem")
}

function cancel() {
    let cancel = document.querySelector(".confirmOrder");
    cancel.style.display = "none";
}

function calcTotal() {

    dishValueNumber = Number(dishValue.replace(",", "."));
    drinkValueNumber = Number(drinkValue.replace(",", "."));
    dessertValueNumber = Number(dessertValue.replace(",", "."));

    total = (dishValueNumber + drinkValueNumber + dessertValueNumber);

    return total;
}

function closeOrder() {
    const boxOrder = document.querySelector(".confirmOrder");
    document.querySelector(".dishSelected").innerHTML = dishName;
    document.querySelector(".drinkSelected").innerHTML = drinkName;
    document.querySelector(".dessertSelected").innerHTML = dessertName;

    document.querySelector(".dishValueSelected").innerHTML = `R$ ${dishValue}`;
    document.querySelector(".drinkValueSelected").innerHTML = `R$ ${drinkValue}`;
    document.querySelector(".dessertValueSelected").innerHTML = `R$ ${dessertValue}`;

    calcTotal();

    document.querySelector(".value span").innerHTML = `R$ ${total.toFixed(2)}`;

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

    previousDish = document.querySelector(".dishes .selected");

    if(previousDish !== null) {
        previousDish.classList.remove("selected");
    }
    
    dish.classList.add("selected");
    dishChecked = true;

    buttonReleased()
}