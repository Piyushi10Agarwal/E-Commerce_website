fetch('/mycart').then(response=>{
   if(response.ok){
       return response.json();
   }
}).then(response=>{


    let totalAmount = 0;
    response.data.forEach(val => {
        totalAmount += val.price * val.quantity;        
    });
    
    const source = document.getElementById('myCart').innerHTML;
    
    const template = Handlebars.compile(source);
    
    const context = {
        myCart: response.data,
        totalAmount:totalAmount
    };
    
    const compiledHtml = template(context);
    
    const container = document.getElementById('mainContainer');
    container.innerHTML = compiledHtml;
});