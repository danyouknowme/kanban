export interface IUserState {
  authUser: IUser | null;
}

export interface IUser {
  id: string;
  email: string;
  fullName: string;
  googleId: string;
  picture: string;
}
