import IMG from '../../img/main_image.svg'
import { Link } from 'react-router-dom'

export default function FirstBody() {

    return(
        <div className='flex container mx-auto justify-between'>{/*general */}
             <div> {/*with text */}
                <p className='font-normal text-6xl leading-relaxed '>Нанимайте проверенных <br /><span className='bg-[#F1DF6F] rounded-3xl  px-6'>кандидатов</span></p>
                <p className='mt-4 text-[#626262] text-lg font-normal w-96'>Мы уже со всеми провели собеседования и подтверждаем их профессионализм</p>
                <div className='mt-12  flex  '> {/*btn */}
                    <p className='cursor-pointer border-2 text-lg px-6 py-1 border-[#F1DF6F] rounded-full hover:bg-[#F1DF6F] text-black'> <Link to='/'>Выбрать кандидата</Link> </p>
                    <p className='cursor-pointer ml-10 border-2 text-lg px-6 py-1 border-[#F1DF6F] rounded-full hover:bg-[#F1DF6F] text-black'><Link to='/'> Попасть в базу</Link> </p>
                </div>
            </div>
            <div>{/*img */}
                <img src={IMG}  />
            </div>
        </div>
    )
}