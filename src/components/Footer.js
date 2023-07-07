import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/adiirepositories/react-router-temp">
       adii
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            React Weather App
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {'Build with :'}
            {/* {'"@emotion/react": "^11.11.0" "@emotion/styled": "^11.11.0" "@fortawesome/fontawesome-free": "^6.4.0"'} */}
          </Typography>
          <Typography variant="body1">"react": "^16.13.1"</Typography>
          <Typography variant="body1">"react-dom": "^16.13.1"</Typography>
          <Typography variant="body1">"react-router-dom": "^5.2.0"</Typography>
          <Typography variant="body1">"@emotion/react": "^11.11.0"</Typography>
          <Typography variant="body1">"@emotion/styled": "^11.11.0"</Typography>
          <Typography variant="body1">"@fortawesome/fontawesome-free": "^6.4.0"</Typography>
          <Typography variant="body1">"@material-ui/core": "^4.10.0"</Typography>
          <Typography variant="body1">"sweetalert2": "^11.7.5"</Typography>
          <Typography variant="body1">"bootstrap": "^4.5.0"</Typography>
          <Typography variant="body1">"..."</Typography>
        </Container>
        <Box
          component="footer"
          sx={{
            
            py: 3,
            px: 2,
            mt: 'auto',
            opacity: 0.7,
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              My Repositories
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}