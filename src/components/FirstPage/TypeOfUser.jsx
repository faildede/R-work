import { useState, useEffect } from 'react'
import { app, db } from '../../utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Link, Outlet } from 'react-router-dom'

export default function TypeOfUser() {
    const [data, setData] = useState([])
    const database = collection(db, 'freelancers')

    const getData = async () => {
      const data = await getDocs(database)
      setData(data.docs.map((i) => {
        return{ ...i.data(), id: i.id}
      }))
    }
    useEffect(() => {
      getData()
    }, [])



  return (
    <div className="container mx-auto mt-32">
        <p className='text-center font-normal text-4xl'>Как выглядит база кандидатов</p>
        <div className='flex mt-8 '>

      {data.map((i) => {
      return (
        <div className='bg-white rounded-lg mx-2 py-7 px-14 container mx-auto'>
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
              <Link to="/Candidate/${i.id}">
              <div className='bg-[#F1DF6F] cursor-pointer rounded-full py-2 px-4' key={i.id} >
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
