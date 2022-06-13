import Header from "../header/header";
import About from "../about/about";
interface IHomeProps {
    head: string,
    body: string
}
const Home = ({ head, body }: IHomeProps) => {
    const header = {
        head: 'Header',
        body: 'Header area'
      },
      about = {
        head: 'About team',
        body: 'About team area'
      };

    return (
        <div className="border">
            <h1>{head}</h1>
            <p>{body}</p>
            <Header {...header}/>
            <About {...about}/>
        </div>
    );
}

export default Home;