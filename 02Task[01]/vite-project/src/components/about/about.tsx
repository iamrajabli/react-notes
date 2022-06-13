interface IAboutProps {
    head: string,
    body: string
}
const About = ({head, body}:IAboutProps) => {
    return(
        <div>
            <h2>{head}</h2>
            <p>{body}</p>
        </div>
    );
};

export default About;