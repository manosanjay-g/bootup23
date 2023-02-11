const Sponsers = () => {
    return (
        <div
            id="sponsers-and-organizers"
            className="flex flex-col py-10  text-white "
        >
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl  font-semibold tracking-widest">OUR SPONSORS</h1>
                <div className="flex flex-col items-center md:flex-row md:justify-around w-full my-10 flex-wrap">
                    
                    <img
                        src={require("../../assets/eatsure.png")}
                        className="w-52 h-45 my-4"
                        alt=""
                    />
                    <img
                        src={require("../../assets/dental.png")}
                        className="w-52 h-45 my-4  "
                        alt=""
                    />
                    <img
                        src={require("../../assets/poorvika.png")}
                        className="w-52 h-45 my-10 "
                        alt=""
                    />
                    <img
                        src={require("../../assets/rosemilk.png")}
                        className="w-52 h-45 my-4"
                        alt=""
                    />
                
                </div>              
                <div className="flex flex-col items-center md:flex-row md:justify-around flex-wrap md:gap-x-10">
                    <img
                        src={require("../../assets/csiCert.png")}
                        className="w-52 h-52 mb-10 my-4"
                        alt=""
                    />
                    <img
                        src={require("../../assets/uipath.png")}
                        className="w-96 my-4"
                        alt=""
                    />
                    <img
                        src={require("../../assets/acmCert.png")}
                        className="w-52 h-52  my-4"
                        alt=""
                    />
                    
                
                </div>              
            </div>
        </div>
    )
}

export default Sponsers;