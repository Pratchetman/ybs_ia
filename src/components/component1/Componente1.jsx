import React from "react";
import "./componente1.scss";
import { Accordion, Form, InputGroup } from "react-bootstrap";

export const Componente1 = ({ stage, setSelectedStage }) => {
  return (
    <div className="stage">
      <div style={{display:"flex", alignItems:"center"}}>
        <p onClick={() => setSelectedStage(10)} style={{fontSize:"28px", marginBottom: "0.5rem", marginRight:"10px", cursor: "pointer"}}>⬅️ </p>
        <h2>{stage.name}</h2>
      </div>

      <h5>{stage.description}</h5>
      <p>Aplicaciones de IA en esta etapa</p>
      {stage.apps.map((app) => {
        return (
          <div key={app.id}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item>
                <Accordion.Header>{app.name}</Accordion.Header>
                <Accordion.Body>
                  <p>
                    <strong>Descripción:</strong> {app.summary}
                  </p>
                  {app.fields.map((field) => {
                    return (
                      <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                          {field.name.toUpperCase()}
                        </InputGroup.Text>
                        <Form.Control
                          placeholder={field.name}
                          aria-label={field.name}
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    );
                  })}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
};
