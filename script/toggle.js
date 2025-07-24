document.getElementById('add-money-box').addEventListener('click',function(){
   getClicked("addmoney",'block');
   getClicked('cashout','none');
    getClicked('transfer','none');
     getClicked('transection-history','none');
});

document.getElementById('cash-out-box').addEventListener('click',function(){
   getClicked('cashout','block');
  getClicked("addmoney",'none');
  getClicked('transfer','none');
   getClicked('transection-history','none');
});

document.getElementById('transfer-money-box').addEventListener('click',function(){
   getClicked('transfer','block');
   getClicked("addmoney",'none');
    getClicked('cashout','none');
     getClicked('transection-history','none');
});

document.getElementById('transection-box').addEventListener('click',function(){
    getClicked('addmoney','none');
    getClicked('cashout','none');
    getClicked('transfer','none');
    getClicked('transection-history','block');
})

function getClicked(id,status)
{
    document.getElementById(id).style.display=status;

}