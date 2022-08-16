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
        <div className={styles.porque}>
          <div className={styles.porque_left}>
            <Subtitle size="medium_1" color="yellow">
              ¿PORQUÉ MIKITA TOWN?
            </Subtitle>
            <Paragraph>
              MIKITA TOWN SE UBICA EN UNA ZONA PRVILEGIADA QUE PERMITE TRASLADOS
              EN CORTO TIEMPO, GRACIAS AL POCO TRAFICO VEHICULAR.
            </Paragraph>
            <Paragraph>
              SE ENCUENTRA A SOLO 10 MINUTOS DE ZONA COMERCIAL CON ALTA DEMANDA,
              ESCUELAS, SUPERMERCADOS Y HOSPITALES.
            </Paragraph>
            <Paragraph>LOCALIZADO EN SAN ISIDRO JURIQUILLA, QRO.</Paragraph>
            <Paragraph>
              UNA ZONA EMERGENTE QUE GARANTIZA EL RETORNO PARA LOS
              INVERSIONISTAS Y UN PATRIMONIO SÓLIDO PARA CUALQUIER FAMILIA.
            </Paragraph>
            <Paragraph>
              EL DESARROLLO SE DEFERENCÍA POR SU PROPUESTA INNOVADORA EN
              ARQUITECTURA, DESTACANDO SU DISEÑO MINIMALISTA, ESPACIOS AMPLIOS E
              ILUMINADOS Y ACABADOS ÚNICOS DE LARGA VIDA.
            </Paragraph>
            <Paragraph>
              EL CONJUNTO DE AMENIDADES Y ATRIBUTOS DE CADA MODELO ENTRE CASA Y
              DEPA, FACILITAN EL ESTILO DE VIDA DE LAS PERSONAS, CONSIGUENDO
              ASÍ, ESTABILIDAD Y UN ENTORNO EN ARMONÍA.
            </Paragraph>
          </div>
          <div className={styles.porque_right}>
            <div className={styles.imagen}>
              <Image
                src="/imgs/imright.png"
                alt="im-video"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
        <div className={styles.porque_down}>
          <div className={styles.text_1}>
            <Title size="small" color="white">
              122 FAMILIAS
            </Title>
            <Subtitle size="small" color="yellow">
              SATISFECHAS
            </Subtitle>
          </div>
          <div className={styles.text_2}>
            <div className={styles.text_in}>
              <Title size="small" color="white">
                34 DUPLEX
              </Title>
            </div>
            <div className={styles.text_in}>
              <Title size="small" color="white">
                70 CASAS
              </Title>
            </div>
            <div className={styles.text_in}>
              <Title size="small" color="white">
                18 DEPAS
              </Title>
            </div>
            <div className={styles.text_in_2}>
              <Subtitle size="medium" color="yellow">
                ESCRITURADOS
              </Subtitle>
            </div>
          </div>
        </div>
        <div className={styles.btn_porque}>
          <div className={styles.btn}>
            <Link href="/">
              <a>QUIERO MÁS INFORMACIÓN</a>
            </Link>
          </div>
        </div>
        <div className={styles.elige_title}>
          <Title size="medium" color="white">
            ELIGE TU ESTILO
          </Title>
        </div>
        <div className={styles.elige}>
          <div className={styles.elige_left}>
            <div className={styles.imagen}>
              <Image
                src="/imgs/mhouse.jpg"
                alt="im-house"
                width={4056}
                height={3040}
              />
              <div className={styles.top_content}>
                <div className={styles.top_text1}>ÁREA PLUS</div>
                <div className={styles.top_text2}>$2,490,000</div>
              </div>
              <div className={styles.bottom_content}>
                <div className={styles.top_text1}>COCINA MEGA</div>
                <div className={styles.top_text2}>$2,490,000</div>
              </div>
            </div>
            <div className={styles.text}>
              <Title size="medium" color="white">
                MIKITA HOUSE
              </Title>
              <Paragraph>CONCEPTO MINIMALISTA, ROBUSTO Y ELEGANTE.</Paragraph>
              <Paragraph>
                SE ADAPTA AL ESTILO DE VIDA DE TU FAMILIA , YA QUE, PUEDES
                ELEGIR &quot;ÁREA PLUS&quot; PARA USARLO COMO CUARTO DE ESTUDIO,
                HOMME OFFICE, ETC, O COCINA MEGA CON BARRA AL CENTRO, TIPO ISLA.
              </Paragraph>
            </div>
            <div className={styles.btn}>
              <Link href="/">
                <a>SABER MÁS</a>
              </Link>
            </div>
          </div>
          <div className={styles.elige_right}>
            <div className={styles.imagen}>
              <Image
                src="/imgs/dabu.jpg"
                alt="im-house"
                width={4056}
                height={3040}
              />
              <div className={styles.top_content2}>
                <div className={styles.top_text1}>DOBLE ALTURA</div>
                <div className={styles.top_text2}>$2,190,000</div>
              </div>
              <div className={styles.bottom_content2}>
                <div className={styles.top_text1}>1 PISO</div>
                <div className={styles.top_text2}>$1,690,000</div>
              </div>
            </div>
            <div className={styles.text}>
              <Title size="medium" color="white">
                DABURÚ
              </Title>
              <Paragraph>CONCEPTO MINIMALISTA Y MUY AMPLIO.</Paragraph>
              <Paragraph>
                TE BRINDA DOS EXCELENTES OPCIONES, YA QUE, PUEDES ELEGIR "UN
                PISO" CON AMPLIO ESPACIO PARA JARDÍN Y TERRAZA O &quot;DOBLE
                ALTURA&quot; CON AMPLIA TERRAZA. IDEAL PARA INVERSIÓN CON
                RETORNO O PATRIMONIAL.
              </Paragraph>
            </div>
            <div className={styles.btn}>
              <Link href="/">
                <a>SABER MÁS</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.video}>
          <div className={styles.imagen}>
            <Image
              src="/imgs/imright.png"
              alt="im-video"
              width={1920}
              height={1080}
            />
          </div>
          <div className={styles.video_text}>
            <div className={styles.btn}>
              <Link href="/">
                <a>QUIERO HABLAR CON UN ASESOR</a>
              </Link>
            </div>
            <div className={styles.text}>
              <Title size="small" color="white">
                ESTAS A PUNTO DE EMPEZAR UN NUEVO ESTILO DE VIDA.
              </Title>
            </div>
          </div>
        </div>
        <div className={styles.town}>
          <div className={styles.town_text}>
            <Title size="medium" color="white">
              MIKITA TOWN
            </Title>
            <Subtitle size="medium" color="white">
              EMPIEZA UN NUEVO ESTILO DE VIDA
            </Subtitle>
          </div>
        </div>
        <div className={styles.images_box}>
          <div
            className={styles.image_item1}
            style={{
              backgroundImage: `url(/imgs/pici.jpeg)`,
            }}
          ></div>
          <div
            className={styles.image_item2}
            style={{
              backgroundImage: `url(/imgs/gym.jpeg)`,
            }}
          ></div>
        </div>

        <div className={styles.images_box1}>
          <div className={styles.box_left}>
            <div className={styles.images_box_1}>
              <div
                className={styles.image_item_1}
                style={{
                  backgroundImage: `url(/imgs/bar1.jpeg)`,
                }}
              ></div>
            </div>
            <div className={styles.images_box_2}>
              <div
                className={styles.image_item_2}
                style={{
                  backgroundImage: `url(/imgs/gym1.jpeg)`,
                }}
              ></div>
              <div
                className={styles.image_item_2}
                style={{
                  backgroundImage: `url(/imgs/gym2.jpeg)`,
                }}
              ></div>
            </div>
          </div>
          <div className={styles.box_rigth}>
            <div
              className={styles.image_item_1}
              style={{
                backgroundImage: `url(/imgs/bar2.jpeg)`,
              }}
            ></div>
          </div>
        </div>

        <div className={styles.images_box2}>
          <div className={styles.box_left}>
            <div className={styles.images_box_2}>
              <div
                className={styles.image_item_2}
                style={{
                  backgroundImage: `url(/imgs/pici1.jpeg)`,
                }}
              ></div>
              <div
                className={styles.image_item_2}
                style={{
                  backgroundImage: `url(/imgs/sillon.jpeg)`,
                }}
              ></div>
            </div>
            <div className={styles.images_box_1}>
              <div
                className={styles.image_item_1}
                style={{
                  backgroundImage: `url(/imgs/balcon.png)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
