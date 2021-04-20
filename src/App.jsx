import { useEffect } from "react";
import Container from "./patterns/Molecules/container/Container";

const App = () => {
    // const handleNavigation = e => {
    //     console.log(window.scrollY)
    // }
    // useEffect(()=> {
    //     window.addEventListener("scroll", handleNavigation, true);
    // })

    return ( 
        <div className="App">
            <Container />
        </div>
     );
}
 
export default App;