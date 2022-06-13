interface IFooterProps {
    head: string,
    body: string
}

const Footer = ({ head, body }: IFooterProps) => {
    return (
        <div className="border">
            <h1>{head}</h1>
            <p>{body}</p>
        </div>
    );
};

export default Footer;