import { Container } from "@mui/material";
import "./hero.style.css";

const HeroComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container disableGutters maxWidth={false}>
      <div className="landing-background">
        <div className="overlay">{children}</div>
      </div>
    </Container>
  );
};

export default HeroComponent;
