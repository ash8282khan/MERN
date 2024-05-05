import Navbar from "./navbar";
import categoryRow from "./categoryRow";
import carousal from "./carousal";
import Cards from "./cards";


const Homepage = () => {
    return <div>
      
        <Navbar/>
        <categoryRow/>
        <carousal/>
        <Cards/>
    </div>
}

export default Homepage;
// module.exports = Homepage;