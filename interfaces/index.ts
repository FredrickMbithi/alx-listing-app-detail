export interface Address {
  city: string;
  country: string;
}

export interface Host {
  name: string;
  avatar: string;
  bio?: string;
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date?: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  address: Address;
  images: string[];
  description: string;
  category: string[];
  price: number;
  host: Host;
  reviews: Review[];
}

export default PropertyProps;
