export interface Trip {
    name: string,
    description: string,
    location: string,
    date: Date,
    capacity: number,
}
export interface INavItems {
  title: string,
  link: string,
  commponent: JSX.Element,
};
export interface LoginDetails {
  user?: string,
  token?: string,
  success: boolean,
};
export interface User {
    brukerID: number,
    name: string,
    username: string,
    email: string,
    home: string
}
