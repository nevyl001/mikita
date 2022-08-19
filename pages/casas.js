import Image from "next/image";
import Link from "next/link";
import Button from "../components/UI/Button";
import Paragraph from "../components/UI/Paragraph";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/casas.module.css";

const HEADER_IMAGES = [{}];

export default function casas() {
  return (
    <div className={styles.casas}>
      <div className={styles.header}>
        <div className={styles.images}>
          <div
            className={styles.imagen_1}
            style={{
              backgroundImage: `url(/imgs/casas/porcasas.jpg)`,
            }}
          ></div>
        </div>
        <div className={styles.overlay}>
          <div className={styles.text}>
            <Subtitle color="white">TU NUEVA VIDA EMPIEZA AQUÍ</Subtitle>
            <Title size="big" color="white" align="center">
              MIKITA HOUSE
            </Title>
            <Subtitle size="medium" color="yellow">
              SABER MÁS
            </Subtitle>
            <div className={styles.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="#ffcf00"
                className="bi bi-arrow-down"
                viewBox="0 0 16 16"
              >
                <path
                  ffillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_1}>
        <div className={styles.text_left}>
          <Subtitle size="medium" color="yellow">
            MIKITA HOUSE | ÁREA PLUS
          </Subtitle>
        </div>
        <div className={styles.text_right}>
          <div className={styles.imagen}>
            <Image
              src="/imgs/casas/imca2.png"
              alt="im-casa"
              width={558}
              height={86}
            />
          </div>
        </div>
      </div>
      <div className={styles.section_2}>
        <div className={styles.box_left}>
          <div className={styles.images}>
            <div className={styles.imagen}>
              <Image
                src="/imgs/casas/c1.jpeg"
                alt="im-casa"
                width={3024}
                height={3024}
              />
            </div>
            <div className={styles.imagen}>
              <Image
                src="/imgs/casas/c2.jpeg"
                alt="im-casa"
                width={3024}
                height={3024}
              />
            </div>
            <div className={styles.imagen}>
              <Image
                src="/imgs/casas/c3.jpeg"
                alt="im-casa"
                width={3024}
                height={3024}
              />
            </div>
            <div className={styles.imagen}>
              <Image
                src="/imgs/casas/c4.jpeg"
                alt="im-casa"
                width={3024}
                height={3024}
              />
            </div>
          </div>
          <div className={styles.text}>
            <Paragraph>
              EL MODELO &quot;AREA PLUS&quot; SE ADAPTA AL ESTILO DE VIDA ACTUAL
              YA QUE, SU VALOR AGREGADO OFRECE UN ESPACIO ADICIONAL EN PLANTA
              BAJA QUE PUEDES USAR COMO, CUARTO DE ESTUDIO O HOME OFFICE. EL
              ÁREA PLUS TE BRINDA LA LIBERTAD DE DARLE EL USO QUE MÁS TE
              CONVENGA.
            </Paragraph>
          </div>
        </div>
        <div className={styles.box_right}>
          <div className={styles.imagen}>
            <Image
              src="/imgs/casas/imcasas.png"
              alt="im-casa"
              width={560}
              height={800}
            />
          </div>
        </div>
      </div>

      <div className={styles.section_3}>
        <div className={styles.box_left}>
          <div
            className={styles.imagen_1}
            style={{
              backgroundImage: `url(/imgs/casas/foncasas.jpg)`,
            }}
          ></div>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <Subtitle size="medium" color="white">
                EMPIEZA UNN NUEVO ESTILO DE
              </Subtitle>
              <Subtitle size="medium" color="white">
                VIDA CON UN <span>ÁREA PLUS</span> EN TU
              </Subtitle>
              <Subtitle size="medium" color="white">
                NUEVA CASA
              </Subtitle>
            </div>
          </div>
        </div>
        <div className={styles.box_right}>
          <div className={styles.text}>
            <Title size="small" color="white" align="center">
              AGENDA TU CITA
            </Title>
            <div className={styles.btn}>
              <Link href="/">
                <a>AHORA MISMO</a>
              </Link>
            </div>
            <div className={styles.whats_icon}>
              <Title size="small" color="white" align="center">
                ENVÍANOS WHATSAPP
              </Title>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="#ffcf00"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
