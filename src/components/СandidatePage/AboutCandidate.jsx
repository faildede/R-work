import Head from '../Head'
import Footer from '../Footer'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AboutCondidate = (setData) => {
    // const [data, setData] = useState([]) 
    // const {id} = useParams()

    useEffect(() => {

    }, [])

        console.log(setData());
    return ( 
        <div>
            <Head />
            <div>

            </div>
           <Footer />
        </div>
     );
}
 
export default AboutCondidate;