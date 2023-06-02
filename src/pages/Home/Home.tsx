import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        KUMA KAN dojo ofrece el espacio adecuado para la práctica de las artes
        marciales y distintos sistemas de combate. Los instructores, fomentan la
        buena convivencia, el respeto, ademas de la formacion marcial y fisica;
        a traves de la disciplina y el entrenamiento, con el fin de lograr la
        evolucion y el crecimiento personal del alumno en todas sus areas. En el
        2010 el Instituto de Artes Marciales KUMA KAN (la casa del oso) abre sus
        puertas en Neuquén, Patagonia Argentina, surgiendo de la necesidad de un
        lugar dedicado especificamente para la práctica del BUDO, brindando en
        sus instalaciones la máxima seriedad, comodidad, y seguridad para el
        estudiante.
      </p>
      <p className={styles.unique}>
        ÚNICO DOJO HABILITADO POR LA MUNICIPALIDAD DE NEUQUÉN
      </p>
    </div>
  );
};

export default Home;
