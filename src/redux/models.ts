export type Role = {
  id: number;
  name: string;
  description: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type User = {
  _id: number;
  name: string;
  phone: number;
  city: string;
  address: string;
  password?: string;
  mail: string;
  role?: string;
  basket: IBasket[];
};

export interface IBasket {
  _id: string;
  name: string;
  image: string;
  info: string;
  price: string;
}
