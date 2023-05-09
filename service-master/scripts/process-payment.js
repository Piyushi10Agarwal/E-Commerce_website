fetch('/getOrderAmount').then(response=>{
    if(response.ok){
        return response.json();
    }
 }).then(response=>{
 
 
     let totalAmount = 0;
     response.data.forEach(val => {
         totalAmount += val.price * val.quantity;        
     });
     
     const source = document.getElementById('paymentPage').innerHTML;
     
     const template = Handlebars.compile(source);
     
     const context = {
         totalAmount:totalAmount
     };
     
     const compiledHtml = template(context);
     
     const container = document.getElementById('mainContainer');
     container.innerHTML = compiledHtml;
 });


 

// let paymentbutton =  document.getElementById('paymentButton');
// paymentbutton.addEventListener('click',(e)=>{
//     console.log('clicked')
//     fetch('/removeCartItems').then(response=>{
//         if(response.ok){
            
//         }
//      })
     
// })