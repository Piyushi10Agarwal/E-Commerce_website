const logged = document.querySelectorAll('#logged');
const out = document.querySelectorAll('#out');

fetch('/index').then(response =>{
    if(response.ok){
//        console.log(response);
        return response.json();
    }
}).then(response =>{
//    console.log(response);
    if(response.user){
        for(let i=0;i<logged.length;i++){
            logged[i].style.display = 'none';
        }
    }
    else{
        for(let i=0;i<out.length;i++){
            out[i].style.display = 'none';
        }
    }
});