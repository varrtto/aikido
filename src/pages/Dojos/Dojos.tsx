/* eslint-disable @typescript-eslint/ban-ts-comment */
import "react-image-gallery/styles/scss/image-gallery.scss";
import Dojo from "@components/Dojo";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Dojos = () => {
  return (
    <div>
      <Dojo
        name="NEUQUEN - DOJO CENTRAL"
        info="Independencia 1368 - Ciudad de Neuquén - Tel: 0299 4421023"
        images={images}
        map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.6745705432195!2d-68.04278968814003!3d-38.95426229995964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a317897ca1bb9%3A0x54060c1a3ff58dd8!2sKuma%20Kan%20Dojo!5e0!3m2!1ses-419!2sar!4v1685567854319!5m2!1ses-419!2sar"
      />
      <Dojo
        name="PLOTTIER - DOJO CHUSEISHIN"
        info="Zabaleta 505 (esquina Maipu) - Ciudad de Plottier"
        images={images}
        map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1551.1792820280134!2d-68.24066519737246!3d-38.96147982576656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960bcc027f1ccf79%3A0x430c7b4c2a0a502!2sAikido%20Chuseishin%20Dojo!5e0!3m2!1ses-419!2sar!4v1685653439582!5m2!1ses-419!2sar"
      />
    </div>
  );
};

export default Dojos;
