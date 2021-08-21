// ram cost
const ram8Gb = document.getElementById("eight-gb-ram");
const ram16Gb = document.getElementById("sixteen-gb-ram");
const extraRamCost = document.getElementById('ram-cost');

//stoarge cost
const ssd128 = document.getElementById('ssd-128');
const ssd256 = document.getElementById('ssd-256');
const ssd512 = document.getElementById('ssd-512');
const extraStorage = document.getElementById('storage-cost');

//Delivery cost 
const freeDelivery = document.getElementById('free-delivery');
const fastDelivery = document.getElementById('fast-delivery');
const deliveryCost = document.getElementById('delivery-cost');

//total amount
let total = document.getElementById('total-cost');


//8Gb ram event Listener
ram8Gb.addEventListener('click', function ram8Cost(){
    extraRamCost.innerText = '0';
    const ramCostValue = parseInt(extraRamCost.innerText)
    let ramcostPrice = 1299 - ramCostValue;
    total.innerText = ramcostPrice ;
    getCalculate();
    subTotal();
    return ramcostPrice
});

//16Gb ram event Listener
ram16Gb.addEventListener('click', function ram16Cost(){
    extraRamCost.innerText = '180';
    const xtraRamCost = parseInt(extraRamCost.innerText)
    let ramcostPrice = 1299 + xtraRamCost;
    total.innerText = ramcostPrice;
    getCalculate();
    subTotal();
    return ramcostPrice

})


//Xtra storage 128Gb
ssd128.addEventListener('click', function ssd128(){
    extraStorage.innerText = '0'
    const xtraStorageCost = parseInt(extraStorage.innerText);
    let storagecostPrice = 1299 - xtraStorageCost;
    total.innerText = storagecostPrice;
    getCalculate();
    subTotal();
    return storagecostPrice
})

//Xtra storage 128Gb
ssd256.addEventListener('click', function ssd256(){
    extraStorage.innerText = '100';
    const xtraStorageCost = parseInt(extraStorage.innerText);
    let storagecostPrice = 1299 + xtraStorageCost ;
    total.innerText = storagecostPrice ;
    getCalculate();
    subTotal();
    return storagecostPrice
})

//Xtra storage 128Gb
ssd512.addEventListener('click', function ssd512(){
    extraStorage.innerText = '180'
    const xtraStorageCost = parseInt(extraStorage.innerText);
    let storagecostPrice = 1299 + xtraStorageCost;
    total.innerText = storagecostPrice;
    getCalculate();
    subTotal();
    return storagecostPrice
})



//free delivery
freeDelivery.addEventListener('click', function freeDelivery(){
    deliveryCost.innerText = '0';
    const deliverCost = parseInt(deliveryCost.innerText);
    let deliveryPrice = 1299 - deliverCost;
    total.innerText = deliveryPrice;
    getCalculate();
    subTotal();
    return deliveryPrice
})
//fast delivery
fastDelivery.addEventListener('click', function fastDelivery(){
    deliveryCost.innerText = '20';
    const deliverCost = parseInt(deliveryCost.innerText);
    let deliveryPrice = 1299 + deliverCost;
    total.innerText = deliveryPrice;
    getCalculate();
    subTotal();
    return deliveryPrice;
})

function getCalculate(){
    const extraRamCostValue = extraRamCost.innerText;
    const extraRamCostValueText = parseInt(extraRamCostValue);
    
    const extraStorageValue = extraStorage.innerText;
    const extraStorageValueText = parseInt(extraStorageValue) ;
    
    const deliveryCosts = deliveryCost.innerText;
    const extraDeliveryCostValueText = parseInt(deliveryCosts) ;

    let totalValueTextAmount = extraDeliveryCostValueText + extraStorageValueText + extraRamCostValueText + 1299;

    total.innerText = totalValueTextAmount ;
    return total.innerText;
}
function subTotal(){
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = getCalculate();
    return subTotal.innerText
}

document.getElementById('apply').addEventListener('click', function(){
    calcPromo()
})
//sub total amount
let discountPrice = subTotal();

function calcPromo(){
    const promoInput = document.getElementById('promo-input').value;
    if(promoInput == 'stevekaku'){
        const promoDiscount = discountPrice * 0.2;
        const percentageMinus = discountPrice - promoDiscount;
        const subTotal = document.getElementById('sub-total');
        subTotal.innerText = percentageMinus; 

    }
}