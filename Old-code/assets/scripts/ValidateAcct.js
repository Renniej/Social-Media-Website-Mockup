
    function ValidateAll(){ //locally validate fields
       
       
        var Fields = [ 
            document.getElementById('firstname'),
            document.getElementById('lastname'),
            document.getElementById('email'),
            document.getElementById('confirm_email'),
            document.getElementById('date_of_birth'), 
            document.getElementById('username'), 
            document.getElementById('password'), 
            document.getElementById('Confirmpassword')];
        
      
        var Err_Not_Found  = true;
        var elem;

       for (var i = 0; i < Fields.length; ++i){

         
            if (Validate(Fields[i]) === false){
                Err_Not_Found = false;
            }

       }

       return Err_Not_Found;



     }



function Validate(obj){
    
  
    var Err_Found = false;
    var Err_Msg = obj.nextElementSibling;

 

    switch(obj.id){

        case 'firstname' : 
            obj.value.length <= 1 || obj.value.length > 15 ? Err_Msg.innerHTML = "Invalid first name!" : Err_Msg.innerHTML = "";
            break;

        case 'lastname' : 
            obj.value.length <= 1 || obj.value.length > 15 ? Err_Msg.innerHTML = "Invalid last name!" : Err_Msg.innerHTML = "";
            break;
    
        case 'email' : 
        obj.value.length <= 1 || obj.value.length > 15 ? Err_Msg.innerHTML = "Invalid email!" : Err_Msg.innerHTML = "";
        break;

        case 'confirm_email' : 
        obj.value !== document.getElementById('email').value ? Err_Msg.innerHTML = "Email inputs do not match" : Err_Msg.innerHTML = "";
        break;

        case 'username' :
        obj.value.length < 5 || obj.value.length > 15 ?  Err_Msg.innerHTML = "Enter valid username." : Err_Msg.innerHTML = "";
        break;

        case 'password' :
        obj.value.length < 6 || obj.value.length > 30 ?  Err_Msg.innerHTML = "Password length invalid" : Err_Msg.innerHTML = "";
        break;


        case 'Confirmpassword' : 
        obj.value !== document.getElementById('password').value ? Err_Msg.innerHTML = "Passwords do not match." : Err_Msg.innerHTML = "";
        break;


    }

    


    return (Err_Msg.innerHTML === ""); //false = err found

}


