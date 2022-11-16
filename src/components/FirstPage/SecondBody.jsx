import { Link } from "react-router-dom";
import tick from "../../img/tick.svg";
import number from '../../img/Mask group.svg'

export default function SecondBody() {
  const name = [
    {
      id: 1,
      name: "Маркетинг",
      img: require("../../img/Marketing.svg"),
      to: "/eee",
    },
    {
      id: 2,
      name: "Разработка",
      img: require("../../img/Ic.svg"),
      to: "/",
    },
    {
      id: 3,
      name: "Аналитика",
      img: require("../../img/I.svg"),
      to: "/",
    },
    {
      id: 4,
      name: "Комьюнити",
      img: require("../../img/n.svg"),
      to: "/",
    },
    {
      id: 5,
      name: "Дизайн",
      img: require("../../img/co.svg"),
      to: "/",
    },
    {
      id: 6,
      name: "Продажи",
      img: require("../../img/Icn.svg"),
      to: "/",
    },
    {
      id: 7,
      name: "Контент",
      img: require("../../img/Mess.svg"),
      to: "/",
    },
    {
      id: 8,
      name: "Топ-менеджмент",
      img: require("../../img/star.svg"),
      to: "/",
    },
  ];

  return (
    <div className="mt-32 container mx-auto">
      <div className="container mx-auto ">
        {/* Direction */}

        <p className="text-center text-4xl">Выберите направление работы</p>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {name.map((i) => (
            <Link to={i.to}>
              <div
                className="flex mt-8 bg-white py-6 px-12 rounded-xl"
                key={i.id}
              >
                <img
                  className="w-16 h-12 bg-[#F1DF6F] rounded-xl mr-4 p-2"
                  src={i.img.default}
                />
                <p className="font-normal text-lg container my-auto">
                  {i.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        {/* General for 2 div */}
        <div className="mt-32 flex justify-between">
          <div className="bg-white py-14 px-14 pr-24 rounded-2xl justify-start">{/* General for 1st div */}
            <p className="font-normal text-3xl w-96">Почему работодатели выбирают ЛИЦА?</p>
            <div>
              {" "}
              {/* 1st text */}
              <div className="flex">
                <img className="w-7" src={tick} /> <p className="leading-8 font-normal text-3xl  py-4">Проверка компетенций</p>
              </div>
              <p className="w-96 text-lg">
                Всех кандидатов с нашей стороны собеседуют не рекрутера, а
                эксперты в своих областях. По результаты мы составляем справку о
                кандидате, чтобы вы могли узнать его лучше.
              </p>
            </div>
            <div>
              {/* 2nd text */}
              <div className="flex">
                <img className="w-7" src={tick} />{" "}
                <p className="leading-8 font-normal text-3xl  py-4">Сотни кандидатов по подписке</p>
              </div>
              <p className="w-96 text-lg">
                Вы сможете самостоятельно связываться с кандидатами – все они
                дали согласие на это.
              </p>
            </div>

              <div> {/* 3rd text */}
              <div className="flex">
                <img className="w-7" src={tick} />{" "}
                <p className="leading-8 font-normal text-3xl  py-4">Еженедельное обновление базы</p>
              </div>
              <p className="w-96 text-lg">
              В рамках сервиса ЛИЦА.Работа мы проводим
              по несколько десятков собеседований еженедельно, и пополняем базу новыми справками по лучшим кандидатам.
              </p>  
              </div>

          </div>

            <div className="bg-[#F1DF6F] relative rounded-xl">{/* General for 2nd div */}
              <div className="py-10 px-14 ">
                <p className="font-normal text-4xl py-2">Кандидаты по подписке</p>
                <p className="font-normal text-4xl py-2"  >4900 ₽ в месяц</p>
                <p className="text-[#F50F22] w-2/3 py-2 text-xl">В 10-100 раз ниже стоимости любого подбора</p>
                <button className="cursor-pointer mt-20 bg-white rounded-2xl px-8 py-2 ">Выбрать кандидата</button>
              </div>
              <img className="absolute bottom-1 right-0" src={number} />
            </div>

        </div>
        <div></div>
      </div>
    </div>
  );
}
