import * as React from "react";

interface Props {
    href: string;
    children?: React.ReactNode;
}

function Link(props: Props) {
    return (<>
        <a className={"text-[##3498db] dark:text-[#1abc9c] hover:underline"} href={props.href}>{props.children}</a>
    </>);
}

export default Link;