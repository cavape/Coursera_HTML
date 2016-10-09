function billingFunction(){
  if(same.checked==true){
    billingName.value=shippingName.value;
    billingZip.value=shippingZip.value;
  }
  else{
    billingName.value="";
    billingZip.value="";
  }
};