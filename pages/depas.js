import Image from "next/image";
import Link from "next/link";
import Button from "../components/UI/Button";
import Paragraph from "../components/UI/Paragraph";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/depas.module.css";

const HEADER_IMAGES = [{}];

export default function depas() {
  return (
    <div className={styles.depas}>
      <div className={styles.header}>
        <div className={styles.images}>
          <div
            className={styles.imagen_1}
            style={{
              backgroundImage: `url(/imgs/depas/pordepas.jpg)`,
            }}
          ></div>
        </div>
        <div className={styles.overlay}>
          <div className={styles.text}>
            <Subtitle color="white">TU NUEVA VIDA EMPIEZA AQUÍ</Subtitle>
            <Title size="big" color="white" align="center">
              DABURÚ APARTMENT
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
        <div className={styles.text}>
          <Title size="medium_1" color="white">
            Daburú Flat
          </Title>
        </div>
      </div>
      <div className={styles.section_2}>
        <div className={styles.box_left}>
          <div className={styles.images}>
            <div
              className={styles.imagen1}
              style={{
                backgroundImage: `url(/imgs/depas/dep1.jpg)`,
              }}
            ></div>
            <div
              className={styles.imagen2}
              style={{
                backgroundImage: `url(/imgs/depas/dep2.jpg)`,
              }}
            ></div>
          </div>
          <div className={styles.text}>
            <Paragraph size="casa">
              El modelo <span>Flat</span> ofrece un <span>espacio amplio</span>{" "}
              de alto confort, destacando por su grande espacio al interior y en
              el área del jardín. Estás características sin duda ofrecen una
              sensación de libertad y de sentirse como vivir en una casa.
            </Paragraph>
          </div>
        </div>
        <div className={styles.box_right}>
          <div className={styles.imagen}>
            <Image
              src="/imgs/depas/da1.png"
              alt="im-depas"
              width={444}
              height={726}
            />
          </div>
        </div>
      </div>

      <div className={styles.section_3}>
        <div className={styles.box_left}>
          <div
            className={styles.imagen_1}
            style={{
              backgroundImage: `url(/imgs/depas/depback.jpg)`,
            }}
          ></div>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <Subtitle size="medium" color="white">
                EMPIEZA UN NUEVO ESTILO DE
                <br /> VIDA CON UN
                <span>ESPACIO AMPLIO </span> EN TU
                <br /> NUEVO DEPA
              </Subtitle>
            </div>
          </div>
        </div>
        <div className={styles.box_right}>
          <div className={styles.text}>
            <Subtitle size="whats_1" color="white">
              AGENDA TU CITA
            </Subtitle>
            <div className={styles.btn}>
              <Link href="/">
                <a>AHORA MISMO</a>
              </Link>
            </div>
            <div className={styles.whats_icon}>
              <Subtitle size="whats" color="white">
                ENVÍANOS WHATSAPP
              </Subtitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
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
      <div className={styles.section_4}>
        <div className={styles.text}>
          <Title size="medium" color="white">
            DISTRIBUCIÓN ARQUITECTÓNICA
          </Title>
        </div>
      </div>
      <div className={styles.section_5}>
        <div className={styles.box_left}>
          <div className={styles.box_images}>
            <div className={styles.box_text_1}>
              <Subtitle size="small" color="yellow">
                PLANTA BAJA
              </Subtitle>
              <div className={styles.imagen}>
                <Image
                  src="/imgs/depas/renderdep.jpg"
                  alt="im-depas"
                  width={856}
                  height={1280}
                />
              </div>
            </div>
            <div className={styles.box_text_2}>
              <ul>
                <li>SALA</li>
                <li>COMEDOR</li>
                <li>COCINA (EQUIPADA)</li>
                <li>2 RECÁMARAS</li>
                <li>PRINCIPAL CON BAÑO COMPLETON</li>
                <li>ÁREA DE LAVANDERÍA</li>
                <li>TERRAZA O JARDÍN</li>
                <li>2 BAÑOS</li>
                <li>2 ESTACIONAMIENTOS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.box_right}>
          <div className={styles.imagen}>
            <Image
              src="/imgs/depas/dist.png"
              alt="im-depas"
              width={442}
              height={720}
            />
          </div>
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
                width="60"
                height="60"
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
      <div className={styles.section_6}>
        <div className={styles.text_left}>
          <Title size="medium" color="white">
            Daburú Double
          </Title>
        </div>
      </div>
      <div className={styles.section_7}>
        <div className={styles.box_left}>
          <div className={styles.images}>
            <div
              className={styles.imagen1}
              style={{
                backgroundImage: `url(/imgs/depas/dep2_1.jpg)`,
              }}
            >
              {/* <Image
                src="/imgs/depas/dep2_1.jpg"
                alt="im-depas"
                width={4000}
                height={2250}
              /> */}
            </div>
            <div
              className={styles.imagen2}
              style={{
                backgroundImage: `url(/imgs/depas/dep2_2.jpg)`,
              }}
            >
              {/* <Image
                src="/imgs/depas/dep2_2.jpg"
                alt="im-depas"
                width={4000}
                height={2250}
              /> */}
            </div>
            <div
              className={styles.imagen3}
              style={{
                backgroundImage: `url(/imgs/depas/dep2_3.jpg)`,
              }}
            >
              {/* <Image
                src="/imgs/depas/dep2_3.jpg"
                alt="im-depas"
                width={3024}
                height={2250}
              /> */}
            </div>
          </div>
          <div className={styles.text}>
            <Paragraph>
              El modelo <span>Doble</span> es disruptivo por su atractivo diseño
              de <span>doble altura</span>que se aprecia desde abrir la puerta.
              Con su propuesta Doble Altura se consigue aprovechar el espacio de
              manera eficiente, priorizando la comodidad y obteniendo como
              resultado un entorno interior de alta gama.
            </Paragraph>
          </div>
        </div>
        <div className={styles.box_right}>
          <div className={styles.imagen}>
            <Image
              src="/imgs/depas/dd2.png"
              alt="im-depa"
              width={438}
              height={714}
            />
          </div>
        </div>
      </div>
      <div className={styles.section_3}>
        <div className={styles.box_left}>
          <div
            className={styles.imagen_1}
            style={{
              backgroundImage: `url(/imgs/depas/depback.jpg)`,
            }}
          ></div>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <Subtitle size="medium" color="white">
                EMPIEZA UN NUEVO ESTILO DE
                <br /> VIDA CON
                <span>DOBLE ALTURA</span> EN TU <br /> NUEVA DEPA
              </Subtitle>
            </div>
          </div>
        </div>
        <div className={styles.box_right}>
          <div className={styles.text}>
            <Subtitle size="whats_1" color="white">
              AGENDA TU CITA
            </Subtitle>
            <div className={styles.btn}>
              <Link href="/">
                <a>AHORA MISMO</a>
              </Link>
            </div>
            <div className={styles.whats_icon}>
              <Subtitle size="whats" color="white">
                ENVÍANOS WHATSAPP
              </Subtitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
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
      <div className={styles.section_4}>
        <div className={styles.text}>
          <Title size="medium" color="white">
            DISTRIBUCIÓN ARQUITECTÓNICA
          </Title>
        </div>
      </div>
      <div className={styles.section_DB}>
        <div className={styles.box_left}>
          <div className={styles.box_images}>
            <div className={styles.box_text_1}>
              <Subtitle size="small" color="yellow">
                PLANTA ALTA
              </Subtitle>
              <div className={styles.imagen}>
                <div className={styles.left}>
                  <Image
                    src="/imgs/depas/planta1.jpg"
                    alt="im-depas"
                    width={858}
                    height={1150}
                  />
                </div>
                <div className={styles.right}>
                  <Image
                    src="/imgs/depas/planta2.jpg"
                    alt="im-depas"
                    width={858}
                    height={1150}
                  />
                </div>
              </div>
            </div>
            <div className={styles.box_text_2}>
              <div className={styles.right}>
                <ul>
                  <li>SALA Y COMEDOR A DOBLE ALTURA</li>
                  <li>COCINA (EQUIPADA)</li>
                  <li>2 RECÁMARAS CON BAÑO PROPIO</li>
                  <li>ÁREA DE LAVANDERÍA</li>
                  <li>TERRAZA</li>
                  <li>SALA DE TV</li>
                  <li>2.5 BAÑOS</li>
                  <li>2 ESTACIONAMIENTOS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box_right}>
          <div className={styles.imagen}>
            <Image
              src="/imgs/depas/dd2.png"
              alt="im-depa"
              width={438}
              height={714}
            />
          </div>
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
                width="60"
                height="60"
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
      {/* desarrollado por */}
      <div className={styles.desarrollo}>
        <div className={styles.left}>
          <div className={styles.img}>
            <Image
              src="/imgs/logoal.png"
              alt="im-logo"
              width={295}
              height={65}
            />
          </div>
        </div>
        <div className={styles.ri}>
          <div className={styles.text_box}>
            <Paragraph>Desarrollado por</Paragraph>
          </div>
        </div>
        <div className={styles.img}>
          <Image src="/imgs/LoAgi.png" alt="im-logo" width={100} height={65} />
        </div>
      </div>

      <div className={styles.section_10}>
        <div className={styles.text}>
          <Title size="medium" color="white">
            APARTA AHORA TU NUEVA DEPA
          </Title>
          <Subtitle size="medium" color="white">
            ESTAMOS EN ETAPA DE PREVENTA
          </Subtitle>
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
  );
}
