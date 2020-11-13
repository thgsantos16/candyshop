import { AxiosResponse } from 'axios';

export interface Tree extends Object {
  category?: string;
  url?: string;
  checked?: boolean;
  title?: string;
  children?: Array<Tree>;
}

export interface Token extends AxiosResponse {
  token: string;
  token_type: string;
  expires_in: BigInteger;
}

export interface Title extends Object {
  page: string;
  class?: string;
  help?: string;
  showAdd?: boolean;
}

export interface Model extends Object {
  id: BigInteger;
  name: string;
  uuid: string;
  creator: BigInteger;
  status: string;
  description?: Text;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  category?: string;
}

export interface Content extends Object {
  id: BigInteger;
  name: string;
  uuid: string;
  creator: BigInteger;
  model: BigInteger;
  status: string;
  description?: Text;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  category?: string;
}

export interface User extends Object {
  id: BigInteger;
  firstname: string;
  lastname: string;
  nickname?: string;
  username?: string;
  email: string;
  password: string;
  role: BigInteger;
  subscription: BigInteger;
  status: string;
  birthday?: Date;
  picture: CharacterData;
  description?: Text;
  subscription_at: Date;
  subscription_last: Date;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  category?: string;
}
