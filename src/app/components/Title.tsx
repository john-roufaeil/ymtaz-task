type TitleProps = {
    text: string;
};

export default function Title({ text }: TitleProps) {
    return (
        <div>
            <h1> {text} </h1>
        </div>
    );
}