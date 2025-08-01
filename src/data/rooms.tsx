import {
  FaBed,
  FaRulerCombined,
  FaWifi,
  FaTv,
  FaCoffee,
  FaSnowflake,
  FaSwimmingPool,
} from "react-icons/fa";

import Standartoom from "../images/standart-room.jpg";
import Suit from "../images/hotel-suit.jpg";
import Terrace from "../images/hotel-terrace.jpg";

export interface RoomDetail {
  icon: React.ReactNode;
  text: string;
}

export interface Room {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  capacity: string;
  size: string;
  rating: number;
  amenities: string[];
  details: RoomDetail[];
  type: string;
}

export const rooms: Room[] = [
  {
    id: 1,
    title: "Standart Oda",
    description:
      "Konforlu ve şık dekore edilmiş standart odamızda rahat bir konaklama deneyimi yaşayın.",
    price: "₺1.200",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
    capacity: "2 Kişilik",
    size: "25 m²",
    rating: 4.2,
    amenities: ["wifi", "tv", "ac", "minibar"],
    details: [
      { icon: <FaBed />, text: "1 Çift Kişilik Yatak" },
      { icon: <FaRulerCombined />, text: "25 m²" },
      { icon: <FaWifi />, text: "Ücretsiz WiFi" },
    ],
    type: "standart",
  },
  {
    id: 2,
    title: "Aile Odası",
    description:
      "Geniş ve ferah aile odamız ailenizle birlikte keyifli vakit geçirmeniz için tasarlandı.",
    price: "₺1.800",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    capacity: "4 Kişilik",
    size: "40 m²",
    rating: 4.7,
    amenities: ["wifi", "tv", "ac", "minibar", "parking"],
    details: [
      { icon: <FaBed />, text: "1 Çift + 2 Tek Kişilik Yatak" },
      { icon: <FaRulerCombined />, text: "40 m²" },
      { icon: <FaCoffee />, text: "Kahve Makinesi" },
    ],
    type: "family",
  },
  {
    id: 3,
    title: "Suit Oda",
    description:
      "Lüks ve konforun buluştuğu süit odamızda özel jakuzi ve şehir manzarası sizi bekliyor.",
    price: "₺2.500",
    image: Suit,
    capacity: "2 Kişilik",
    size: "45 m²",
    rating: 4.9,
    amenities: ["wifi", "tv", "ac", "minibar", "parking", "pool"],
    details: [
      { icon: <FaBed />, text: "1 Kingsize Yatak" },
      { icon: <FaRulerCombined />, text: "45 m²" },
      { icon: <FaSwimmingPool />, text: "Havuz Manzarası" },
    ],
    type: "suite",
  },
  {
    id: 4,
    title: "Deluxe Oda",
    description:
      "Geniş oturma alanı ve modern tasarımı ile lüks bir deneyim yaşayın.",
    price: "₺2.200",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    capacity: "2 Kişilik",
    size: "35 m²",
    rating: 4.6,
    amenities: ["wifi", "tv", "ac", "parking", "minibar"],
    details: [
      { icon: <FaBed />, text: "1 Çift Kişilik Yatak" },
      { icon: <FaRulerCombined />, text: "35 m²" },
      { icon: <FaCoffee />, text: "Nespresso Makinesi" },
    ],
    type: "deluxe",
  },
  {
    id: 5,
    title: "Teraslı Oda",
    description: "Geniş teraslı odamızda gün batımının keyfini çıkarın.",
    price: "₺2.800",
    image: Terrace,
    capacity: "2 Kişilik",
    size: "50 m²",
    rating: 4.8,
    amenities: ["wifi", "tv", "ac", "pool", "minibar"],
    details: [
      { icon: <FaBed />, text: "1 King Yatak" },
      { icon: <FaRulerCombined />, text: "50 m²" },
      { icon: <FaSnowflake />, text: "Klima" },
    ],
    type: "terrace",
  },
  {
    id: 6,
    title: "Ekonomik Oda",
    description: "Uygun fiyatlı, sade ama konforlu bir konaklama seçeneği.",
    price: "₺900",
    image: Standartoom,
    capacity: "1-2 Kişilik",
    size: "20 m²",
    rating: 3.9,
    amenities: ["wifi", "tv", "ac"],
    details: [
      { icon: <FaBed />, text: "2 Tek Kişilik Yatak" },
      { icon: <FaRulerCombined />, text: "20 m²" },
      { icon: <FaTv />, text: "Uydu Yayını" },
    ],
    type: "economy",
  },
];

export const roomTypes = [
  { value: "standart", label: "Standart Oda" },
  { value: "family", label: "Aile Odası" },
  { value: "suite", label: "Suit Oda" },
  { value: "deluxe", label: "Deluxe Oda" },
  { value: "terrace", label: "Teraslı Oda" },
  { value: "economy", label: "Ekonomik Oda" },
];
