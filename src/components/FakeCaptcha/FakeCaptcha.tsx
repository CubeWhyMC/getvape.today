import {useState} from "react";

import captchaImage from "../../assets/captcha.webp";
import "./captcha.css";

interface Props {
    textBefore: string;
    textDuring: string;
    textAfterSuccess: string;
    textAfterFailure: string;
    success: boolean;
    duration: number;
    dark: boolean;
    link?: string;
}

function FakeCaptcha(props: Props) {
    const [status, setStatus] = useState("before");

    const handleClick = () => {
        if (status !== "before") return;

        setStatus("loading");
        setTimeout(() => {
            setStatus(props.success ? "success" : "failure");
        }, props.duration);
    };

    return (
        <div className={`captcha ${props.dark ? "captcha-dark" : ""}`} onClick={handleClick}>
            <div className="captcha-clickable">
                <div className={`captcha-checkbox ${status !== "before" ? "scale-0" : "scale-100"}`}></div>
                <svg className={`captcha-icon captcha-spinner ${status === "loading" ? "scale-100" : "scale-0"}`}
                     xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="#448AFF">
                    <path
                        d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/>
                </svg>
                <svg className={`captcha-icon captcha-success ${status === "success" ? "scale-110" : "scale-0"}`}
                     xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="#4CAF50">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                </svg>
                <svg className={`captcha-icon captcha-failure ${status === "failure" ? "scale-110" : "scale-0"}`}
                     xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="#F44336">
                    <path
                        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
                <div className="captcha-text">
                    {status === "before" && props.textBefore}
                    {status === "loading" && props.textDuring}
                    {status === "success" && props.textAfterSuccess}
                    {status === "failure" && props.textAfterFailure}
                </div>
            </div>
            <a className="captcha-mark" href={props.link} target="_blank" rel="noopener noreferrer">
                <div className="captcha-mark-text">qbyCAPTCHA</div>
                <img className="captcha-mark-logo" src={captchaImage} alt="qbyCAPTCHA"/>
            </a>
        </div>
    );
}

export default FakeCaptcha;
