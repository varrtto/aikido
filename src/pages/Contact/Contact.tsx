import Card from "@components/Card";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Card>
        <p>Dojo Neuquén</p>
        <p>Telefono: 0299 4421023</p>
        <p>Email</p>
        <p>Facebook</p>
      </Card>
      <Card>
        <p>Dojo Plottier</p>
        <p>Telefono</p>
        <p>Email</p>
        <p>Facebook</p>
      </Card>
    </div>
  );
};

export default Contact;
