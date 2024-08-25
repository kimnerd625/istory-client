import { create } from "zustand";

const useUserInfoStore = create((set)=>({
  userInfo: null,

  /*
  { 
    userId: string,
    userName: string,
    userPhone: string,
    userGender: string,
    userBirth: string,
    userType: string,
    userProfile: string,
    familyKey: string

  }
  */
  setUserInfo : (newInfo: {
    userId: string,
    userName: string,
    userPhone: string,
    userGender: string,
    userBirth: string,
    userType: string,
    userProfile: string,
    familyKey: string
  }) => 
    
    set(() => ({
      userInfo: newInfo
    }))
}));

export default useUserInfoStore;