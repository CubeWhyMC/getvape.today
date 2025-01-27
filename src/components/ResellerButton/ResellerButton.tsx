interface Props {
    link: string;
    text: string
}

function ResellerButton(props: Props) {
    return (<>
        <a href={props.link}
           className={"inline-block bg-white text-black border-2 border-[#3498db] rounded-xl p-2 m-2 w-[calc(20%-20px)] " +
               "text-center shadow-sm transition-transform duration-300 ease-in-out " +
               "hover:shadow-md hover:scale-105text-[#2c3e50] no-underline " +
               "dark:bg-[#34495e] dark:border-[#1abc9c] dark:text-[#ecf0f1] transition-transform transform hover:scale-105 shadow-sm " +
               "hover:shadow-md hover:text-[#2980b9] " +
               "dark:hover:text-[#1abc9c] hover:underline"}>
            {props.text}
        </a>
    </>);
}

export default ResellerButton;