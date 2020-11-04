import React from "react";
import { Grid } from "@chakra-ui/core";

// Inspiration => https://dribbble.com/shots/4541416-Nike-Vapormax-Product-Page-Motion/attachments/4541416-Nike-Vapormax-Product-Page-Motion?mode=media

/**
 * The base layout for the MDX pages. You can configure this to set how your pages layout should be.
 */
const MDXLayout = ({ children }) => {
  return (
    <Grid
      templateColumns={['1fr', '10% 1fr 1fr 10% ']}
      templateRows="10% 1fr 1fr"
      templateAreas={`
      'icon   .       .         .'
      '.      text    product   .'
      '.      rest    rest      .'
      `}
      bg="brand.background"
      h="100vh"
    >
      {children}
    </Grid>
  );
};

export default MDXLayout;