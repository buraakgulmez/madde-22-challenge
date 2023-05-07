import {useState} from "react";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import {useSelector} from "react-redux";
import {CheckCircle} from "@mui/icons-material";

const Card = (data) => {
  const [showMore, setShowMore] = useState(false);
  const [isTicketAdded, setIsTicketAdded] = useState(false);
  const [isCalenderAdded, setIsCalenderAdded] = useState(false);

  const {type} = useSelector((state) => state.event);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const typeColor = () => {
    switch (data.data.type) {
      case "tiyatro":
        return "#B77CB8";
      case "sinema":
        return "#F07266";
      case "stand-up":
        return "#F19653";
      default:
        return "#B77CB8";
    }
  };

  if (!data || (type !== "all" && type !== data.data.type)) return false;

  return (
    <div className="py-4 md:px-16 px-4">
      <div className=" md:h-[300px] flex flex-col md:flex-row border border-[#dedede]">
        <div className="flex flex-col md:flex-row min-h-[200px] w-full md:w-[15%] md:h-full bg-black relative items-center">
          <p className="text-white md:text-[#FF0D87] p-3 md:p-10 md:h-full flex items-center text-center md:max-w-[110px] font-bold">
            {data.data.date}
          </p>
          <div className="w-[100%] md:w-[170%] h-full absolute left-0 right-0 top-10 md:left-28 md:top-0 md:bottom-0">
            <div className="h-full w-full relative">
              <img className="h-full w-full p-3 " src={data.data.src} alt="" />
              <p
                style={{backgroundColor: typeColor()}}
                className="absolute top-8 left-0 px-6 py-1 text-white uppercase font-bold"
              >
                {data.data.type}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pt-10 md:w-[72%] md:pl-64">
          <div className="p-2 px-6">
            <h3 className="font-semibold p-2">{data.data.title}</h3>
            <a className="text-[#9C9C9C] text-xs px-4" href="/">
              <PlaceRoundedIcon sx={{fontSize: "15px"}} />
              {data.data.location}
            </a>
            <p className="max-w-[94%] line-clamp-6 p-2 text-sm md:text-base lg:text-xl overflow-scroll">
              {data.data.description.split(" ").slice(0, 22).join(" ")}{" "}
              {showMore ? (
                <span> {data.data.description.split(" ").slice(22).join(" ")}</span>
              ) : (
                <span className="inline-block">
                  <span className="text-black" onClick={handleShowMore}>
                    ...Detaylı bilgi
                  </span>
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="w-full pe-2 ps-2 md:w-[13%] flex flex-row justify-around items-center md:flex-col md:items-start md:justify-center pb-3 md:pb-0 md:ps-0 md:pe-3">
          <button
            onClick={() => setIsTicketAdded(!isTicketAdded)}
            style={{opacity: isTicketAdded ? "0.5" : "1"}}
            className="px-12 md:w-full py-3 bg-[#FF0D87] text-white font-medium"
          >
            {isTicketAdded ? "Bilet Alındı" : "Bilet Al"}
          </button>

          <span
            className="flex text-[18px] 
        font-normal"
            onClick={() => setIsCalenderAdded(!isCalenderAdded)}
          >
            <span className="py-0 pe-2">
              {isCalenderAdded ? <CheckCircle style={{color: "#FF0D87"}} /> : <ControlPointIcon />}
            </span>
            {isCalenderAdded ? "Takvime Eklendi" : "Takvime Ekle"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
