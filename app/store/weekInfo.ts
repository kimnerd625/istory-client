import { create } from "zustand";

interface WeekInfo {
  weeks: number;
  info: string;
}

interface WeekInfoProps {
  weekInfo: WeekInfo | null;
  setWeekInfo: (newInfo: WeekInfo) => void;
}

const useWeekInfoStore = create<WeekInfoProps>((set)=>({
  weekInfo: null,

  /*
  { 
    weeks: number,
    info: string
  }
  */
  setWeekInfo : (newInfo: WeekInfo) => 
    set(() => ({
      weekInfo: newInfo
    }))
}));

export default useWeekInfoStore;