import { useNavigate } from "react-router-dom"
import Netflix from "./assets/Netflix_2015_logo.svg"

function Header(props){

    const navigate = useNavigate()

    function handleSign(){
        if(props.content=="Signin"){
            navigate("/signin")
        }
        else{
            navigate("/signup")
        }
    }

    return(
        <div className="flex justify-between items-center m-5">
            <div className="z-20 m-5"> 
                <img className="w-40" src={Netflix} alt="" />
            </div>
            <div className="z-20">
                <button onClick={handleSign} className="border px-2 py-1 rounded-lg bg-red-600 text-white font-bold">{props.content}</button>
            </div>
        </div>
    )
}

export default Header