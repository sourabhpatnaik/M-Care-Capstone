import AnimatedPage from "../Animations/AnimatedPage";



function Home() {
    return (
        <AnimatedPage>
        <div className="home-container">
           <h1>this is home page</h1>
            <img src="https://cdn.britannica.com/64/182864-050-8975B127/Scene-The-Incredible-Hulk-Louis-Leterrier.jpg" alt="" />
        </div>
        </AnimatedPage>
    );
}

export default Home;