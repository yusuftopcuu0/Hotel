import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemleri buraya eklenecek
    console.log("Form gönderildi:", formData);
    setOpenSnackbar(true);
    // Formu temizle
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg" sx={{ pt: 11, pb: 5 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        align="center"
        sx={{ mb: 6, fontWeight: "bold" }}
      >
        İletişim
        <hr />
      </Typography>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <StyledPaper elevation={3}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ mb: 4, fontWeight: "bold" }}
            >
              Bize Ulaşın
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                <Typography> Nişantaşı / İstanbul </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <PhoneIcon color="primary" sx={{ mr: 2 }} />
                <Typography>+90 538 252 51 38</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <EmailIcon color="primary" sx={{ mr: 2 }} />
                <Typography>luxstayhotel@gmail.com</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", mt: 4 }}>
                <AccessTimeIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
                <div>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    Çalışma Saatleri:
                  </Typography>
                  <Typography>Pazartesi - Cuma: 08:00 - 22:00</Typography>
                  <Typography>Cumartesi - Pazar: 09:00 - 20:00</Typography>
                </div>
              </Box>
            </Box>

            <Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385398.5898035208!2d28.731991799999998!3d41.0055005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "8px" }}
                loading="lazy"
                title="Konum Haritası"
              ></iframe>
            </Box>
          </StyledPaper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <StyledPaper elevation={3}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ mb: 4, fontWeight: "bold" }}
            >
              Mesaj Gönderin
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    label="Adınız Soyadınız"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    label="E-posta Adresiniz"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    required
                    fullWidth
                    label="Konu"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={6}
                    label="Mesajınız"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{ py: 1.5 }}
                  >
                    Mesajı Gönder
                  </Button>
                </Grid>
              </Grid>
            </form>
          </StyledPaper>
        </Grid>
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime
          geçeceğiz.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactPage;
