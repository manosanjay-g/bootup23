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
                        src={require("../../assets/csiCert.png")}
                        className="w-52 h-52  "
                        alt=""
                    />
                    <img
                        src={require("../../assets/ieeeCert.png")}
                        className="w-52 h-52  "
                        alt=""
                    />
                    <img
                        src={require("../../assets/acmCert.png")}
                        className="w-52 h-52  "
                        alt=""
                    />
                
                </div>              
            </div>
        </div>
    )
}

export default Sponsers;