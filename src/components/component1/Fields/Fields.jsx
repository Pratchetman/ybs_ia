import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Accordion, Button, Form, InputGroup } from "react-bootstrap";
import { ModalIA } from "../Modal/Modal";

import "./fields.scss";
import "react-toastify/dist/ReactToastify.css";

export const Fields = ({ app, stage }) => {
  const [form, setForm] = useState({});
  const [prompt, setPrompt] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [iaMessage, setIaMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Validar que todos los campos tienen valor
    const emptyFields = app.fields.filter((field) => !form[field.name]?.trim());
    if (emptyFields.length > 0) {
      toast.error("Por favor, completa todos los campos antes de enviar.");
      return;
    }

    const replacedTemplate = app.template.replace(/{{(.*?)}}/g, (_, key) => {
      return form[key.trim()] ?? "";
    });
    setPrompt(replacedTemplate);
    setLoading(true);
    setShow(true);
    try {
      const response = await axios.post("http://alb-YBS-2070023914.eu-west-3.elb.amazonaws.com/pdf/ybs/fases", {
        replacedTemplate,
        headers: {
          "Content-Type": "text/plain", // porque envías un string simple
        },
      });
      setIaMessage(response.data);
      console.log("Respuesta del servidor:", response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error al enviar el prompt:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (app?.fields?.length) {
      const result = app.fields.reduce((acc, item) => {
        acc[item.name] = "";
        return acc;
      }, {});
      setForm(result);
    }
  }, [app]);

  return (
    <>
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
                    <InputGroup.Text id="basic-addon1" style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
                      {field.label}
                    </InputGroup.Text>
                    <Form.Control
                      onChange={handleChange}
                      value={form[field.name] || ""}
                      name={field.name}
                    //   placeholder="Escribe aquí"
                      aria-label={field.label}
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                );
              })}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button onClick={() => handleSubmit()}>Enviar a IA</Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <ModalIA
          show={show}
          setShow={setShow}
          loading={loading}
          iaMessage={iaMessage}
          prompt={prompt}
          stage={stage}
          app={app}
        />
      </div>
    </>
  );
};
