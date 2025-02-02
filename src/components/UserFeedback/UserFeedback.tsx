interface Props {
    username: string;
    text: string;
}

function UserFeedback(props: Props) {
    return (
        <div className="max-w-md p-4 rounded-lg backdrop-blur-2xl shadow-lg border border-[#3498db] dark:border-[#1abc9c] space-y-2 transition hover:-translate-y-1">
            <p className="font-semibold text-lg">{props.username}</p>
            <p className="text-[#3498db] dark:text-[#1abc9c]">{props.text}</p>
        </div>
    );
}

export default UserFeedback;