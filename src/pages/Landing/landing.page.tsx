import { Box } from "@mui/material";
import HeroComponent from "./components/hero.component";
import { CarouselImage } from "./components/carousel.component";
import GeneratedText from "./components/generated-text.component";

const LandingPage = () => {
  return (
    <Box>
      <HeroComponent>
        <CarouselImage />
      </HeroComponent>
      <GeneratedText />
    </Box>
  );
};

export default LandingPage;
