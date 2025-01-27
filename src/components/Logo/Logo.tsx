import logo from "../../assets/logo.webp"

function Logo() {
    return (<>
        <div className={"flex items-center justify-center mb-10 relative z-10"}>
            <div className={"w-[100px] h-[100px] rounded-full border-4 border-[#3498db] mr-5 overflow-hidden"}>
                <img src={logo} alt="丁真" className={"w-full h-full object-cover"}/>
            </div>
            <h1 className={"text-4xl"}>丁真租号玩</h1>
        </div>
    </>);
}

export default Logo;