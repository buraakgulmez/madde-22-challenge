import {createSlice} from "@reduxjs/toolkit";

const eventsDefault = [
  {
    id: 1,
    title: "BKM Yaz Etkinlikleri: Zengin Mutfağı",
    description:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta'yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ullam!.",
    location: "Maximum UNIQ Box",
    type: "tiyatro",
    date: "7 Eylül Salı 21:15",
    src: "/images/usta-oyuncu.png",
  },
  {
    id: 2,
    title: "Yasemin Sakallıoğlu",
    description:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta'yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ullam!.",
    location: "Maximum UNIQ Lounge",
    type: "stand-up",
    date: "7 Eylül Salı 21:15",
    src: "/images/yasemin.png",
  },
  {
    id: 3,
    title: "Sinema Keyfi:Rifkin's Festival",
    description:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta'yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ullam!.",
    location: "Maximum UNIQ Hall",
    type: "sinema",
    date: "7 Eylül Salı 21:15",
    src: "/images/kin.png",
  },
  {
    id: 4,
    title: "BKM Yaz Etkinlikleri: Zengin Mutfağı",
    description:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta'yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ullam!.",
    location: "Maximum UNIQ Box",
    type: "konser",
    date: "7 Eylül Salı 21:15",
    src: "/images/usta-oyuncu.png",
  },
  {
    id: 5,
    title: "Yasemin Sakallıoğlu",
    description:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta'yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ullam!.",
    location: "Maximum UNIQ Lounge",
    type: "stand-up",
    date: "7 Eylül Salı 21:15",
    src: "/images/yasemin.png",
  },
  {
    id: 6,
    title: "Sinema Keyfi:Rifkin's Festival",
    description:
      "1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta'yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ullam!.",
    location: "Maximum UNIQ Açıkhava",
    type: "sinema",
    date: "7 Eylül Salı 21:15",
    src: "/images/rifkin.png",
  },
];

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    events: eventsDefault,
    type: "all",
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

// Action creators are generated  for each case reducer function
export const {setType} = eventSlice.actions;

export default eventSlice.reducer;
