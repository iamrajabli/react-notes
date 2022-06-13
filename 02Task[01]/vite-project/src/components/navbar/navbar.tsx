interface INavbarProps {
    head: string,
    body: string
}
const Navbar = ({ head, body }: INavbarProps) => {
    return (
        <div className="border">
            <h1>{head}</h1>
            <p>{body}</p>
        </div>
    );
};

export default Navbar;