function getConvertedNumberByID(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getConvertedInnerTextByID(id){
  const value = document.getElementById(id).innerText;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

function setElementByIDandValue (id,value)
{
  document.getElementById(id).innerText = value;
}
