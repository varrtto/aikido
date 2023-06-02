import { useState } from "react";
import styles from "./Aikiken.module.scss";
import ReactModal from "react-modal";
const Aikiken = () => {
  const [showModalInstructors, setShowModalInstructors] = useState(false);
  return (
    <div className={styles.aikiken}>
      <ReactModal isOpen={showModalInstructors}>
        <button onClick={() => setShowModalInstructors(false)}>X</button>
      </ReactModal>
      <p className={styles.highlight}>
        El siguiente texto es un extracto del estatuto de la ASOCIACIÓN AIKIDO
        AIKIKEN NEUQUÉN:
      </p>
      <ol type="a" className={styles.list}>
        "ARTICULO 2do: Son sus propósitos:
        <li>
          Promover la enseñanza, práctica y difusión del AIKIDO, respetando los
          contenidos teóricos, pácticos, dinámicos, filosóficos, históricos que
          dieran origen al mismo.
        </li>
        <li>
          Ser la institución propagadora del AIKIDO en el ámbito de la provincia
          del Neuquén, tanto en su aspecto didáctico y metodológico, de
          capacitación y transferencia al medio local, a través de la
          organización de seminarios, cursos, clases magistrales demás eventos
          que permitan enriquecer a la comunicas de prácticantes...
        </li>
        <li>
          Apoyar a las escuelas comunitarias o municipales y a clubes y
          gimnasios privados a la fecha existen en la provincia dedicados a la
          practica, enseñanza del AIKIDO.
        </li>
        <li>
          Actuar en armonía con otras Instituciones establecidas en el país con
          el mismo objetivo o incluso con las del extranjero..."
        </li>
      </ol>
      <p
        className={styles.option}
        onClick={() => setShowModalInstructors(true)}
      >
        » INSTRUCTORES HABILITADOS
      </p>
      <p className={styles.option}>» METODOLOGIA Y EXAMENES</p>
    </div>
  );
};

export default Aikiken;
