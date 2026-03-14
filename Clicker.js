let num = 0; //מספר הלחיצות הנוכני
let val = 1; //ערך של כל לחיצה
let upgrades  = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100]
let price = [5,10,15,20,40,60,80,100,200,300,400,500,690,700,800,900,1000]
let index = 0;

document.getElementById("numDisplay").innerText = "in the bank: "+num;
document.getElementById("valDisplay").innerText = "for each click: "+val;
document.getElementById("priceDisplay").innerText = "for the next upgrade: "+price[index];

document.getElementById("click").innerText = "click"
document.getElementById("upgrade").innerText = "upgrade"


document.getElementById("click").onclick = function(){
    num += val;
    document.getElementById("numDisplay").innerText = "in the bank: "+num;
    return;
}

document.getElementById("upgrade").onclick = function(){
    if(index < price.length && num >= price[index]){
         num -= price[index];
        val = upgrades[index];
        index++;
    }
    document.getElementById("numDisplay").innerText = "in the bank: "+num;
    document.getElementById("valDisplay").innerText = "for each click: "+val;
    if(index < price.length){
        document.getElementById("priceDisplay").innerText = "for the next upgrade: "+price[index];
    } else {
        document.getElementById("priceDisplay").innerText = "MAX";
    }
}