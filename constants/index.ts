import { PropertyProps } from "../interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "sample-property",
    rating: 4.8,
    address: { city: "Nairobi", country: "Kenya" },
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a6a6a04b17?w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
    ],
    description:
      "A beautiful modern apartment located in the heart of the city with easy access to attractions. Comfortable beds, fast Wi-Fi and a sunny balcony.",
    category: ["Wifi", "Kitchen", "Free parking", "Pool", "Air conditioning"],
    price: 120,
    host: {
      name: "Jane Doe",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Superhost with 5 years of experience hosting travelers.",
    },
    reviews: [
      { name: "Alex", avatar: "https://randomuser.me/api/portraits/men/32.jpg", rating: 5, comment: "Fantastic stay, very clean and well located." },
      { name: "Maya", avatar: "https://randomuser.me/api/portraits/women/68.jpg", rating: 4, comment: "Great host and comfortable bed." },
      { name: "Sam", avatar: "https://randomuser.me/api/portraits/men/41.jpg", rating: 5, comment: "Exceptional hospitality and attention to detail." },
      { name: "Nora", avatar: "https://randomuser.me/api/portraits/women/12.jpg", rating: 4, comment: "Nice apartment, had everything we needed." },
    ],
  },
];

export default PROPERTYLISTINGSAMPLE;
