const globalObj = {
    dishName: undefined,
    drinkName: undefined,
    dessertName: undefined,
    dishValue: undefined,
    drinkValue: undefined,
    dessertValue: undefined,
}

function openWhatsApp() {

    const {dishName, drinkName, dessertName} = globalObj;

    const total = calcTotal();
    
    const dishWhatsapp = dishName;
    const drinkWhatsApp = drinkName;
    const dessertWhatsApp = dessertName;
    const totalWhatsApp = `R$ ${total.toFixed(2)}`;

    const msg = `Olá, gostaria de fazer o pedido:%0A- Prato: ${dishWhatsapp}%0A- Bebida: ${drinkWhatsApp}%0A- Sobremesa: ${dessertWhatsApp}%0ATotal: ${totalWhatsApp}`;

    const url = `https://api.whatsapp.com/send?phone=5532998223634&text=${msg}`;
    window.open(url);

}

function cancel() {
    let cancel = document.querySelector(".confirmOrder");
    cancel.style.display = "none";
}

function calcTotal() {
    
    const {dishValue, drinkValue, dessertValue} = globalObj;

    let dishValueNumber = Number(dishValue.replace(",", "."));
    let drinkValueNumber = Number(drinkValue.replace(",", "."));
    let dessertValueNumber = Number(dessertValue.replace(",", "."));

    return dishValueNumber + drinkValueNumber + dessertValueNumber;
}

function closeOrder() {

    const {dishName, drinkName, dessertName, dishValue, drinkValue, dessertValue} = globalObj;

    const boxOrder = document.querySelector(".confirmOrder");
    
    document.querySelector(".dishSelected").innerHTML = dishName;
    document.querySelector(".drinkSelected").innerHTML = drinkName;
    document.querySelector(".dessertSelected").innerHTML = dessertName;
    
    document.querySelector(".dishValueSelected").innerHTML = `R$ ${dishValue}`;
    document.querySelector(".drinkValueSelected").innerHTML = `R$ ${drinkValue}`;
    document.querySelector(".dessertValueSelected").innerHTML = `R$ ${dessertValue}`;
    
    const total = calcTotal();
    
    document.querySelector(".value span").innerHTML = `R$ ${total.toFixed(2)}`;
    
    boxOrder.style.display = "flex";
}

function buttonReleased() {

    const {dishName, drinkName, dessertName} = globalObj;

    if(dishName && drinkName && dessertName){
        const grayButton = document.querySelector(".footer button");
        grayButton.removeAttribute('disabled');
        grayButton.classList.add("selectedButton");
        grayButton.innerHTML = "Fechar pedido";
    }
}

function selectDessert(dessert) {

    globalObj.dessertName = dessert.querySelector("h3").innerText;
    globalObj.dessertValue = dessert.querySelector("span").innerText;

    let previousDessert = document.querySelector(".dessert .selected");

    if(previousDessert !== null) {
        previousDessert.classList.remove("selected");
    }

    dessert.classList.add("selected");

    buttonReleased();
}

function selectDrink(drink) {

    globalObj.drinkName = drink.querySelector("h3").innerText;
    globalObj.drinkValue = drink.querySelector("span").innerText;

    let previousDrink = document.querySelector(".drinks .selected");

    if(previousDrink !== null) {
        previousDrink.classList.remove("selected");
    }

    drink.classList.add("selected");

    buttonReleased();
}

function selectDish(dish) {

    globalObj.dishName = dish.querySelector("h3").innerText;
    globalObj.dishValue = dish.querySelector("span").innerText;

    let previousDish = document.querySelector(".dishes .selected");

    if(previousDish !== null) {
        previousDish.classList.remove("selected");
    }
    
    dish.classList.add("selected");
    buttonReleased();
}