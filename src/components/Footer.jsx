import { datosEquipo } from "../config";
import "./Footer.css";

function Footer() {
  const { integrantes, profesor, materia, calendario, mesAnio, institucion } = datosEquipo;

  return (
    <footer className="footer">
      <img src="/escudo-cucei.png" alt="Escudo de CUCEI" className="footer-escudo" />
      <div className="footer-info">
        <p><strong>Integrantes:</strong> {integrantes.join(", ")}</p>
        <p><strong>Profesor:</strong> {profesor}</p>
        <p><strong>Materia:</strong> {materia}</p>
        <p><strong>Calendario escolar:</strong> {calendario}</p>
        <p><strong>Mes y año:</strong> {mesAnio}</p>
        <p><strong>Institución:</strong> {institucion}</p>
      </div>
    </footer>
  );
}

export default Footer;
