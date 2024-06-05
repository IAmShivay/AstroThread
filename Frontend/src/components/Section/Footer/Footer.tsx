import React from 'react';
import { Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: '#E5E5E5', color: '#000', padding: '30px 20px',marginTop:"20px"}}
    >
      <Grid container justifyContent="space-between">
        <Grid item xs={12} md={4} style={{ marginBottom: '20px' }}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
            Explore
          </Typography>
          <Typography variant="body2" gutterBottom>
            Men
          </Typography>
          <Typography variant="body2" gutterBottom>
            Women
          </Typography>
          <Typography variant="body2" gutterBottom>
            Kids
          </Typography>
          <Typography variant="body2" gutterBottom>
            Accessories
          </Typography>
          <Typography variant="body2" gutterBottom>
            Stores
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} style={{ marginBottom: '20px' }}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
            Support
          </Typography>
          <Typography variant="body2" gutterBottom>
            Customer Service
          </Typography>
          <Typography variant="body2" gutterBottom>
            Returns
          </Typography>
          <Typography variant="body2" gutterBottom>
            Shipping
          </Typography>
          <Typography variant="body2" gutterBottom>
            FAQs
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
            Contact
          </Typography>
          <Typography variant="body2" gutterBottom>
            Email: info@bata.com
          </Typography>
          <Typography variant="body2" gutterBottom>
            Phone: 123-456-7890
          </Typography>
          <Typography variant="body2" gutterBottom>
            Address: 123 Street, City, Country
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center" style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>Download Our App</Typography>
          <motion.img src="/appstore.png" alt="App Store" style={{ height: '30px', marginRight: '10px', transition: 'transform 0.3s ease-in-out' }} whileHover={{ scale: 1.1 }} />
          <motion.img src="/playstore.png" alt="Play Store" style={{ height: '30px', marginRight: '10px', transition: 'transform 0.3s ease-in-out' }} whileHover={{ scale: 1.1 }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>Follow Us On</Typography>
          <Grid container justifyContent="flex-start">
            <Grid item>
              <motion.img src="/facebook.png" alt="Facebook" style={{ height: '30px', marginRight: '10px', transition: 'transform 0.3s ease-in-out' }} whileHover={{ scale: 1.1 }} />
            </Grid>
            <Grid item>
              <motion.img src="/twitter.png" alt="Twitter" style={{ height: '30px', marginRight: '10px', transition: 'transform 0.3s ease-in-out' }} whileHover={{ scale: 1.1 }} />
            </Grid>
            <Grid item>
              <motion.img src="/instagram.png" alt="Instagram" style={{ height: '30px', marginRight: '10px', transition: 'transform 0.3s ease-in-out' }} whileHover={{ scale: 1.1 }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body2" gutterBottom>© 2024 Your Company. All rights reserved.</Typography>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <motion.img src="/visa.png" alt="Visa" style={{ height: '30px', marginRight: '10px', transition: 'transform 0.3s ease-in-out' }} whileHover={{ scale: 1.1 }} />
            </Grid>
            <Grid item>
              <motion.img src="/rupay.png" alt="Rupay" style={{ height: '30px', marginRight: '10px', transition: 'transform 0.3s ease-in-out' }} whileHover={{ scale: 1.1 }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Footer;
