import { useState } from "react";
import Modal from "react-modal";
import styles from "./Bio.module.scss";

const Bio = () => {
  const [showModalKenzo, setShowModalKenzo] = useState(false);
  const [showModalTissier, setShowModalTissier] = useState(false);
  const [showModalChina, setShowModalChina] = useState(false);
  const [showModalRussia, setShowModalRussia] = useState(false);
  return (
    <div className={styles.bio}>
      <Modal isOpen={showModalKenzo}>
        <button onClick={() => setShowModalKenzo(false)}>X</button>
      </Modal>
      <Modal isOpen={showModalTissier}>
        <button onClick={() => setShowModalTissier(false)}>X</button>
      </Modal>
      <Modal isOpen={showModalChina}>
        <button onClick={() => setShowModalChina(false)}>X</button>
      </Modal>
      <Modal isOpen={showModalRussia}>
        <button onClick={() => setShowModalRussia(false)}>X</button>
      </Modal>
      <p>
        Gustavo Moreno comienza su practica del aikido a fines de 1995 de la
        mano de sensei Onofre Entraigas conociendo de esta manera al{" "}
        <span onClick={() => setShowModalKenzo(true)} className={styles.link}>
          Maestro Kenzo Miyazawa
        </span>{" "}
        7°dan con quien da sus exámenes de kyu y se convierte en instructor,
        autorizado por el mismo Miyazawa dicta clases en Neuquen y sigue sus
        practicas con su instructor Entraigas. Luego de la penosa desaparición
        física de Sensei Miyazawa e influenciado por famosos maestros de Hombu
        Dojo con los que toma clases intensivas, sigue su camino buscando su
        referente. Hoy y después de 10 años de conocer a{" "}
        <span onClick={() => setShowModalTissier(true)} className={styles.link}>
          Shihan Christian Tissier
        </span>{" "}
        8° dan y participar de sus clases ve en el fundamentos reales y refinada
        técnica que lo hace acercarse cada vez mas a este Maestro francés. Hoy
        el instructor Moreno Gustavo se capacita en Francia todos los años y
        difunde el estilo bajo la dirección y supervisión del Maestro Tissier
        siendo alumno e instructor directo de su línea. Sensei Gustavo Moreno 4°
        DAN AIKIKAI TOKYO fue Representante Argentino ante los World Combat
        Games{" "}
        <span onClick={() => setShowModalChina(true)} className={styles.link}>
          China 2010
        </span>{" "}
        y{" "}
        <span onClick={() => setShowModalRussia(true)} className={styles.link}>
          Rusia 2013
        </span>
        .
      </p>
    </div>
  );
};

export default Bio;
