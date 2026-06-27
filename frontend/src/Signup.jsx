import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function Signup() {

    var navigate = useNavigate()

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    function handleuser(evt) {
        setUser(evt.target.value)
    }

    function handlepass(evt) {
        setPass(evt.target.value)
    }

    function addUser() {
        var addDetails = axios.post("http://localhost:5000/add", { username: user, password: pass })
        console.log(addDetails)
        addDetails.then((data) => {
            console.log(data)
            if (data.data == "Success") {
                alert("User added successfully, Now you can Signin")
                navigate("/signin")
            }
        })
    }

    return (
        <div>
            <Header content="Signin" />
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center">
                    <div className="m-10 w-[80%] p-10 z-20 text-white text-center">
                        <h1 className="text-5xl font-bold">Unlimited movies, shows, and more</h1>
                        <p className="font-bold mt-2">Starts at ₹149. Cancel at any time.</p>
                        <p className="mt-5 mb-2">Ready to watch? Enter your email to create or restart your membership.</p>
                        <input className="border rounded-sm w-full h-15 m-1 p-2" onChange={handleuser} type="text" placeholder="username" />
                        <input className="border rounded-sm w-full h-10 m-1 p-2" onChange={handlepass} type="text" placeholder="password" />
                        <button className="border rounded-sm w-full m-1 bg-red-600 font-bold text-white" onClick={addUser}>Get Started</button>
                    </div>
                </div>
            </div>
            <div className="bg-black/80 absolute top-0 right-0 left-0 h-screen w-screen z-0"></div>
            <div className="absolute top-0 -z-10">
                <img className="h-screen w-screen" src="https://assets.nflxext.com/ffe/siteui/vlv3/81b52f88-dc76-488d-a939-0cf13a260a6e/web/IN-en-20260622-TRIFECTA-perspective_d39d60ef-cb5a-4793-9546-0a8d9a87948e_large.jpg"
                    alt="img not found" />
            </div>
            <Footer/>
        </div>
    )
}

export default Signup