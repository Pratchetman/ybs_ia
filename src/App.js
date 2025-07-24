import "./App.scss";
import { Button, Card, Form, InputGroup, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { fases } from "./utils/fases";
import ReactMarkdown from "react-markdown";
import { Componente1 } from "./components/component1/Componente1";
import { Componente2 } from "./components/component2/Componente2";
import { Componente3 } from "./components/component3/Componente3";
import { Componente4 } from "./components/component4/Componente4";
import { Componente5 } from "./components/component5/Componente5";
import { Componente6 } from "./components/component6/Componente6";
import { Componente7 } from "./components/component7/Componente7";
function App() {
  const [plan, setPlan] = useState({
    tipoNegocio: "",
    importe: "",
  });
  const [message, setMessage] = useState(null);
  const [stages, setStages] = useState(fases);
  const [selectedStage, setSelectedStage] = useState(10);
  const [loading, setLoading] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   if (name === "importe") {
  //     // Solo permitir números y punto decimal
  //     const regex = /^[0-9]*\.?[0-9]*$/;
  //     if (value === "" || regex.test(value)) {
  //       setPlan((prevPlan) => ({
  //         ...prevPlan,
  //         importe: value,
  //       }));
  //     }
  //   } else {
  //     setPlan((prevPlan) => ({
  //       ...prevPlan,
  //       [name]: value,
  //     }));
  //   }
  // };

  // const handleSubmit = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch("http://localhost:8080/pdf/plan", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         tipoNegocio: plan.tipoNegocio,
  //         importe: Number(plan.importe),
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Error en el envío");
  //     }

  //     const data = await response.json();
  //     console.log("Respuesta del servidor:", data);
  //     setMessage(data);

  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setMessage("La API gratis no da para más");
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src="../assets/images/ybs-bg.png" className="logo" alt="logo" />
          <div className="formPlan">
            {/* <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Negocio</InputGroup.Text>
              <Form.Control
                name="tipoNegocio"
                placeholder="Tipo de negocio"
                aria-label="Tipo de negocio"
                aria-describedby="basic-addon1"
                value={plan.tipoNegocio}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>€</InputGroup.Text>
              <Form.Control
                aria-label="Amount (to the nearest euro)"
                name="importe"
                type="text"
                placeholder="Cantidad total  a invertir"
                value={plan.importe}
                inputMode="decimal" // muestra teclado numérico en móviles
                onChange={handleChange}
                pattern="[0-9]*"
              />
            </InputGroup>
            {message === null && !loading && (
              <Button variant="outline-light" onClick={handleSubmit}>
                ¡Dame mi plan!
              </Button>
            )} */}
          </div>
        </header>
        <section>
          <h2>ITINERARIO DE AYUDA AL EMPRENDIMIENTO CON IA</h2>
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
                  <Card style={{ width: "16rem" }} className="oneFase">
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
          {selectedStage !== 10 && <Componente1 stage={stages[selectedStage]} setSelectedStage={setSelectedStage} />}
          {/* <Componente2 stage={stages[selectedStage]} />
          <Componente3 stage={stages[selectedStage]} />
          <Componente4 stage={stages[selectedStage]} />
          <Componente5 stage={stages[selectedStage]} />
          <Componente6 stage={stages[selectedStage]} />
          <Componente7 stage={stages[selectedStage]} /> */}
        </section>
        <section>
          {loading && (
            <div>
              <Spinner animation="border" variant="light" />
              <p>
                Tardo mucho porque soy gratis..<span className="blink">.</span>
              </p>
            </div>
          )}
          <div style={{ color: "white", textAlign: "start" }}>
            {message !== null && !loading && (
              <ReactMarkdown>
                {message.choices[0].message.content}
              </ReactMarkdown>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
