import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

const featuredProducts = [
  {
    id: 1,
    title: "Featured Product 1",
    description: "Description of Featured Product 1",
    image: "featured1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Featured Product 2",
    description: "Description of Featured Product 2",
    image: "featured2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Featured Product 3",
    description: "Description of Featured Product 3",
    image: "featured3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Featured Product 4",
    description: "Description of Featured Product 4",
    image: "featured4.jpg",
    link: "#",
  },
  // Add more featured products as needed
];

const colors = ["#ff5722", "#2196f3", "#4caf50", "#ffeb3b"]; // Different colors for each card

const FeaturedProducts = () => {
  

  return (
    <div style={{ padding: "20px" }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{
            marginBottom: "20px",
            color: "#333",
            textTransform: "uppercase",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          Featured Products
        </Typography>
      </motion.div>
      <Grid container spacing={4} justifyContent="center">
        {featuredProducts.slice(0, 4).map((product, index) => (
          <Grid item key={product.id}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "16px",
                width: "250px",
                height: "350px",
              }}
            >
              <motion.div
                initial={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
                whileHover={{
                  clipPath:
                    "polygon(0% 25%, 25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  backgroundColor: colors[index % colors.length],
                  zIndex: 1,
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)", // Add shadow effect
                }}
              />
              <Card sx={{ position: "relative", zIndex: 2 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Button
                    href={product.link}
                    variant="contained"
                    color="primary"
                  >
                    View Product
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeaturedProducts;
