//Procurar o botao 
document.querySelector("#add-time")
//quando clicar no botao 
.addEventListener('click', cloneField)

//executar uma acao
function cloneField() {
   //duplicar campos. que campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean :true ou false
    //pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    //para cada campo , limpar
    fields.forEach(function(field) {
        field.value =""
    })


    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    //duplicar o campos. Que campos.


    //colocar na pagina