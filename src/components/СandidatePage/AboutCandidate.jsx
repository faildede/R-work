// import { useState, useEffect } from 'react'
// import { app, db } from '../../utils/firebase'
// import { collection, getDocs } from 'firebase/firestore'

// const AboutCondidate = () => {
//     const [data, setData] = useState([])
//     const database = collection(db, 'freelancers')

//     const getData = async () => {
//       const data = await getDocs(database)
//       setData(data.docs.map((i) => {
//         return{ ...i.data()}
//       }))
//     }
//     useEffect(() => {
//       getData()
//     }, [])

//     return ( 
//         <div>
//             {data.map((i) => {
//                 return(
//                      <div> {/*gener for 2 side */}
//                         <div>{/* 1 side */}
//                             <div>
//                                 <img src="" />
//                             </div>
//                         </div>
//                         <div>{/* 2 side */}

//                         </div>
//                     </div>
//                 )
//             })}
//         </div>
//      );
// }
 
// export default AboutCondidate;