import { useLocation, Link } from "react-router-dom";


const AboutCondidate = () => {
    const { state } = useLocation();
    return ( 
        <div>
            {state.i}
        </div>
     );
}
 
export default AboutCondidate;