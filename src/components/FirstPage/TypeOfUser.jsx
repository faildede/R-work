import { useState, useEffect } from 'react'
import { app, db } from '../../utils/firebase'
import { collection, getDocs, onSnapshot, snapshotEqual } from 'firebase/firestore'
import { Link, Outlet, Navigate, useNavigate } from 'react-router-dom'
import MyLoader from '../MyLoader'
import { useRef } from 'react'


export default function TypeOfUser()  {
    const [data, setData] = useState([])
   
    const [loading, setLoading] = useState(true)
    const [isSubmit, setIsSubmit] = useState()
   

    const navigate = useNavigate()

    useEffect(() => {
        const data = onSnapshot(
          collection(db, 'freelancers'),
          (snapshot) => {
            let list = [];
            snapshot.docs.forEach((doc) => {
              list.push({id: doc.id, ...doc.data() });
            });
            const loading =() => <MyLoader />
            setData(list)
            setLoading(false)
           
          }
        )
    }, [])



  return (
    <div className="container mx-auto mt-32">
        <p className='text-center font-normal text-4xl'>Как выглядит база кандидатов</p>
        <div className='flex mt-8 '>
        <loading />
          {data.map((i) => {
      return (
        <div key={i.id} i={i} className='bg-white rounded-lg mx-2 py-7 px-14 container mx-auto'>
            <div className='container mx-auto '>
             <div className='container mx-auto flex justify-between'>
             <p className='text-[#92400E] bg-[#FEF3C7] font-weight text-base px-2 rounded-full'>{i.workTop.Ftime}</p>
              <p className='text-[#5B21B6] bg-purple-100 font-weight text-base px-2 rounded-full'>{i.workTop.Stime}</p>
             </div>
              <div className='text-center'>
                <img className='rounded-full w-24 py-2 container mx-auto' src={i.img} alt="" />
                <p className='font-normal text-xl leading-6 pt-2'>{i.name}</p>
                <p className='text-[#979797] font-normal text-lg'>{i.specialization}</p>

                <div className='font-normal text-lg py-4'>
                  <p>Опыт: более {i.experience} лет</p>
                  <p>Зарплата: {i.salary} тыс.₸</p>
                </div>
              </div>
              <Link to="/Candidate/${i.id}" data={i}
              >
              <div className='bg-[#F1DF6F] cursor-pointer rounded-full py-2 px-4'>
                <p className='text-center text-base'>Посмотреть справку</p>
                </div>
              </Link>
            </div>
        </div>
      )
     })}
     
        </div>
        <Outlet />
    </div>
  );
}

const UserLoader = async({request, params}) => { 
  console.log({ request, params })
}

export {UserLoader}