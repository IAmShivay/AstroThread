import React from 'react';
import { Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: '#f5f5f5', padding: '20px', minHeight: '200px' ,marginTop:"30px"}} // Adjusted minHeight for increased height
    >
      <Grid container justifyContent="space-between" spacing={2}>
        <Grid item>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}> {/* Styled the brand name */}
            AstroThread
          </Typography>
          <Typography variant="body2" gutterBottom>
            Address: 123 Street, City, Country
          </Typography>
          <Typography variant="body2" gutterBottom>
            Phone: +1234567890
          </Typography>
          <Typography variant="body2" gutterBottom>
            Email: info@astrothread.com
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" gutterBottom>
            <a href="/contact">Contact Us</a> | <a href="/about">About Us</a> | <a href="/refund-policy">Refund Policy</a> | <a href="/terms-and-conditions">Terms and Conditions</a>
          </Typography>
          <Grid container justifyContent="flex-end" spacing={2}>
            <Grid item>
              <img src="/appstore.png" alt="App Store" style={{ height: '50px' }} />
            </Grid>
            <Grid item>
              <img src="/playstore.png" alt="Play Store" style={{ height: '50px' }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Footer;
