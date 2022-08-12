import Image from "next/image";
import Link from "next/link";
import Button from "../components/UI/Button";
import Paragraph from "../components/UI/Paragraph";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Home.module.css";

const HEADER_IMAGES = [
  {
    id: 1,
    image: "im1.jpg",
    text1: "ESTÁS MÁS CERCA DE",
    text2: "TU NUEVA CASA O NUEVO DEPA",
  },
  {
    id: 2,
    image: "im2.jpg",
    text1: "EMPIEZA UN NUEVO ESTILO DE VIDA EN",
    text2: "TU NUEVA CASA",
    text3: "ENTREGA INMEDIATA Y PREVENTA",
  },
  {
    id: 3,
    image: "im3.jpeg",
    text1: "EMPIEZA UN NUEVO ESTILO DE VIDA EN",
    text2: "TU NUEVO DEPA",
    text3: "ENTREGA INMEDIATA Y PREVENTA",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.carousel}>
          <div className={styles.contenido}></div>

          <Carousel
            showStatus={false}
            autoPlay={true}
            showArrows={true}
            showThumbs={false}
            showIndicators={true}
            infiniteLoop={true}
          >
            {HEADER_IMAGES.map((item) => {
              return (
                <div
                  key={item.id}
                  className={styles.item}
                  style={{
                    backgroundImage: `url(/imgs/${item.image})`,
                  }}
                >
                  <div className={styles.overlay}>
                    <div className={styles.text_header}>
                      <Subtitle color="white">{item.text1}</Subtitle>
                      <div className={styles.text_tittle}>
                        <Title size="big" color="white" align="center">
                          {item.text2}
                        </Title>
                      </div>
                      <Subtitle size="medium" color="yellow">
                        {item.text3}
                      </Subtitle>
                      <div className={styles.btn}>
                        <Link href="/">
                          <a>QUIERO SABER MÁS</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </main>
    </div>
  );
}
