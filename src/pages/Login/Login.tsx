import {Button} from "../../components/Button/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Heading } from "../../components/Heading/Heading"
import Input from "../../components/Input"
import { Text } from "../../components/Text/Text"

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

    return (
        <div className="h-screen w-full flex justify-center items-center bg-white dark:bg-dark-1">
          <div className="grid w-[450px] max-w-[100%]">
    
            <Text>Log in to Twitter</Text>
    
            <form>
              <input
                type="text"
                placeholder="Phone or mail"
                />
    
              <input
                type="password"
                placeholder="Password"
              />
    
             <Link to="/home"><Button size="big">Log In</Button></Link>
            </form>
    
            <div className="flex justify-between mt-10">
              <Link to="../">
                <Text color="blue" className="hover:underline">Forgot password?</Text>
              </Link>
    
              <Link to="../signup">
                <Text color="blue" className="hover:underline">Sign up to Twitter</Text>
              </Link>
            </div>
          </div>
        </div>
      )
}

export default Login