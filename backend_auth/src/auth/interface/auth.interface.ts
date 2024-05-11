export interface User {
  id: number;
  email: string;
  password: string;
}



export type URegister = Pick<User,  'email' | 'password'>;
export type ULogin = Pick<User, 'email' | 'password'>;
export type UToken = Pick<User, 'id'>;
