import "./App.scss";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { fases } from "./utils/fases";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Componente1 } from "./components/component1/Componente1";
import { Footer } from "./components/component1/Footer/Footer";
function App() {
  const [stages, setStages] = useState(fases);
  const [selectedStage, setSelectedStage] = useState(10);


  return (
    <div className="App">
      <div className="appGradient">
        <div className="container">
          <header className="App-header">
            <img
              src="../assets/images/ybs-bg.png"
              className="logo"
              alt="logo"
            />
            <div className="vertical"></div>
            <h2>ITINERARIO DE AYUDA AL EMPRENDIMIENTO CON IA</h2>
          </header>
          <section>
            <h5>
              Guía interactiva para técnicos de ONGs y personas emprendedoras
            </h5>
            {selectedStage === 10 && (
              <h3
                style={{
                  marginTop: "30px",
                  textAlign: "left",
                  width: "100%",
                  color: "#0094AA",
                }}
              >
                Etapas del itinerario
              </h3>
            )}
            {selectedStage === 10 && (
              <div className="containerFases">
                {stages &&
                  stages.map((fase, id) => (
                    <Card className="oneFase">
                      <Card.Img
                        variant="top"
                        src={`../assets/images/istockphoto${id + 1}.jpg`}
                      />
                      <Card.Body className="cardBody">
                        <div>
                          <Card.Title>{fase.name}</Card.Title>
                          <Card.Text>{fase.description}</Card.Text>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() => setSelectedStage(id)}
                        >
                          Seleccionar
                        </Button>
                      </Card.Body>
                    </Card>
                  ))}
              </div>
            )}
            {selectedStage !== 10 && (
              <Componente1
                stage={stages[selectedStage]}
                setSelectedStage={setSelectedStage}
                selectedStage={selectedStage}
              />
            )}
          </section>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
