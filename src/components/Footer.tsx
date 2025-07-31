import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000000",
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              LUXSTAY
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Lüks ve konforun buluştuğu otelimizde unutulmaz bir tatil deneyimi
              yaşayın.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <MuiLink href="#" color="inherit">
                <Facebook />
              </MuiLink>
              <MuiLink href="#" color="inherit">
                <Twitter />
              </MuiLink>
              <MuiLink
                href="https://www.instagram.com/yusuftopcuu0/?next=%2F"
                color="inherit"
              >
                <Instagram />
              </MuiLink>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Hızlı Bağlantılar
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <MuiLink component={Link} to="/" color="inherit" sx={{ mb: 1 }}>
                Ana Sayfa
              </MuiLink>
              <MuiLink
                component={Link}
                to="/rooms"
                color="inherit"
                sx={{ mb: 1 }}
              >
                Odalarımız
              </MuiLink>
              <MuiLink
                component={Link}
                to="/about"
                color="inherit"
                sx={{ mb: 1 }}
              >
                Hakkımızda
              </MuiLink>
              <MuiLink
                component={Link}
                to="/contact"
                color="inherit"
                sx={{ mb: 1 }}
              >
                İletişim
              </MuiLink>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              İletişim
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOn sx={{ mr: 1 }} />
              <Typography variant="body2">
                Yeni Mahalle, Yeni Cadde No:38, İstanbul / Türkiye
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Phone sx={{ mr: 1 }} />
              <Typography variant="body2">+90 538 252 51 38</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Email sx={{ mr: 1 }} />
              <Typography variant="body2">yusuf@gmail.com</Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{ mt: 4, pt: 3, borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} LUXSTAY. Tüm hakları saklıdır.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
