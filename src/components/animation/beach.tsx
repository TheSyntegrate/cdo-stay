import Lottie from "lottie-react";
import beach from "../../assets/images/beach.json";

export default function Beach() {
  return (
    <Lottie
      animationData={beach}
      style={{ maxWidth: "80%", height: "auto", borderWidth: 0 }}
      loop={true}
    />
  );
}
