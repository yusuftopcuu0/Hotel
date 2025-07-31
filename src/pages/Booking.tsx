import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "",
  });

  const roomTypes = [
    "Standart",
    "Aile",
    "Suite",
    "Deluxe",
    "Teraslı",
    "Ekonomik",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { fullName, email, checkIn, checkOut, guests, roomType } = formData;

    // Boş alan kontrolü
    if (
      !fullName.trim() ||
      !email.trim() ||
      !checkIn ||
      !checkOut ||
      !guests ||
      !roomType
    ) {
      toast.error("Lütfen tüm alanları doldurun!");
      return;
    }

    // Başarılı rezervasyon
    console.log("Booking data submitted:", formData);
    toast.success("Rezervasyon başarıyla yapıldı!");

    // Formu sıfırla
    setFormData({
      fullName: "",
      email: "",
      checkIn: "",
      checkOut: "",
      guests: 1,
      roomType: "",
    });
  };

  return (
    <Container sx={{ mt: 10, mb: 10 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
        >
          Rezervasyon Yap
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
          Konaklamanızı ayırtmak için lütfen aşağıdaki bilgileri doldurun.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                required
                label="Ad Soyad"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                required
                type="email"
                label="E-Mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                required
                type="date"
                label="Giriş Tarihi"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                required
                type="date"
                label="Çıkış Tarihi"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                required
                label="Konaklayan Kişi Sayısı"
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                inputProps={{ min: 1 }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                select
                fullWidth
                required
                label="Oda Tipi"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
              >
                {roomTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                size="large"
                sx={{ mt: 2 }}
              >
                Rezervasyon Yap
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
