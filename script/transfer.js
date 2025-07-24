document.getElementById('money-tranfer').addEventListener('click',function(event){
 event.preventDefault();

 const account= document.getElementById('t-account').value;
//  console.log(account);
const pin =getConvertedNumberByID('t-pin');

const amount = getConvertedNumberByID('t-amount');

const realAmount = getConvertedInnerTextByID('main-balance');
console.log(account.length);
if(pin===1234 && account.length===11)
{
   const sub = realAmount-amount;
   setElementByIDandValue('main-balance',sub);

   const container = document.getElementById('transection-history');
   const div = document.createElement('div');
   div.innerHTML= `
   <br>
      <h1>Transfered Amount is </h1>
      <p>${amount}</p>
      <p>Account number</p>
      <p>${account}</p>
   `
  container.appendChild(div);

}
else
{
   alert("Invalid")
}

})