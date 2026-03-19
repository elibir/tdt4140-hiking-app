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
    created_by: number,
    participants: number[],
    canceled: boolean,
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
  userType: string,
  id: number,
  username: string,
  first_name?: string, 
  last_name?: string,
  company_name?: string,
  email: string,
  hometown?: string,
  birthday?: Date,
  address?: string,
  tlf_no?: string,
}
