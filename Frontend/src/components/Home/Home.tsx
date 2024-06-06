import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import FeaturedProducts from "../Section/Featured Products/featuredProduct";
import Bestsellers from "../Section/BestSellers/bestSellers";

const products = [
  {
    id: 1,
    title: "Product 1",
    description: "Description of Product 1",
    image: "image1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description of Product 2",
    image:
      "https://unsplash.com/photos/woman-in-blue-blazer-and-black-framed-sunglasses-AYN-kdlk6Tg?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash@2x.png",
    link: "#",
  },
];

const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const CarouselComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 500,
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            variants={variants}
            initial="hidden"
            animate={index === currentIndex ? "visible" : "hidden"}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: index === currentIndex ? 1 : 0,
              opacity: index === currentIndex ? 1 : 0,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "80%",
                height: "80%",
                overflow: "hidden",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "70%",
                  objectFit: "cover",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                }}
              />
              <Box
                sx={{
                  padding: 3,
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {product.title}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  {product.description}
                </Typography>
                <Button
                  href={product.link}
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 2 }}
                >
                  Buy Now
                </Button>
              </Box>
            </Box>
          </motion.div>
        ))}
        <Button
          onClick={prevProduct}
          sx={{
            position: "absolute",
            top: "50%",
            left: 16,
            zIndex: 2,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            padding: "10px",
            minWidth: "40px",
            borderRadius: "50%",
            '&:hover': {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          &lt;
        </Button>
        <Button
          onClick={nextProduct}
          sx={{
            position: "absolute",
            top: "50%",
            right: 16,
            zIndex: 2,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            padding: "10px",
            minWidth: "40px",
            borderRadius: "50%",
            '&:hover': {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          &gt;
        </Button>
      </Box>
      <Box sx={{ padding: 3 }}>
        <FeaturedProducts />
      </Box>
      <Box sx={{ padding: 3 }}>
        <Bestsellers />
      </Box>
    </>
  );
};

export default CarouselComponent;
