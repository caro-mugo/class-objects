//question 2
let kioskFruit=[
    {
        name:"Mango",
        price:30.00,
        quantity:2,

    }
]
function totalCost(name,quantity){
    let y=kioskFruit.find(item=>item.name===name)
    console.log(`${quantity} ${name} for KES ${y.price*quantity}`);
}
totalCost("Mango",2)
