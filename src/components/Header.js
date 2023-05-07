import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setType} from "../stores/event";

const Header = () => {
  const [search, setSearch] = useState("");
  const {type} = useSelector((state) => state.event);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch("");
  };

  const handleClick = (name) => {
    dispatch(setType(name));
  };

  useEffect(() => {
    console.log(type);
  }, [type]);

  return (
    <header className="w-full">
      <div className="flex w-full justify-center">
        <img className="w-20" src="/images/logo.png" alt="" />
      </div>
      <div className="font-black text-xl md:text-4xl text-center p-9 tracking-tighter">
        <h1>ETKİNLİKLER</h1>
      </div>
      <div className="flex flex-row w-full items-center px-4 md:px-16 py-4 overflow-x-scroll">
        <div className="hidden w-1/4 md:flex"></div>
        <div className="w-full md:w-1/2 shrink">
          <ul className="flex sm:justify-center gap-9 w-full">
            <li
              style={{color: type === "all" ? "#FF0D87" : "#000"}}
              className={`cursor-pointer hover:text-[#FF0D87] transition duration-150 ease-in-out active:opacity-50`}
              onClick={() => handleClick("all")}
            >
              Tüm Etkinlikler
            </li>
            <li
              style={{color: type === "tiyatro" ? "#FF0D87" : "#000"}}
              className={`cursor-pointer hover:text-[#FF0D87] transition duration-150 ease-in-out active:opacity-50`}
              onClick={() => handleClick("tiyatro")}
            >
              Tiyatro
            </li>
            <li
              style={{color: type === "konser" ? "#FF0D87" : "#000"}}
              className={`cursor-pointer hover:text-[#FF0D87] transition duration-150 ease-in-out active:opacity-50`}
              onClick={() => handleClick("konser")}
            >
              Konser
            </li>
            <li
              style={{color: type === "stand-up" ? "#FF0D87" : "#000"}}
              className={`cursor-pointer  hover:text-[#FF0D87] transition duration-150 ease-in-out active:opacity-50`}
              onClick={() => handleClick("stand-up")}
            >
              Stand Up
            </li>
            <li
              style={{color: type === "sinema" ? "#FF0D87" : "#000"}}
              className={`cursor-pointer hover:text-[#FF0D87] transition duration-150 ease-in-out active:opacity-50`}
              onClick={() => handleClick("sinema")}
            >
              Sinema
            </li>
            <li
              style={{color: type === "cocuk" ? "#FF0D87" : "#000"}}
              className={`cursor-pointer hover:text-[#FF0D87] transition duration-150 ease-in-out active:opacity-50`}
              onClick={() => handleClick("cocuk")}
            >
              Çocuk
            </li>
          </ul>
        </div>
        <div className="hidden w-1/4 md:flex justify-end">
          <form onSubmit={handleSubmit} className="flex justify-end" action="">
            <input
              className="p-2 rounded-none border-2"
              type="text"
              placeholder="Etkinlik Ara"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
