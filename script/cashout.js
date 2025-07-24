document.getElementById('send-money').addEventListener('click',function(event){
    event.preventDefault();
    const convertedMainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);
    const useramount = document.getElementById('cashout-amount').value;
    const convertedUserAmount =parseFloat(useramount);
    
    if(useramount>convertedMainBalance)
    {
        alert("Insufficient Amount");
        return;
    }

    if(convertedPin===1234)
    {
        const sub = convertedMainBalance -convertedUserAmount;
        document.getElementById('main-balance').innerText = sub ;

        const container = document.getElementById("transection-history");

      const div = document.createElement('div');
      div.innerHTML=`
      <br>
         <h1 class="text-blue-800">Money Has Been CashOut to 01724475340 </h1>
         <p>Amount is ${useramount}</p>
      `
  container.appendChild(div);

    }
    else
    {
        alert("invalid pin or userID");
    }

}) 