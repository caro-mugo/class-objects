//question 1
class Kiosk{
    constructor(fruit,quantity){
       this.fruit=fruit
       this.quantity=quantity
       this.fruitpriceList={"Mango":30,"Apple":40,"Orange":50};
       this.getTotalCost=function(){
        return `${quantity} ${fruit} for KES ${quantity*this.price}`
       }
    }
}
Kiosk.prototype.price= 30;
var fruit = new Kiosk("watermelon",2);
console.log(fruit.getTotalCost());


// class Kiosk{
//     constructor(fruit,quantity){
//        this.fruit=fruit
//        this.quantity=quantity
//        this.fruitpriceList={"Mango":30,"Apple":40,"Orange":50};
//        this.getTotalCost=function(){
//             return `${quantity} ${fruit} for KES ${quantity*this.fruitpriceList.Mango}`
//        }
//     }
// }
//     var fruit = new Kiosk("watermelon",2);
//     console.log(fruit.getTotalCost());
