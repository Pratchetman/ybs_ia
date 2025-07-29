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
        "https://ybs.arrabal-api.org/pdf/ybs/fases/pdf",
        {
          pdfRichText: iaMessage.choices[0]?.message.content,
          stage: stage.id + "." + app.id + "." + app.name,
        },
        {
          headers: {
            "Content-Type": "application/json", // corregí typo "application"
          },
          responseType: "arraybuffer",
        }
      );
      setPdfLoading(false);
      let filename = "reporte_fase.pdf"; // Nombre por defecto
      const contentDisposition = response.headers["content-disposition"];
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="?([^"]+)"?/);
        if (filenameMatch && filenameMatch[1]) {
          filename = filenameMatch[1];
        }
      }

      const blob = new Blob([response.data], { type: "application/pdf" });

      // Crear un enlace temporal para la descarga
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename; // Establece el nombre del archivo para la descarga
      document.body.appendChild(link);
      link.click(); // Simula un clic en el enlace
      document.body.removeChild(link); // Limpia el enlace del DOM

      // Revocar la URL del Blob
      window.URL.revokeObjectURL(link.href);

      toast.success("PDF generado y descargado.");
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
            <Button
              variant="primary"
              onClick={handlePdf}
              style={{ width: "120px" }}
            >
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
