import "./componente1.scss";
import { ArrowBigLeftDash, ArrowBigRightDash, Home } from "lucide-react";
import { Fields } from "./Fields/Fields";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const Componente1 = ({ stage, setSelectedStage, selectedStage }) => {
  const [direction, setDirection] = useState(1);

  const controls = useAnimation();
  const [animKey, setAnimKey] = useState(selectedStage);

  const handleNext = () => {
    if (selectedStage < 6) {
      setDirection(1);
      setSelectedStage((prev) => prev + 1);
    } else {
      triggerBounce();
    }
  };

  const handlePrev = () => {
    if (selectedStage > 0) {
      setDirection(-1);
      setSelectedStage((prev) => prev - 1);
    } else {
      triggerBounce();
    }
  };

  const handleSwipe = (offsetX) => {
    const swipeThreshold = 100;
    if (offsetX < -swipeThreshold) {
      handleNext();
    } else if (offsetX > swipeThreshold) {
      handlePrev();
    }
  };

  useEffect(() => {
    setAnimKey(selectedStage);
  }, [selectedStage]);

  const triggerBounce = () => {
    controls.start({
      x: [0, direction * -15, direction * 10, 0],
      transition: { duration: 0.4, ease: "easeOut" },
    });
  };

  return (
    <div className="stage">
      {/* Encabezado */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Home
            color="#00437a"
            size={30}
            onClick={() => setSelectedStage(10)}
            style={{
              cursor: "pointer",
              marginBottom: "0.5rem",
              marginRight: "10px",
            }}
          />
          <h2>{stage.name}</h2>
        </div>
        <div style={{ display: "flex" }}>
          {selectedStage > 0 && (
            <ArrowBigLeftDash
              size={34}
              color="#00437a"
              onClick={handlePrev}
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
          )}
          {selectedStage < 6 && (
            <ArrowBigRightDash
              size={34}
              color="#00437a"
              onClick={handleNext}
              style={{ marginRight: "5px", cursor: "pointer" }}
            />
          )}
        </div>
      </div>

      {/* Contenido con swipe + rebote */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={animKey}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => handleSwipe(info.offset.x)}
          initial={{ opacity: 0, x: direction * 100 }}
          animate={controls}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -100 }}
          transition={{ type: "tween", duration: 0.4 }}
          style={{ touchAction: "pan-y" }}
        >
          <div className="fondoPatron">
            <h5>{stage.description}</h5>
            <p>Aplicaciones de IA en esta etapa</p>
          </div>

          {stage.apps.map((app) => (
            <Fields key={app.id || app.name} app={app} stage={stage} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
