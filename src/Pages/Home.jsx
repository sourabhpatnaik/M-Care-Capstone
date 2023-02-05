import AnimatedPage from "../Animations/AnimatedPage";
import Landing from "../Home components/Landing";
import About from "../Home components/About";
import Services from "../Home components/Services";




function Home() {
    return (
        <AnimatedPage>
            <Landing />
            <About />
            <Services />
        </AnimatedPage>
    );
}

export default Home;