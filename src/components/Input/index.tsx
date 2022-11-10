import {InputHTMLAttributes} from "react"

interface InputPropos extends InputHTMLAttributes<HTMLInputElement> {
    maxlength?: string,
    placeholder?: string,
    className: string,
    rows? : string,
    type: string
  
}

function Input(props: InputPropos){
    return(
        <input {...props} />
    )
}

export default Input