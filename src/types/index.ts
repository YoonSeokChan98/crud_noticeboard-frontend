export interface SignupType {
  userName: string;
  userSocialId: string;
  userPassword: string;
}

export interface LoginType {
  userSocialId: string;
  userPassword: string;
}

export interface UserStateType {
  isLoggedIn: boolean;
  userInfo: {
    userName: string;
    userSocialId: string;
    userToken: string;
  } | null;
}
