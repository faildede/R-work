import candid from "../../img/candid.svg";

const NewWindow = (props) => {
  return props.trigger ? (

    <div className="absolute items-center inset-0 w-2/5 h-72">
    <div className="bg-white absolute px-12  grid   py-8  rounded-2xl text-center">
      <div className="flex text-4xl font-normal justify-center">
        <p className="">ЛИЦА </p>
        <img src={candid} className="" />
        <p className=""> Кандидаты</p>
      </div>
      <p className="flex justify-center w-82 text-3xl pt-2">
        Спасибо! Вы подписались на еженедельные обновления базы проверенных
        кандидатов.
      </p>

      <div
        className="cursor-pointer py-4 bg-[#F1DF6F] rounded-full px-2 w-36 container mx-auto mt-6"
        onClick={() => props.setTrigger(false)}
      >
        <p>Закрыть</p>
      </div>
    </div>
    </div>
  ) : (
    ""
  );
};

export default NewWindow;
