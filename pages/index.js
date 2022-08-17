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
  {
    id: 4,
    image: "pici1.jpeg",
    text1: "EMPIEZA UN NUEVO ESTILO DE VIDA EN",
    text2: "MIKITA TOWN",
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
          <div className={styles.town_logo}>
            <div className={styles.logo}>
              <Image
                src="/imgs/logomi.png"
                alt="im-logo"
                width={1080}
                height={1080}
              />
            </div>
          </div>
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
                TE BRINDA DOS EXCELENTES OPCIONES, YA QUE, PUEDES ELEGIR
                &quot;UN PISO&quot; CON AMPLIO ESPACIO PARA JARDÍN Y TERRAZA O
                &quot;DOBLE ALTURA&quot; CON AMPLIA TERRAZA. IDEAL PARA
                INVERSIÓN CON RETORNO O PATRIMONIAL.
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

        {/* MikiTown */}

        <div className={styles.town}>
          <div className={styles.town_logo}>
            <div className={styles.logo}>
              <Image
                src="/imgs/logomi.png"
                alt="im-logo"
                width={1080}
                height={1080}
              />
            </div>
          </div>
          <div className={styles.town_text}>
            <Title size="medium" color="white">
              MIKITA TOWN
            </Title>
            <Subtitle size="medium" color="white">
              EMPIEZA UN NUEVO ESTILO DE VIDA
            </Subtitle>
          </div>
        </div>

        {/* image content 0 */}

        <div className={styles.image_container}>
          <div
            className={styles.imagen_item1}
            style={{
              backgroundImage: `url(/imgs/pici.jpeg)`,
            }}
          ></div>
          <div
            className={styles.imagen_item2}
            style={{
              backgroundImage: `url(/imgs/gym.jpeg)`,
            }}
          ></div>
        </div>

        {/*  imante content 1  */}

        <div className={styles.image_container1}>
          <div className={styles.box_left}>
            <div
              className={styles.imagen_item1}
              style={{
                backgroundImage: `url(/imgs/bar1.jpeg)`,
              }}
            ></div>
            <div className={styles.box_in}>
              <div className={styles.box_in_left}>
                <div
                  className={styles.imagen_item2}
                  style={{
                    backgroundImage: `url(/imgs/gym1.jpeg)`,
                  }}
                ></div>
              </div>
              <div className={styles.box_in_right}>
                <div
                  className={styles.imagen_item2}
                  style={{
                    backgroundImage: `url(/imgs/gym2.jpeg)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className={styles.box_right}>
            <div
              className={styles.imagen_item4}
              style={{
                backgroundImage: `url(/imgs/bar2.jpeg)`,
              }}
            ></div>
          </div>
        </div>

        {/*  imante content 2  */}

        <div className={styles.image_container2}>
          <div
            className={styles.imagen_item1}
            style={{
              backgroundImage: `url(/imgs/pici1.jpeg)`,
            }}
          ></div>
          <div
            className={styles.imagen_item2}
            style={{
              backgroundImage: `url(/imgs/sillon.jpeg)`,
            }}
          ></div>
        </div>
        {/*  imante content 3 */}

        <div className={styles.image_container3}>
          <div
            className={styles.imagen_item1}
            style={{
              backgroundImage: `url(/imgs/balcon.png)`,
            }}
          ></div>
        </div>

        {/*  imante content 4 */}

        <div className={styles.image_container4}>
          <div
            className={styles.imagen_item1}
            style={{
              backgroundImage: `url(/imgs/imright.png)`,
            }}
          ></div>
        </div>

        {/*  imante content 5 */}

        <div className={styles.image_container5}>
          <div className={styles.box_left}>
            <div
              className={styles.imagen_item1}
              style={{
                backgroundImage: `url(/imgs/asado.png)`,
              }}
            ></div>
          </div>
          <div className={styles.box_right}>
            <div
              className={styles.imagen_item2}
              style={{
                backgroundImage: `url(/imgs/juegos.png)`,
              }}
            ></div>
            <div
              className={styles.imagen_item3}
              style={{
                backgroundImage: `url(/imgs/cine.png)`,
              }}
            ></div>
          </div>
        </div>

        {/* comments */}

        <div className={styles.coments}>
          <div className={styles.imagen}>
            <div
              className={styles.item1}
              style={{
                backgroundImage: `url(/imgs/im1.jpg)`,
              }}
            ></div>
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.text}>
            <div className={styles.coment}>
              <div className={styles.stars}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#ffcf00"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div className={styles.stars}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#ffcf00"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div className={styles.stars}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#ffcf00"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div className={styles.stars}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#ffcf00"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div className={styles.stars}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#46474d"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <Paragraph>
                Me encanta vivir aquí, hemos encontrado un lugar donde nuestra
                familia disfruta del entorno y la tranquilidad. A nuestros hijos
                les encanta nadar en la alberca.
              </Paragraph>
            </div>
            <div className={styles.coment_person}>
              <Paragraph size="big">Juan Antonio Ramírez.</Paragraph>
              <Paragraph>Residente</Paragraph>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
