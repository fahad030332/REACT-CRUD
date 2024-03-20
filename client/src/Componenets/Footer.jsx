import React from 'react';
import { Typography, Container, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box sx={{ mt: 5, py: 3, backgroundColor: '#131414', textAlign: 'center', height:"40%" }}>
      <Container>
        <Typography variant="body2" color="#f0fafa" fontSize="20px">
          www.Itfiers.com
        </Typography>
        <Box sx={{ mt: 2 }}>
          {/* Facebook Icon */}
          <IconButton
            href="https://www.facebook.com/your-facebook-page"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            <FacebookIcon />
          </IconButton>
          {/* Twitter Icon */}
          <IconButton
            href="https://twitter.com/your-twitter-account"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            <TwitterIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;