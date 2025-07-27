import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const ColorCycleSpinner = () => {
  const colors = ["#0094AA", "#CDCE00","#F49600"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % colors.length);
    }, 750); // cambia cada 500ms
    return () => clearInterval(interval);
  }, [colors.length]);

  return (
    <Spinner
      animation="grow"
      style={{ color: colors[index], marginTop: "20px" }}
    />
  );
};

export default ColorCycleSpinner;