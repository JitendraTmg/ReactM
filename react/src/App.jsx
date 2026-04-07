import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimoninal from "./components/Testimoninal";

function App() {
    const name = "Jitendra";
    const lastname = "tamang";
    return (
    <div className="App">
        <Navbar props = {{ name }} />
        <Hero props1 ={{lastname}} />
        <h1>React Vite Starter</h1>
        <p>This is a simple React application using Vite as the build tool.</p>
        <Testimoninal />
        <Footer />
    </div>
    )
}

export default App;