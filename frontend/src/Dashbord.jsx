import Netflix from "./assets/Netflix_2015_logo.svg"

function Dashbord() {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="z-20 m-10">
                    <img className="w-40" src={Netflix} alt="" />
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

export default Dashbord