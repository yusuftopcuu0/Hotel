// import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Chip,
  Rating,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  FaBed,
  FaRulerCombined,
  FaWifi,
  FaTv,
  FaCoffee,
  FaParking,
  FaSnowflake,
  FaSwimmingPool,
} from "react-icons/fa";

import Standartoom from "../images/standart-room.jpg";
import Suit from "../images/hotel-suit.jpg";
import Terrace from "../images/hotel-terrace.jpg";

// styled componentler
const RoomCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  // borderRadius: theme.shape.borderRadius * 2,
  borderRadius: Number(theme.shape.borderRadius) * 2,
  overflow: "hidden",
  transition: "all 0.3s ease-in-out",
  boxShadow: theme.shadows[2],
  border: `1px solid ${theme.palette.grey[200]}`,
  position: "relative",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
    borderColor: theme.palette.primary.main,
  },
}));

const PriceTag = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 16,
  right: 16,
  backgroundColor: theme.palette.primary.main,
  color: "white",
  padding: theme.spacing(0.5, 2),
  borderRadius: 20,
  fontWeight: 600,
  boxShadow: theme.shadows[2],
  zIndex: 1,
}));

const AmenityChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  "& .MuiChip-icon": {
    color: theme.palette.primary.main,
  },
}));

// Tür tanımları
interface RoomDetail {
  icon: React.ReactNode;
  text: string;
}

interface Room {
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

// Room verileri
const rooms: Room[] = [
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

// Simgeleri döndüren yardımcı fonksiyon
const getAmenityIcon = (amenity: string) => {
  switch (amenity) {
    case "wifi":
      return <FaWifi />;
    case "tv":
      return <FaTv />;
    case "ac":
      return <FaSnowflake />;
    case "parking":
      return <FaParking />;
    case "pool":
      return <FaSwimmingPool />;
    default:
      return <FaCoffee />;
  }
};

const RoomsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "background.paper", py: 8, pt: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom fontWeight={700}>
          Lüks Konaklama Deneyimi
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={4}>
          Konfor ve lüksün buluştuğu odalarımızda unutulmaz bir konaklama
          deneyimi yaşayın.
        </Typography>

        <Grid container spacing={4}>
          {rooms.map((room) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={room.id}>
              <RoomCard>
                <Box position="relative">
                  <CardMedia
                    component="img"
                    height="220"
                    image={room.image}
                    alt={room.title}
                    sx={{
                      transition: "transform 0.5s ease",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  />
                  <PriceTag>
                    {room.price}
                    <span style={{ fontSize: "0.8em", opacity: 0.8 }}>
                      /gece
                    </span>
                  </PriceTag>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={1}
                  >
                    <Typography variant="h5" fontWeight={600}>
                      {room.title}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Rating
                        value={room.rating}
                        precision={0.1}
                        readOnly
                        size="small"
                      />
                      <Typography variant="body2" ml={0.5}>
                        {room.rating}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{ minHeight: "60px" }}
                  >
                    {room.description}
                  </Typography>

                  <Box mb={2}>
                    <Grid container spacing={1}>
                      {room.details.map((detail, i) => (
                        <Grid size={{ xs: 6, sm: 6, md: 4 }} key={i}>
                          <Box display="flex" alignItems="center">
                            <Box color="primary.main" mr={1}>
                              {detail.icon}
                            </Box>
                            <Typography variant="body2">
                              {detail.text}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  <Box display="flex" flexWrap="wrap">
                    {room.amenities
                      .slice(0, isMobile ? 3 : 4)
                      .map((amenity, i) => (
                        <AmenityChip
                          key={i}
                          icon={getAmenityIcon(amenity)}
                          label={
                            amenity.charAt(0).toUpperCase() + amenity.slice(1)
                          }
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    {room.amenities.length > (isMobile ? 3 : 4) && (
                      <Chip
                        size="small"
                        label={`+${room.amenities.length - (isMobile ? 3 : 4)}`}
                        sx={{ ml: 0.5, mt: 0.5 }}
                      />
                    )}
                  </Box>
                </CardContent>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{
                    mt: "auto",
                    py: 1.5,
                    borderRadius: 0,
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "1rem",
                    "&:hover": {
                      transform: "none",
                      boxShadow: theme.shadows[4],
                    },
                  }}
                >
                  Rezervasyon Yap
                </Button>
              </RoomCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default RoomsPage;
