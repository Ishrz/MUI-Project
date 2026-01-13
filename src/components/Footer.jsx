import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        py: 2,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2, md: 4 }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'flex-start' }}
        >
          {/* Links Section */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 3 }}
            alignItems={{ xs: 'center', sm: 'flex-start' }}
          >
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ fontSize: '0.875rem' }}
            >
              About
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ fontSize: '0.875rem' }}
            >
              Contact
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ fontSize: '0.875rem' }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ fontSize: '0.875rem' }}
            >
              Terms
            </Link>
          </Stack>

          {/* Social Media Section */}
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton
              aria-label="Facebook"
              color="inherit"
              size="small"
              href="#"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              color="inherit"
              size="small"
              href="#"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              color="inherit"
              size="small"
              href="#"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              color="inherit"
              size="small"
              href="#"
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Divider sx={{ my: 2, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Copyright Section */}
        <Typography
          variant="body2"
          align="center"
          sx={{ fontSize: '0.75rem', opacity: 0.9 }}
        >
          © {currentYear} MUI Project. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

