import Logo from "../img/Logo_candidates.svg";
import Search from '../img/Icon.svg'
import Grou from '../img/Grou.svg'
import { Link, Outlet } from "react-router-dom";

export default function Head() {

  
  return (
 <div>
     <div className="container flex mx-auto  justify-between font-normal text-base  border-b p-6 border-[#D1D5DB]"> {/*//general   */}
    <div className="flex justify-between">
        <Link className="container my-auto w-16 sm:w-80" to="/">
          <img className="hidden sm:block container my-auto" src={Logo} />
          <img className=" sm:container my-auto sm:hidden" src={Grou}  />
        </Link>
   
      <div className="hidden sm:block container m-auto px-8">
          <ul className="flex justify-between ">
            <li><Link  to="/Candidate">Найти кандидата</Link></li>
            <li> <Link  to="">Попасть в базу</Link></li>
            <li><Link  to="/">О сервисе</Link></li>
            <li><Link  to="">Портал</Link></li>
          </ul>
      </div>
    </div>

       <div className=" flex justify-between "> {/*//general input  */}
      
        <div className="rounded-full mr-6 inline-flex border pr-4 bg-white border-[#D1D5DB]">
          <img src={Search} className="w-6 h-6 container text-[#D1D5DB] p-1 my-auto mx-auto" />
            <input type="search" placeholder="Поиск" className="px-6   rounded-full outline-none" />
          </div>

          <div className=""> {/* btn */}
              <div className="container my-auto rounded-3xl px-8 bg-[#F1DF6F]">
                  <button className="px-8 py-1">Войти</button>
              </div>
              <div> {/*If person log in */}

              </div>
          </div>
      </div>
    </div>
    <div className="container mx-auto py-4">
        <ul className="flex ">
          <li className="px-2"><Link to='/'>Маркетологи</Link></li>
          <li className="px-2"><Link to='/'>Backend-разработчики</Link></li>
          <li className="px-2"><Link to='/'>Дизайнеры</Link></li>
          <li className="px-2"><Link to='/'>Менеджеры по продажам</Link></li>
        </ul>
    </div>
    <Outlet />
 </div>
  );
}
