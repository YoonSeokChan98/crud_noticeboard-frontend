export interface SignupType {
  userName: string;
  userSocialId: string;
  userPassword: string;
}

export interface LoginType {
  userSocialId: string;
  userPassword: string;
}

export interface getUserDataType {
  userName: string;
  userSocialId: string;
}

export interface UserStateType {
  isLoggedIn: boolean;
  userInfo: {
    userId: Number;
    userName: string;
    userSocialId: string;
    userToken: string;
  } | null;
}

export interface PostType {
  userSocialId: string | undefined;
  postTitle: string;
  postContent: string;
  // postStatus: string;
}

export interface GetPostType {
  item: {
    createdAt: string;
    id: number;
    postContent: string;
    postStatus: string;
    postTitle: string;
    updatedAt: string;
    userId: number;
  };
}

export interface EditPostType {
  postTitle: string;
  postContent: string;
  id: number;
}

export interface DeletePostType {
  id: number;
  postStatus: string;
}
