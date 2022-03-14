export interface Trip {
    id: number,
    name: string,
    description: string,
    location: string,
    date_time: Date,
    created_at: Date,
    difficulty: number,
    capacity: number,
}
export interface INavItems {
  title: string,
  link: string,
  component: JSX.Element,
};
export interface LoginDetails {
  user?: User,
  token?: string,
  success: boolean,
};
export interface User {
    brukerID: number,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    hometown: string,
    //birthday: Date,
}
