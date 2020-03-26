function validateForm(){ 
    var name = document.forms["formulario"]["nombre"];               
    var correo = document.forms["formulario"]["correo"];               
    var telefono = document.forms["formulario"]["telefono"];               
    var mensajes = document.forms["formulario"]["mensajes"];                        
    
    if (name.value == "")                                  
    { 
        window.alert("Nombre es un campo obligatorio."); 
        name.focus(); 
        return false; 
    } 
   
    if (correo.value == "")                               
    { 
        window.alert("Correo es un campo obligatorio."); 
        correo.focus(); 
        return false; 
    } 
       
    if (telefono.value == "")                                   
    { 
        window.alert("Telefono es un campo obligatorio."); 
        telefono.focus(); 
        return false; 
    } 
   
    if (mensajes.value == "")                           
    { 
        window.alert("Mensaje es un campo obligatorio."); 
        mensajes.focus(); 
        return false; 
    } 
   
   
    return true; 
}

function restrictAlphabets(e){
				var x=e.which||e.keycode;
				if((x>=48 && x<=57) || x==8 ||
					(x>=35 && x<=40)|| x==46)
					return true;
				else
					return false;
			}
function stringlength(inputtxt, minlength, maxlength)
{ 
var field = inputtxt.value; 
var mnlen = minlength;
var mxlen = maxlength;

if(field.length<mnlen || field.length> mxlen)
{ 
alert("pon un usuario entre " +mnlen+ " y " +mxlen+ " caracteres");
return false;
}
else
{ 
return true;
}
}


var inputs = document.getElementsByClassName('input-28');
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        }else{
                 this.nextElementSibling.classList.remove('fijar');
        }
    });
}


