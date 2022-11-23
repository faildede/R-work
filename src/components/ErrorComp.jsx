import Head from './Head'
import Footer from './Footer'
import SecondBody from './FirstPage/SecondBody';
import { Link } from 'react-router-dom'


const ErrorComp = () => {
    return ( 
        <div>
            <Head />
                <div className='container mx-auto w-2/6 py-32'>
                    <div className='rounded-2xl bg-[#F1DF6F] text-center px-4 py-2'>
                        <p className='font-normal text-6xl'>Ошибка 404</p>
                    </div>
                    <p className='py-4 px-12 font-normal text-2xl text-[#626262]'>Мы не смогли найти страницу, но...
                    Мы можем найти вам сотрудников!</p>
                    <div className='flex justify-between py-4'>
                        <p className='px-4 py-2 bg-[#F1DF6F] rounded-3xl font-normal text-xl'><Link to={'/'}>Вернуться на главную</Link></p>
                        <p className='px-4 py-2 border-[#F1DF6F] border-2 rounded-3xl font-normal text-lg text-[#626262]'>Связаться с нами</p>
                    </div>
                </div>
            <SecondBody />
           <Footer />
        </div>
     );
}
 
export default ErrorComp;