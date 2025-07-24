// alert()
// step 1 - first id ke dhorte hbe 

document.getElementById('login-btn').addEventListener("click",
    function(event){
        event.preventDefault();
     const accountNumber = document.getElementById('Account-number').value; 
      
     const pinNumber = document.getElementById('pin').value;
    //  console.log(accountNumber,pinNumber);
    // console.log(accountNumber.length);
    if(accountNumber.length===11)
    {
        if(parseInt(pinNumber)===1234){
           window.location.href='./main.html'
        }  
        else
        {
            alert('pin thik nai');
        } 
    }
    else
    {
        alert('invalid number')
    }

    }
)