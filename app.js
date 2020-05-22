const submit = document.querySelector('.submit');


const calcTip = () => {
    //Get the bill amount and the tip percentage from the UI
    const bill = parseInt(document.querySelector('.bill__input').value.trim());
    const percentage = parseInt(document.querySelector('.percentage__input').value.trim());
    
    //calculate the tip based on the values from the UI
    const tip = (percentage / 100) * bill;

    //Calculate the total Amount payable
    const total = (bill + tip);

    //Add both the tip and total amount to the UI
    document.querySelector('.tip__amount').textContent = tip.toFixed(2);
    document.querySelector('.total__amount').textContent = total.toFixed(2);
};

submit.addEventListener('click', calcTip);