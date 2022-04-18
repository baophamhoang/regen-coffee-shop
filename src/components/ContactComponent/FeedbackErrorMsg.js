import React from "react";
function ErrorMsg({validations}){
    console.log(validations);
    if (validations && validations.length>0){
        for (const validation of validations){
                switch(validation){
                    case 'required':
                        return "Don't leave the fill empty."
                        
                    case 'maxLength':
                        return "Length must not be longer than maximun."
                        
                    case 'minLength':
                        return "Length must not be shorter than minimun."
                        
                    case 'numberOnly':
                        return "Number only."
                        
                    case 'validEmail':
                        return "Please fill the correct email."
                    default:
                        return ' '
                }
            }      
    }
    else return ''
}
export default React.memo(ErrorMsg);