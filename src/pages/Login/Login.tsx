import {Button} from "../../components/Button/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



export interface Tweet  {
    id_tweet : string,
    id_author: string,
    text: string,
    likes: number 
    comments : Comments[]
    photo? : string
    time: string
}

export interface User {
    id_user?: string
    name?: string,
    tagName?: string,
    bio?:string,
    photo?: string
    followers? : string[]
    followings? : string[]
    login?: string,
    city?: string,
    password?: string,
    tweets? : string[]
}

export interface UserAuth{
    id_user: string,
   
}


export interface Comments {
    id_author : string
    comment: string
}


export class UserAuth {
    private _id_user: string
    private _name: string
    private _followers : User[] = []
    private _followings : User[] = []

    constructor(name:string){
        this._id_user = "id1"
        this._name = name
    }

    public get name(){
        return this._name
    }

    public get id(){
        return this._id_user
    }

    public get followers(){
        return [...this._followers]
    }
    
    public get following(){
        return [...this._followings]
    }
}

export function saveTweet (tweet: Tweet){
    let tweets  = getSavedTweets()
    tweets.push(tweet)
    localStorage.setItem("tweet",JSON.stringify(tweets))
}

export function getSavedTweets():Tweet[]{
    if(localStorage.getItem("tweet")){
        return JSON.parse(localStorage.getItem("tweet")||"")
       
    }
    else return []
}

export function setCommentOnTweet(idTweet: string, comment: Comments){
    let tweets : Tweet[] = getSavedTweets()
    if(tweets.length > 0){
        tweets = tweets.map((tweet) => {
            if(tweet.id_tweet == idTweet){
                tweet.comments.push(comment)
            }
            return tweet
        })
    }
    localStorage.setItem("tweets", JSON.stringify(tweets))
   
}

export function setLikeOnTweet(idTweet: string){
    let tweets : Tweet[] = getSavedTweets()
    if(tweets.length > 0){
        tweets = tweets.map((tweet) => {
            if(tweet.id_tweet == idTweet){
                tweet.likes += 1
            }
            return tweet
        })
    }
    localStorage.setItem("tweets", JSON.stringify(tweets))
}
    
export function setNewUser(user: User){
    let users: User[] = getSavedUsers()
    users.push(user)
    localStorage.setItem("users", (JSON.stringify(users)))
    setUserAuth(user["id_user"])
}

export function getSavedUsers(){
    if(localStorage.getItem("users")){
        return JSON.parse(localStorage.getItem("users")||"")
       
    }
    else return []
}

export function setUserAuth(idUser: string | undefined){
    localStorage.setItem("userAuth", (JSON.stringify(idUser)))
}

export function getUserAuth(){
    if(localStorage.getItem("userAuth")){
        return JSON.parse(localStorage.getItem("userAuth") || "")

    }
    return undefined
}

export function getUserById (id: string){
    let user : User[] = getSavedUsers()
    console.log(user.find((user)=> user.id_user == id))
    return user.find((user)=> user.id_user == id) || undefined

}

export interface userLogin{
    login: string,
    password: string
}

export function login(userTest : userLogin){

    let users : User[] = getSavedUsers()
    console.log(userTest.login)
    let userAuth = users.find((user) => {
        return user.login == userTest.login && user.password
    } ) 

    console.log(userAuth)

    if(userAuth){
        setUserAuth(userAuth.id_user)
    }
}

export function logOut(){
    localStorage.removeItem("userAuth")
}

function Login(){
    
    const [user, setUser] = useState<userLogin>({login: "", password: ""})
    const navigate = useNavigate()

    function handleUser (e:any){
        setUser(
            {
                ...user,
                [e.target.name] : e.target.value
            }
        )
    }

    function getLogin(){
        login(user)
        navigate("/")

    }

    return(
        <section className="login">
            <img src="" alt="" className="logo-twitter" />
            <p className="title_login">Log in to Twitter</p>
            <input type="text" name="login" placeholder="Phone number, email addres" onChange={handleUser}/>
            <input type="password" name="password" placeholder="Password" onChange={handleUser}/>
            <Button
                children="Log in"
                style="fill"
                color="blue"
                size="default"
                onClick = {getLogin}
                
            />
            <div className="links_login">
                <Link to="">Forgot Password</Link>
                <Link to = "/signup">Signup on Twitter</Link>
            </div>
        </section>
    )
}

export default Login