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
  },
  {
    id: 2,
    image: "im2.jpg",
  },
  {
    id: 3,
    image: "im3.jpeg",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.carousel}>
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
                ></div>
              );
            })}
          </Carousel>
        </div>
        <div className={styles.text_header}>
          <Subtitle color="white">ESTÁS MÁS CERCA DE</Subtitle>
          <Title size="big" color="white" align="center">
            TU NUEVA CASA O<br />
            NUEVO DEPA
          </Title>
          <Link href="/">
            <a>QUIERO SABER MÁS</a>
          </Link>
        </div>
        <div className={styles.text_header}>
          <Subtitle color="white">EMPIEZA UN NUEVO ESTILO DE VIDA EN</Subtitle>
          <Title size="big" color="white" align="center">
            TU NUEVA CASA
          </Title>
          <h1></h1>
          <Subtitle size="medium" color="yellow">
            ENTREGA INMEDIATA Y PREVENTA
          </Subtitle>
          <div className={styles.btn}>
            <Link href="/">
              <a>QUIERO SABER MÁS</a>
            </Link>
          </div>
        </div>
        <div className={styles.text_header}>
          <Subtitle color="white">EMPIEZA UN NUEVO ESTILO DE VIDA EN</Subtitle>
          <Title size="big" color="white" align="center">
            TU NUEVA DEPA
          </Title>
          <Subtitle size="medium" color="yellow">
            ENTREGA INMEDIATA Y PREVENTA
          </Subtitle>
          <div className={styles.btn}>
            <Link href="/">
              <a>QUIERO SABER MÁS</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
