import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "./Header"

function Signin() {

    var navigate = useNavigate()

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    function handleuser(evt) {
        setUser(evt.target.value)
    }

    function handlepass(evt) {
        setPass(evt.target.value)
    }

    function check() {
        if (user == "" || pass == "") {
            alert("Something went wrong..")
        }
        else {
            var logindetails = axios.post("https://backend-begin-backend.onrender.com/", { username: user, password: pass })
            console.log(logindetails)
            logindetails.then((data) => {
                console.log(data)
                if (data.data == true) {
                    navigate("/dashbord")
                }
                else {
                    alert("Invalid details..!")
                }
            })
        }
    }

    return (
        <div>
            <Header content="Signup" />
            <div className="flex items-center justify-center">
                <div className="m-10 w-[70%] p-10 z-20 text-white">
                    <h1 className="text-5xl font-bold my-5">Enter your info to sign in</h1>
                    <p className="font-bold my-2">Or get started with a new account.</p>
                    <input className="border rounded-sm w-full h-15 m-1 p-2" onChange={handleuser} type="text" name="username" placeholder="username" /><br />
                    <input className="border rounded-sm w-full h-10 m-1 p-2" onChange={handlepass} type="text" name="password" placeholder="password" /><br />
                    <button className="border rounded-sm w-full m-1 bg-red-600 font-bold text-white" onClick={check}>Signin</button>
                </div>
            </div>
             <div className="bg-black/80 absolute top-0 right-0 left-0 h-screen w-screen z-0"></div>
            <div className="absolute top-0 -z-10">
                <img className="h-screen w-screen" src="https://assets.nflxext.com/ffe/siteui/vlv3/81b52f88-dc76-488d-a939-0cf13a260a6e/web/IN-en-20260622-TRIFECTA-perspective_d39d60ef-cb5a-4793-9546-0a8d9a87948e_large.jpg"
                    alt="img not found" />
            </div>
        </div>
    )
}

export default Signin
