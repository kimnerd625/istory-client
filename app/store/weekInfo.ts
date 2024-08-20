import { create } from "zustand";

const useWeekInfoStore = create((set)=>({
  weekInfo: null,

  /*
  { 
    weeks: number,
    info: string
  }
  */
  setWeekInfo : (newInfo: {weeks: number, info: string}) => 
    set(() => ({
      weekInfo: newInfo
    }))
}));

export default useWeekInfoStore;