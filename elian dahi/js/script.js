let contraseña1 , correo;

let formulario = document.getElementById('form1');



formulario.addEventListener('submit', (e) => {
    console.log('hola');
    e.preventDefault();
    LeerDatos()
})

function LeerDatos() {
    contraseña1 = document.getElementById('contraseña1').value
    correo = document.getElementById('correo').value
    
    ValidarData(contraseña1, correo )
    
}

function ValidarData (contraseña1, correo ) {
    if(contraseña1.length==0 || correo.length==0) {
        
        
    }
    ListaData(contraseña1, correo )
}




function ListaData( contraseña1 , correo ) {
    let contraseña1Us = localStorage.getItem('contraD')
    let correoUs = localStorage.getItem('correoD')
    
    if(contraseña1 == contraseña1Us && correo == correoUs){
       
        swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    
    
}


