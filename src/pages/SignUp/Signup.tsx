import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
import { Heading } from "../../components/Heading/Heading";
import { Text } from "../../components/Text/Text";



import "./signup.css";

function Signup (){

    const [user, setUser] = useState({})

    

    return(
        <section className="signup">
            <div className="signup_container_image">
                <img src= "src/imgs/back-twitter.png "
                     alt="background-twitter"
                     className="signup_background bg-no-repeat w-50% h-50%" />
            </div>
            <aside className="signup_main">
                <img src="src\imgs\twitter-logo.png" alt="logo-twitter" />
                <h1>Happening now</h1>
                <h3>Join Twitter today</h3>
                <button className="btn_google btn_signup"><FcGoogle/>Signup with Google</button>
                <button className="btn_apple btn_signup"><IoLogoApple/>Signup with Apple</button>
                <Link to={"/register"}className="btn_email_phone btn_signup">Signup with email or phone</Link>
                <p className="terms_signup">
                    By singing up you agree to the <span><Text color="blue" size="lg" className="hover:underline">Terms of Service</Text></span> 
                    and <span><Text color="blue" size="lg" className="hover:underline">Privacy Policy</Text></span>, 
                    including <span><Text color="blue" size="lg" className="hover:underline">Cookie Use</Text></span>.
                </p>
                <p className="login_signup">Already have an account? <Link to={"/login"}><Text color="blue" size="lg" className="hover:underline">Log in</Text></Link></p>
            </aside>
        </section>
    )
}

export default Signup