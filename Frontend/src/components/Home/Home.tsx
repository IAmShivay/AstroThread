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
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
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
        perspective: "1000px",
      }}
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          variants={variants}
          initial="hidden"
          animate={index === currentIndex ? "visible" : "hidden"}
          transition={{ ease: "easeInOut", duration: 1 }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `rotateY(${index - currentIndex}deg)`,
            zIndex: index === currentIndex ? 1 : 0,
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transform: "translateZ(100px)",
            }}
          />
          <Box
            sx={{
              textAlign: "center",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: 2,
              transform: "translateZ(50px)",
            }}
          >
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Button href={product.link} variant="contained" color="primary">
              Buy Now
            </Button>
          </Box>
        </motion.div>
      ))}
      <Button
        onClick={prevProduct}
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          zIndex: 2,
          transform: "translateY(-50%)",
        }}
      >
        &lt;
      </Button>
      <Button
        onClick={nextProduct}
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          zIndex: 2,
          transform: "translateY(-50%)",
        }}
      >
        &gt;
      </Button><br/>
      
    </Box>
    <FeaturedProducts/><br/>
    <Bestsellers/>
    </>
  );
};

export default CarouselComponent;
