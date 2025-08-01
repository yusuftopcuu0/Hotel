import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LuxuryRooms from "../images/luxury-rooms.jpg";
import Spa from "../images/hotel-spa.jpg";
import FineDining from "../images/fine-dining.jpg";

import Hotel from "../images/bg-1.jpeg";

export default function HomePage() {
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ mt: 8 }}>
      <Box
        sx={{
          backgroundImage: `url(${Hotel})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          px: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Luxstay Hotels'e Hoş Geldiniz
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
            Birinci sınıf otel odalarımızda ve süitlerimizde lüks, konfor ve üst
            düzey konukseverlik yaşayın.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/booking")}
            sx={{ fontWeight: "bold" }}
          >
            Şimdi Rezervasyon Yap
          </Button>
        </Box>
      </Box>

      <Container sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Neden Bizi Seçmelisiniz?
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 6, color: "text.secondary" }}
        >
          Konaklamanızı unutulmaz kılmak için en iyi hizmetleri sunuyoruz.
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              title: "Lüks Odalar",
              desc: "Nefes kesen manzaralı zarif ve ferah odalar.",
              img: LuxuryRooms,
            },
            {
              title: "Spa & Sağlık",
              desc: "Modern sağlık merkezimizde rahatlayın ve gençleşin.",
              img: Spa,
            },
            {
              title: "İyi yemek",
              desc: "Birinci sınıf şefler tarafından hazırlanmış gurme yemeklerinin tadını çıkarın.",
              img: FineDining,
            },
          ].map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.img}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        sx={{
          bgcolor:
            theme.palette.mode === "dark" ? "black" : theme.palette.grey[50],
          py: 8,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Hayalinizdeki tatil için hazır mısınız?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Oda seçeneklerimizi keşfedin ve mükemmel konaklama bulun.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => navigate("/rooms")}
        >
          Odaları Görüntüle
        </Button>
      </Box>
    </Box>
  );
}
