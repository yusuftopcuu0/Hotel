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
  FaWifi,
  FaTv,
  FaCoffee,
  FaParking,
  FaSnowflake,
  FaSwimmingPool,
} from "react-icons/fa";
import { rooms } from "../data/rooms"; // Adjust the import path as necessary

const RoomCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
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
