function ramCost(isEightGbRam) {
    const eightGbRam = document.getElementById('ram-cost');
    const ramCostValue = eightGbRam.innerText;
    const ramCostValueText = parseInt(ramCostValue);
    if(isEightGbRam == true){
        let ramCost = 0 * 180;
        eightGbRam.innerText = ramCost
    }
    else if(isEightGbRam != true){
        let ramCost = 90 * 2;
        eightGbRam.innerText = ramCost;
    }
    
}

document.getElementById('eight-gb-ram').addEventListener('click',function () {
    ramCost(true)
});

document.getElementById('sixteen-gb-ram').addEventListener('click',function () {
    ramCost(false)
})