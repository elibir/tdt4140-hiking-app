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
  component: JSX.Element,
};

export interface User {
    brukerID: number,
    name: string,
    username: string,
    email: string,
    home: string
}
