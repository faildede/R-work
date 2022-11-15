export default function SecondBody() {
  const name = [
    {
      id: 1,
      name: "Маркетинг",
      img: "../../img/Marketing.svg",
    },
    {
      id: 2,
      name: "Разработка",
      img: "../../img/Ic.svg",
    },
    {
      id: 3,
      name: "Аналитика",
      img: "../../img/I.svg",
    },
    {
      id: 4,
      name: "Комьюнити",
      img: "../../img/n.svg",
    },
    {
      id: 5,
      name: "Дизайн",
      img: "../../img/co.svg",
    },
    {
      id: 6,
      name: "Продажи",
      img: "../../img/Icn.svg",
    },
    {
      id: 7,
      name: "Контент",
      img: "../../img/Mess.svg",
    },
    {
      id: 8,
      name: "Топ-менеджмент",
      img: "../../img/star.svg",
    },
  ];

  return (
    <div>
      <div>
        {/* Direction */}
        <p>Выберите направление работы</p>
        <div>
          {name.map(i => {
            <div key={i.id}>{i.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
