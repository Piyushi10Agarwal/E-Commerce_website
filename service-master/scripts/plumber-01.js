fetch('/plumber_service').then(response=>{
    console.log(response)
    if(response.ok){
        return response.json();
    }
}).then(response=>{
    const source = document.getElementById('plumber').innerHTML;

    const template = Handlebars.compile(source);

    console.log(response.data)

    const context = {
        carpentorArray: response.data
    };

    const compiledHtml = template(context);

    const container = document.getElementById('mainContainer');
    container.innerHTML = compiledHtml;
});