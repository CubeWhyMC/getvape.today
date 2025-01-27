import * as React from "react";
import {useNavigate} from "react-router-dom";

interface Props {
    href: string;
    children: React.ReactNode;
}

function LinkButton(props: Props) {
    const navigate = useNavigate();
    const shouldUseRouter = props.href.startsWith("/");

    const href = props.href;

    return (<>
        <a className="inline-block px-4 py-2 text-base font-bold text-white bg-gradient-to-r from-[#3498db] to-[#1abc9c] rounded-[30px] no-underline transition-all duration-300 mr-2.5 hover:from-[#2980b9] hover:to-[#16a085] hover:shadow-md hover:shadow-black/20"
           href={shouldUseRouter ? "#" : href} onClick={() => {
            if (shouldUseRouter) {
                navigate(href);
            }
        }}>{props.children}</a>
    </>);
}

export default LinkButton;