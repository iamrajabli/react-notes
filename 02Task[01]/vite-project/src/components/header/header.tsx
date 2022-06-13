interface IHeaderProps {
    head: string,
    body: string
}

const Header = ({ head, body }: IHeaderProps) => {
    return (
        <div>
            <h2>{head}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Header;