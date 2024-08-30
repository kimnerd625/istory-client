import { create } from "zustand";

interface WeekInfo {
  weeklyNum: number;
  missionContents: string;
  familymissionNo: string;
  showCheck: boolean;
}

interface WeekInfoProps {
  weekInfo: WeekInfo | null;
  setWeekInfo: (newInfo: WeekInfo) => void;
}

const useWeekInfoStore = create<WeekInfoProps>((set) => ({
  weekInfo: null,

  setWeekInfo: (newInfo: WeekInfo) =>
    set(() => ({
      weekInfo: newInfo,
    })),
}));

export default useWeekInfoStore;
