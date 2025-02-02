import * as React from "react";

interface Props {
    title?: string;
    children?: React.ReactNode;
    footnote?: boolean;
}

function Card(props: Props) {
    return (<>
        <div
            className={"relative bg-white text-[#2c3e50] p-5 mb-5 rounded shadow-sm transition-colors duration-500 z-10 dark:bg-[#34495e] dark:shadow-md dark:text-[#ecf0f1] " + (props.footnote && 'text-[0.8em]')}>
            {props.title &&
                <h2 className={"text-xl font-bold border-b-2 border-[#3498db] pb-2.5 mt-7"}>{props.title}</h2>
            }
            <div className={"p-3 flex flex-col items-start " + (!props.footnote ? "gap-4": "gap-2 text-[#7f8c8d] relative z-10 dark:text-[#bdc3c7]")}>
                {props.children}
            </div>
        </div>
    </>);
}

export default Card;