import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import img1 from '../Data/HomeIng/Earbuds.jpg';
import img2 from '../Data/HomeIng/stand.png';
import img3 from '../Data/HomeIng/speaker.png';

const products = [
  {
    id: 1,
    title: "Wireless Earbuds",
    image: img1,
    price: "$39.99",
  },
  {
    id: 2,
    title: "Smartphone Stand",
    image: img2,
    price: "$14.99",
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    image: img3,
    price: "$79.99",
  },
];

const FlashSaleSection = () => {
  // Store the sale end time once using useRef
  const saleEndTime = useRef(Date.now() + 4 * 60 * 60 * 1000); // 4 hours from now

  const calculateTimeLeft = () => {
    const difference = saleEndTime.current - Date.now();
    return difference > 0 ? difference : 0;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const s = String(totalSeconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <Box
      sx={{
        py: 6,
        px: 3,
        background: "linear-gradient(90deg, #fceabb 0%, #f8b500 100%)",
        borderRadius: 3,
        mt: 5,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        color="black"
        textAlign="center"
        mb={1}
      >
        🔥 Limited Time Offer
      </Typography>
      <Typography variant="h6" color="text.primary" textAlign="center" mb={3}>
        Ends in <strong>{formatTime(timeLeft)}</strong>
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 5,
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  height="200"
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {product.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    color="error"
                    fontWeight={800}
                    gutterBottom
                  >
                    {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      mt: 2,
                      background:
                        "linear-gradient(90deg, #ff8a00 0%, #da1b60 100%)",
                      fontWeight: 700,
                      color: "#fff",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #e07000 0%, #c2175b 100%)",
                      },
                    }}
                  >
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FlashSaleSection;
