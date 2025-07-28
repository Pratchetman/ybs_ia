import React, { useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

import "./modal.scss";
import ColorCycleSpinner from "../../Spinner/ColorCycleSpinner";
import axios from "axios";
import { toast } from "react-toastify";

export const ModalIA = ({
  show,
  setShow,
  loading,
  iaMessage,
  prompt,
  stage,
  app,
}) => {
  const [pdfLoading, setPdfLoading] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const handlePdf = async () => {
    setPdfLoading(true);
    try {
      const markdownContent = iaMessage?.choices?.[0]?.message?.content || "";
      if (!markdownContent) {
        console.warn("No hay contenido Markdown para generar el PDF.");
        toast.error("No hay contenido Markdown para generar el PDF.");
        setPdfLoading(false);
        return;
      }
      const response = await axios.post(
        "http://ybs.arrabal-api.org/pdf/ybs/fases/pdf",
        {
          pdfRichText: iaMessage.choices[0]?.message.content,
          stage: stage.id +"." + app.id + "." + app.name
        },
        {
          headers: {
            "Content-Type": "application/json", // corregí typo "application"
          },
          responseType: "arraybuffer",
        }
      );
      setPdfLoading(false);
      const blob = new Blob([response.data], { type: "application/pdf" });
      // Crear una URL para el Blob
      const url = window.URL.createObjectURL(blob);

      // Abrir el PDF en una nueva pestaña/ventana
      window.open(url, "_blank");
      // Liberar la URL del Blob después de un tiempo para liberar memoria
      // Esto es importante para evitar fugas de memoria en aplicaciones de larga duración
      setTimeout(() => window.URL.revokeObjectURL(url), 100);
    } catch (error) {
      setPdfLoading(false);
      console.error("Error al generar el PDF:", error);
      toast.error(
        "Hubo un error al generar el PDF. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="xl"
      variant="light"
    >
      <div className="backModal">
        
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>
            {stage.name}{" "}
            <p style={{ marginBottom: "0px", fontSize: "1rem" }}>{app.name}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <div
              style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
            >
              <ColorCycleSpinner />
              <p style={{ marginTop: "20px" }}>
                La IA está haciendo su trabajo..<span className="blink">.</span>
              </p>
            </div>
          ) : (
            <div>
              {iaMessage !== "" && (
                <ReactMarkdown>
                  {iaMessage.choices[0]?.message.content}
                </ReactMarkdown>
              )}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <img src="../../../../assets/images/Youth.png" alt="fondo_youth" />
          {!loading && (
            <Button variant="primary" onClick={handlePdf} style={{width: "120px"}}>
              {pdfLoading ? (
                <Spinner size="sm" style={{ color: "#0094aa" }} />
              ) : (
                <p style={{ marginBottom: "0px" }}>Crear PDF</p>
              )}
            </Button>
          )}
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};
