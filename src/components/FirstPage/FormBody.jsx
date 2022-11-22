import { useState } from "react";
import Form from "../../img/Form.svg";
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../utils/firebase'
import { Outlet } from "react-router-dom";
import NewWindow from '../UtilsComponent/NewWindow'

const FormBody = () => {
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPhone, setNewPhone] = useState(0)
  const [buttonPopup, setButtonPopup] = useState(false)

  const CollectionRef = collection(db, 'message')

  const createNewMessage = async() => {
    await addDoc(CollectionRef, {name: newName, email:newEmail, phone:newPhone});
    setButtonPopup(true )
  }
//TODO refresh and new coponent
  return (
    <div className="container mx-auto mt-32 flex justify-between relative">
      <NewWindow trigger={buttonPopup} setTrigger={setButtonPopup} />
      <div className="w-8/12 container my-auto">
        <img src={Form} alt="/" />
      </div>
      <div>
        <div className="bg-white px-10 py-8 rounded-t-lg w-full">{/*Form  */}
          <div className="container mx-auto text-center">{/*Text  */}
            <p className="font-normal text-4xl">
              Подписаться на обновления базы
            </p>
            <p className="font-normal container mx-auto  text-xl w-5/6">
              Мы будет присылать вам информацию каждую неделю, по каким сферам у
              нас появились кандидаты.
            </p>
          </div>
          <div className="container mx-auto mt-8">{/*Input  */}
            <input
              className="block my-4 container mx-auto w-5/6 py-2 border border-[#D1D5DB] rounded-3xl px-4 outline-none"
              type="text"
              name=""
              id=""
              placeholder="Ваше имя"
              onChange={(event) => {setNewName(event.target.value)}}
            />
            <input
              className="block my-4 container mx-auto w-5/6 py-2 border border-[#D1D5DB] rounded-3xl px-4 outline-none"
              type="email"
              name=""
              id=""
              placeholder="Email"
              onChange={(event) => {setNewEmail(event.target.value)}}
            />
            <input
              className="block my-4 container mx-auto w-5/6 py-2 border border-[#D1D5DB] rounded-3xl px-4 outline-none"
              type="tel"
              name=""
              id=""
              placeholder="Номер телефона"
              onChange={(event) => {setNewPhone(event.target.value)}}
            />
          </div>
          <div className="mt-8" onClick={() => createNewMessage() } >
            {/*Button  */}
            <p className=" container mx-auto w-5/6 text-center cursor-pointer rounded-3xl py-2 my-4 font-normal text-lg bg-[#F1DF6F]">
              Подписаться
            </p>
          </div>
        </div>
        <div className="bg-[#F9FAFB] mt-1  rounded-b-2xl">{/*Form footer  */}
          <p className="font-normal text-sm px-4 py-4  text-[#6B7280]">
            Отправка данной формы означает согласие с <span className="text-[#111827] font-bold "> Пользовательским
            соглашением</span> и <span className="text-[#111827] font-bold "    >Политикой конфиденциальности</span>
          </p>
        </div>
      </div>
      <NewWindow  />
      <Outlet />
    </div>
  );
};

export default FormBody;
