// MUI
import { Box, Container, Grid, Typography } from '@mui/material';
// layout
import DashboardLayout from 'src/layouts/dashboard/DashboardLayout';
// Components
import AccountProfile from 'src/components/account/AccountProfile';
import AccountProfileDetails from 'src/components/account/AcccountProfileDetails';


// Next JS
import Head from 'next/head';

// ----------------------------------------------------------------------

PagePerfil.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function PagePerfil() {

  return (
    <>
      <Head>
        <title>Perfil | Noman</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{ mb: 3 }}
            variant="h4"
          >
            Cuenta
          </Typography>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <AccountProfile />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <AccountProfileDetails />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}