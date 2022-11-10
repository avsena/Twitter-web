import {Button} from "../components/Button/Button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import SelectMouth from "./Mouth";

import "./signin.css";

interface user{
    login: string,
    name: string
}

function Register (){

    const [typeInput, setTypeInput] = useState("phone")
    const [user, setUser] = useState <user>({name: "", login: ""})
    const navigate = useNavigate()

    
    let Input : any
    let label : string = ""

    function toogleTypeInput(e : any){
        typeInput == "phone" ? setTypeInput("email") : setTypeInput("phone")
    }

    if(typeInput == "phone"){
        Input =  <input type="number" 
                name="login" 
                className="register_phone input" 
                placeholder="Phone"
                onChange={handleUser} />

        label = "Use Email"
    }

    else if (typeInput == "email"){
        Input = <input type="email" 
                name="login" 
                className="register_email input" 
                placeholder="Email" 
                onChange={handleUser}/>

        label = "Use Phone"
    }

    function handleUser(e : any){
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })

        console.log(user)
    }
    
    function nextRegister(e : any){

        navigate(`/nextregister?name=${user["name"]}&login=${user["login"]}`)
    }
    return(
        <section  className="register">
            <img src="src/imgs/twitter-logo" alt="" />
            <p className="register_title">Create Account</p>
            <input type="text" className="register_name input"
                     name = "name" placeholder="Name" onChange={handleUser}/>

            {Input}

            <a className="toogle_input" onClick={toogleTypeInput}>{label}</a>
            <p className="date_birth">Date of birth</p>
            <p className="warnig_birth">
                Facilisi sem pulvinar velit nunc, 
                gravida scelerisque amet nibh sit. 
                Quis bibendum ante phasellus metus, magna lacinia sed augue. 
                Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit 
                viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
            </p>
            <div className="register_container_birth">
                <SelectMouth/>
                <input type="number" name="register_mouth" placeholder="Day" min={0} max={31} className="day" />
                <input type="number" name="register_year" placeholder="Year" className="year"/>
            </div>
            <Button
                nextin="Next"
                height="7%"
                width="100%"
                kind="primary"
                onClick={nextRegister}
            />
            

        </section>
        
    )
}

export default Register