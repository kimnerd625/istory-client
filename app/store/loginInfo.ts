import { create } from "zustand";

interface LoginInfo {
  isRepresentative: boolean;
  userId: string;
}

interface LoginInfoProps {
  loginInfo: LoginInfo | null;
  setLoginInfo: (newInfo: LoginInfo) => void;
}

const useLoginInfoStore = create<LoginInfoProps>((set) => ({
  loginInfo: null,

  setLoginInfo: (newInfo: LoginInfo) =>
    set(() => ({
      loginInfo: newInfo,
    })),
}));

export default useLoginInfoStore;
