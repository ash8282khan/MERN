import Navbar from "../common/Navbar/navbar";
import "./homepage.css";

const HomePage = () => {
    return(
        <div> 
            <Navbar />
            <div className="homepage-main-container">
                <h1>Welcome to Homepage</h1>
            </div>
        </div>
    )
}

export default HomePage;