import {InputHTMLAttributes} from "react"

interface inputPropos extends InputHTMLAttributes<HTMLInputElement> {
    maxlength?: string,
    placeholder?: string,
    className: string,
    rows? : string,
    type: string
  
}

function Input(props: inputPropos){
    return(
        <input {...props} />
    )
}

export default Input