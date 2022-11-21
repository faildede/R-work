import Head from '../Head'
import FirstBody from './FirstBody'
import SecondBody from './SecondBody'
import Footer from '../Footer'
import FormBody from './FormBody'
import TypeOfUser from './TypeOfUser'
import { Outlet } from 'react-router-dom'

export default function Main() {

    return(
       <div className='flex flex-col h-screen'>
         <Head />
         <FirstBody />
         <SecondBody />
         <TypeOfUser /> 
         <FormBody />
         <Footer />
         <Outlet />
       </div>
    )
}