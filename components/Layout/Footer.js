import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import Button from "../UI/Button";
import Paragraph from "../UI/Paragraph";
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";

const Footer = () => {
  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.foo_text}>
        <Title size="medium" color="white">
          AGENDA UNA CITA
        </Title>
        <Paragraph>
          Estaremos encantados de ayudarte para que realices tu mejor inversión.
        </Paragraph>
      </div>
      <div className={styles.form_footer}>
        <div className={styles.box_left}>
          <div className={styles.box_text}>
            <Paragraph>
              Ingresa tus datos para que nuestros asesores te puedan contactar.
            </Paragraph>
          </div>
          <div className={styles.form_box}>
            <form action="/send-data-here" method="post">
              <input
                type="text"
                id="first"
                placeholder="NOMBRE"
                name="NOMBRE"
              />
              <input type="number" id="tel" placeholder="TELÉFONO" name="TEL" />
              <input
                type="email"
                id="email"
                placeholder="CORREO"
                name="EMAIL"
              />
              <div className={styles.ov_btn_slide_close}>
                <Link href="/">
                  <a>ENVIAR</a>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.box_right}>
          <div className={styles.whats}>
            <Paragraph>También nos puedes contactar</Paragraph>
            <Paragraph>por WhatsApp.</Paragraph>
            <div className={styles.whats_icon}>
              <a href="https://wa.link/3nsw09" rel="noreferrer" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="#ffcf00"
                  className="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </a>
            </div>
            <div className={styles.whats_p}>
              <Paragraph size="big">ENVIAR WHATSAPP</Paragraph>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.foo_down}>
        <div className={styles.ov_btn_slide_close}>
          <Link href="/privacidad">
            <a>AVISO DE PRIVACIDAD</a>
          </Link>
        </div>
        <div className={styles.direccion}>
          <Paragraph size="aviso_1">
            Circuito Pedernal Picacho # 711, C.P. 76226, Col. San Isidro
            Juriquilla, Santiago de Querétaro, Qro.
          </Paragraph>
          <Paragraph size="aviso_1">
            MIKITA TOWN | Todos los derechos reservados.
          </Paragraph>
          <Paragraph size="small_1" color="white">
            Las imágenes e información presentadas en esta página son solamente
            como referencia y no deben ser consideradas como definitivas. Los
            precios pueden ser modificados sin previo aviso.
          </Paragraph>
          <Paragraph size="small_1" color="white">
            Powered by Fortemus
          </Paragraph>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
