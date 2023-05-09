fetch('/carpentor_service').then(response=>{
    if(response.ok){
        return response.json();
    }
}).then(response=>{
    const source = document.getElementById('carpentor').innerHTML;

    const template = Handlebars.compile(source);

    const context = {
        carpentorArray: response.data
    };

    const compiledHtml = template(context);

    const container = document.getElementById('mainContainer');
    container.innerHTML = compiledHtml;
});