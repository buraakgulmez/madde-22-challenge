import {useEffect} from "react";
import Card from "./Card";
import {useSelector} from "react-redux";

const CardList = () => {
  const {events} = useSelector((state) => state.event);
  useEffect(() => {
    console.log(localStorage.getItem("menu"));
  }, [localStorage.getItem("menu")]);

  return (
    <>
      {events.map((item) => (
        <Card data={item} />
      ))}
    </>
  );
};

export default CardList;
