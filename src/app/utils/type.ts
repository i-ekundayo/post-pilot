import { LucideIcon } from "lucide-react";

export type CardProp = {
  title: string;
  percentage: string;
  icon: LucideIcon;
  iconColor: string;
  url: string;
  dataPromise: Promise<unknown>;
} & Omit<FetchProp, "url">;

export type FetchProp = {
  url: string;
  limit?: number;
  page?: number;
};

export type Posts = {
  body: string;
  title: string;
  id: number;
  userId: number;
};

export type Geo = {
  lat: string;
  lng: string;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type Authors = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type LearnCardData = {
  number: string;
  heading: string;
  subheading: string;
};
