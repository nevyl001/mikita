import Image from "next/image";
import Link from "next/link";
import Button from "../components/UI/Button";
import Paragraph from "../components/UI/Paragraph";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/contacto.module.css";

const HEADER_IMAGES = [{}];

export default function contacto() {
  return (
    <div className={styles.contacto}>
      <div className={styles.section_10}>
        <div className={styles.text}>
          <Subtitle size="medium" color="white">
            EMPIEZA UN NUEVO ESTILO DE VIDA
          </Subtitle>
          <Title size="medium" color="white">
            ESTAMOS EN ETAPA DE PREVENTA
          </Title>

          <div className={styles.imagen}>
            <Image
              src="/imgs/logoal.png"
              alt="im-logo"
              width={845}
              height={215}
            />
          </div>
          <Paragraph size="medium" color="yellow">
            PREGUNTA POR DISPONIBILIDAD
          </Paragraph>
          <Paragraph size="medium" color="yellow">
            RECIBE ASESORÍA
          </Paragraph>
          <Paragraph size="medium" color="yellow">
            VISÍTANOS
          </Paragraph>
          <Link href="#contacto">
            <div className={styles.arrow1}>
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
          </Link>
        </div>
      </div>
    </div>
  );
}
