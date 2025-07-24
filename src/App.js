import logo from "./logo.svg";
import "./App.css";
import { Button, Form, InputGroup, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';
function App() {
  const [plan, setPlan] = useState({
    tipoNegocio: "",
    importe: "",
  });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "importe") {
      // Solo permitir números y punto decimal
      const regex = /^[0-9]*\.?[0-9]*$/;
      if (value === "" || regex.test(value)) {
        setPlan((prevPlan) => ({
          ...prevPlan,
          importe: value,
        }));
      }
    } else {
      setPlan((prevPlan) => ({
        ...prevPlan,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/pdf/plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipoNegocio: plan.tipoNegocio,
          importe: Number(plan.importe),
        }),
      });

      if (!response.ok) {
        throw new Error("Error en el envío");
      }

      const data = await response.json();
      console.log("Respuesta del servidor:", data);
      setMessage(data);

      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setMessage("La API gratis no da para más");
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src="https://alhaurin2025.asociacionarrabal.org/assets/images/logo-blanco-web.png" className="logo" alt="logo" />
          <div className="formPlan">
            <h2>PLAN DE EMPRESA CREATOR - IA</h2>
            <InputGroup className="mb-3">
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
            {(message === null && !loading) && (
              <Button variant="outline-light" onClick={handleSubmit}>
                ¡Dame mi plan!
              </Button>
            )}
          </div>
        </header>
        <section>
          {loading && 
          <div>
          <Spinner animation="border" variant="light" />
          <p>Tardo mucho porque soy gratis..<span className="blink">.</span></p>
           </div>}
          <div style={{color: "white", textAlign: "start"}}>{(message !== null && !loading) && <ReactMarkdown>{message.choices[0].message.content}</ReactMarkdown>}</div>
        </section>
      </div>
    </div>
  );
}

export default App;
