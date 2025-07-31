import React from "react";
import { Container, Typography, Grid, Box, Paper, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

const TeamMember = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  textAlign: "center",
});

const team = [
  {
    name: "Yusuf Topçu",
    position: "Genel Müdür",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ali Rıza Çelik",
    position: "Otel Yöneticisi",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Fatma Yılmaz",
    position: "Rezervasyon Sorumlusu",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },

  {
    name: "Ayşe Demir",
    position: "Konuk İlişkileri Müdürü",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    name: "Mehmet Kaya",
    position: "Şef",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Ebru Karakaya",
    position: "Barmen",
    image: "https://randomuser.me/api/portraits/women/99.jpg",
  },
  {
    name: "Zeynep Çiftçi",
    position: "Rezervasyon Asistanı",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    name: "Cemil Karaman",
    position: "Otel Temizlik Sorumlusu",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    name: "Fatih Ay",
    position: "Otel Güvenlik Sorumlusu",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
  },
  {
    name: "Hatice Yıldırım",
    position: "Otel Temizlik Personeli",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

const AboutPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, py: 2 }}>
      <StyledPaper elevation={3}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{ mb: 4, fontWeight: "bold" }}
        >
          Hakkımızda
        </Typography>

        <Typography
          variant="body1"
          paragraph
          align="justify"
          sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}
        >
          Hoş Geldiniz! 1995 yılından bu yana misafirlerimize unutulmaz bir
          konaklama deneyimi sunmanın gururunu yaşıyoruz. Eşsiz konumumuz, lüks
          olanaklarımız ve sıcak misafirperverliğimizle siz değerli
          misafirlerimizi ağırlamaktan mutluluk duyuyoruz.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ mt: 6, mb: 3, fontWeight: "bold" }}
        >
          Misyonumuz
        </Typography>
        <Typography
          variant="body1"
          paragraph
          align="justify"
          sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}
        >
          Misafirlerimize en yüksek standartlarda hizmet sunarak, onlara
          evlerindeymiş gibi hissettirmek ve unutulmaz anılar biriktirmelerini
          sağlamak temel misyonumuzdur.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ mt: 6, mb: 3, fontWeight: "bold" }}
        >
          Vizyonumuz
        </Typography>
        <Typography
          variant="body1"
          paragraph
          align="justify"
          sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}
        >
          Sektörde öncü ve tercih edilen bir marka olarak, sürdürülebilir turizm
          anlayışıyla büyümeye ve gelişmeye devam etmek.
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{ mt: 8, mb: 4, fontWeight: "bold" }}
        >
          Ekibimiz
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2, mb: 4 }}>
          {team.map((member, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <TeamMember>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: 150, height: 150, mb: 2 }}
                />
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: "bold" }}
                >
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.position}
                </Typography>
              </TeamMember>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ mt: 6, mb: 3, fontWeight: "bold" }}
        >
          Bizi Neden Tercih Etmelisiniz?
        </Typography>
        <ul
          style={{ paddingLeft: "20px", fontSize: "1.1rem", lineHeight: 1.8 }}
        >
          <li>Merkezi konumda şık ve modern tasarım</li>
          <li>Deneyimli ve profesyonel personel</li>
          <li>24 saat oda servisi</li>
          <li>Ücretsiz yüksek hızlı Wi-Fi</li>
          <li>Spa ve wellness olanakları</li>
          <li>Lezzetli yerel ve uluslararası mutfak seçenekleri</li>
        </ul>
      </StyledPaper>
    </Container>
  );
};

export default AboutPage;
