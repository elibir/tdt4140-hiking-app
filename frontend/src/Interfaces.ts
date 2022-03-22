export interface Trip {
    id: number,
    name: string,
    description: string,
    location: string,
    date_time: Date,
    time: Date,
    created_at: Date,
    difficulty: number,
    capacity: number,
    created_by: User,
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
    username: string,
    email: string,
}
export interface PrivateUser {
  brukerID: number,
  first_name: string,
  last_name: string,
  username: string,
  email: string,
  hometown: string,
  birthday: Date,
}
export interface CompanyUser {
  brukerID: number,
  username: string,
  email: string,
  company_name: string,
  address: string,
  tlf_no: string,
}
