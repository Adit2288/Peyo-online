document.getElementById('add-money').addEventListener('click',function(event){
event.preventDefault();  
const selectedbank = document.getElementById('allbank').value;
const AccountNo = document.getElementById('acount').value ;
const Amount = document.getElementById('amount').value;
const convertedAmount = parseFloat(Amount);
const pin = document.getElementById('pin').value ;
const convertedPin = parseInt(pin);
const mainBalance = document.getElementById('main-balance').innerText;
const convertedMainBalance = parseFloat(mainBalance);

if(Amount<0)
{
  alert("Invalid Amount")
  return;
}

if(convertedPin===1234)
{
    const sum = convertedMainBalance + convertedAmount ;
  document.getElementById('main-balance').innerText=sum;

  const container = document.getElementById('transection-history');

 const div = document.createElement('div');
 div.innerHTML =`
 <br>
   <h1 class="text-blue-600" >Added Money From ${selectedbank} </h1>
   <p>Amount is ${Amount}</p>
   <p>Account Number : ${AccountNo}</p>
 `
container.appendChild(div);

}
else
{
    console.log("pin sothik na");
}

})