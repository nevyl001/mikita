import Image from "next/image";
import Link from "next/link";
import Paragraph from "../components/UI/Paragraph";
import Subtitle from "../components/UI/Subtitle";
import Title from "../components/UI/Title";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Home.module.css";
import { useInView } from "react-intersection-observer";

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
    image: "ameninew.png",
    text1: "EMPIEZA UN NUEVO ESTILO DE VIDA EN",
    text2: "MIKITA TOWN",
    text3: "ENTREGA INMEDIATA Y PREVENTA",
  },
];

export default function Home() {
  const controlMenu = () => {
    if (window.scrollY < 1000) {
      setLogoActive(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlMenu);
    return () => {
      window.removeEventListener("scroll", controlMenu);
    };
  }, []);

  const [logoActive, setLogoActive] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setLogoActive(true);
    }
  }, [inView]);

  return (
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
                    <div className={styles.ov_btn_slide_close}>
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
      <div id="porque" className={styles.porque}>
        <div className={styles.porque_left}>
          <div className={styles.text}>
            <Subtitle size="medium_1" color="yellow">
              ¿PORQUÉ MIKITA TOWN?
            </Subtitle>
            <Paragraph>
              Mikita Town se ubica en una zona privilegiada que permite
              traslados en corto tiempo, gracias al poco tráfico vehicular.
            </Paragraph>
            <Paragraph>
              Se encuentra a solo 10 minutos de zona comercial con alta demanda,
              escuelas, supermercados y hospitales.
            </Paragraph>
            <Paragraph>
              Localizado en San Isidro Juriquilla, Querétaro. Una zona emergente
              que permite retornos estables para los inversionistas y crear un
              patrimonio sólido para cualquier familia.
            </Paragraph>
            <Paragraph>
              Mikita Town es diferente gracias a su propuesta innovadora en
              arquitectura, destacando su diseño minimalista, con espacios
              amplios e iluminados, y acabados únicos de larga vida.
            </Paragraph>
            <Paragraph>
              El conjunto de amenidades y atributos de cada modelo, entre casas
              y departamentos, facilitan el estilo de vida de las personas,
              ofreciendo así, estabilidad y un entorno en armonía.
            </Paragraph>
          </div>
        </div>
        <div className={styles.porque_right}>
          <video
            autoPlay
            loop
            controls
            muted
            style={{ width: "100%", height: "400px" }}
          >
            <source src="/imgs/video2.mp4" />
          </video>
        </div>
      </div>
      <div className={styles.porque_down}>
        <div className={styles.text_1}>
          <Title size="small" color="white">
            52 Familias
          </Title>
          <Subtitle size="medium_1" color="yellow">
            Satisfechas
          </Subtitle>
        </div>
        <div className={styles.text_2}>
          <div className={styles.text_in}>
            <Title size="small" color="white">
              12 Duplex
            </Title>
          </div>
          <div className={styles.text_in}>
            <Title size="small" color="white">
              22 Casas
            </Title>
          </div>
          <div className={styles.text_in}>
            <Title size="small" color="white">
              18 Depas
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
        <div className={styles.ov_btn_slide_close}>
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
      <div className={styles.elige} ref={ref}>
        <div className="elige-item">
          <div className="image1 image-1">
            <div className="top1">
              <div className="label">
                <div className="black">Tsuika</div>
                <div className="yellow">$2,490,000</div>
              </div>
            </div>
            <div className="bottom1">
              <div className="label">
                <div className="black ">Sugoi</div>
                <div className="yellow">$2,490,000</div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="text-1">MIKITA HOUSE</div>
            <div className="text-2 text">
              <p>Concepto minimalista, robusto y elegante.</p>
              <p>Se adapta al estilo de vida de tu familia.</p>
              <p>
                <span>Modelo Tsuika:</span> Se caracteriza por tener un Cuarto
                Adicional en planta baja, puedes usarlo como cuarto de estudio,
                home office, cuarto de yoga, etc.
              </p>
              <p>
                <span>Modelo Sugoi:</span> Se caracteriza por tener una Cocina
                Grande con barra al centro tipo isla, para que cocines
                cómodamente.
              </p>
              <div className="button-box">
                <div className={styles.ov_btn_slide_close}>
                  <Link href="/">
                    <a>SABER MÁS</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elige-item">
          <div className="image image-1">
            <div className="top">
              <div className="label">
                <div className="black">Double</div>
                <div className="yellow">$2,190,000</div>
              </div>
            </div>
            <div className="bottom">
              <div className="label">
                <div className="black">Flat</div>
                <div className="yellow">$1,690,000</div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="text-1">DABURÚ</div>
            <div className="text-2">
              <p>Concepto minimalista y muy amplio.</p>
              <p>Se adapta al estilo de vida de tu familia.</p>
              <p>
                <span>Un Piso:</span> Con amplio espacio para jardín y terraza.
                El espacio más económico por metro cuadrado vs. la oferta de
                departamentos en Querétaro.
              </p>
              <p>
                <span>Doble Altura:</span> Con amplia terraza. Innovador por su
                diseño de doble altura. Ideal para inversión con alto
                rendimiento o inversión patrimonial.
              </p>
              <div className="button-box">
                <div className={styles.ov_btn_slide_close}>
                  <Link href="/">
                    <a>SABER MÁS</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.video}>
        <div className={styles.imagen}>
          <div
            className={styles.item1}
            style={{
              backgroundImage: `url(/imgs/provid.jpg)`,
            }}
          ></div>
          <div className={styles.overlay}>
            <div className={styles.vid_text_in}>
              <Title size="medium" color="white">
                CONCEPTO MINIMALISTA, ROBUSTO Y ELEGANTE
              </Title>
            </div>
          </div>
        </div>
        <div className={styles.video_text}>
          <div className={styles.box_left}>
            <div className={styles.ov_btn_slide_close}>
              <Link href="/">
                <a>QUIERO HABLAR CON UN ASESOR</a>
              </Link>
            </div>
          </div>
          <div className={styles.box_right}>
            <div className={styles.text}>
              <Title size="small" color="white">
                ESTAS A PUNTO DE EMPEZAR UN NUEVO ESTILO DE VIDA.
              </Title>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.town}>
        {logoActive && (
          <div className="extra-logo-fixed">
            <Image
              src="/imgs/logomi.png"
              alt="im-logo"
              width={1080}
              height={1080}
            />
          </div>
        )}
        <div className={styles.town_text}>
          <Title size="medium" color="white">
            MIKITA TOWN
          </Title>
          <div className="subtitulo-1">EMPIEZA UN NUEVO ESTILO DE VIDA</div>
        </div>
      </div>
      <div className={styles.image_container}>
        <div className={`image-box ${styles.imagen_item1}`}>
          <div
            className="image gallery-effect"
            style={{
              backgroundImage: `url(/imgs/pici.jpeg)`,
            }}
          />
          <div className="image-content">
            <div className="title">Amenidades excepcionales.</div>
            <div className="subtitle">
              Cumple tus deseos y eleva tus experiencias. Vive los momentos más
              exquisitos en las amenidades de Mikita Town.
            </div>
          </div>
        </div>

        <div className={`image-box ${styles.imagen_item2}`}>
          <div
            className="image gallery-effect"
            style={{
              backgroundImage: `url(/imgs/gym.jpeg)`,
            }}
          />
          <div className="image-content">
            <div className="title">Amenidades excepcionales.</div>
            <div className="subtitle">
              Cumple tus deseos y eleva tus experiencias. Vive los momentos más
              exquisitos en las amenidades de Mikita Town.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.image_container1}>
        <div className={styles.box_left}>
          <div className={`image-box ${styles.imagen_item1}`}>
            <div
              className="image gallery-effect"
              style={{
                backgroundImage: `url(/imgs/bar1.jpeg)`,
              }}
            />
            <div className="image-content">
              <div className="title">Amenidades excepcionales.</div>
              <div className="subtitle">
                Cumple tus deseos y eleva tus experiencias. Vive los momentos
                más exquisitos en las amenidades de Mikita Town.
              </div>
            </div>
          </div>

          <div className={styles.box_in}>
            <div className={styles.box_in_left}>
              <div className={`image-box ${styles.imagen_item2}`}>
                <div
                  className="image gallery-effect"
                  style={{
                    backgroundImage: `url(/imgs/gym1.jpeg)`,
                  }}
                />
                <div className="image-content">
                  <div className="title">Amenidades excepcionales.</div>
                  <div className="subtitle">
                    Cumple tus deseos y eleva tus experiencias. Vive los
                    momentos más exquisitos en las amenidades de Mikita Town.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.box_in_right}>
              <div className={`image-box ${styles.imagen_item2}`}>
                <div
                  className="image gallery-effect"
                  style={{
                    backgroundImage: `url(/imgs/gym2.jpeg)`,
                  }}
                />
                <div className="image-content">
                  <div className="title">Amenidades excepcionales.</div>
                  <div className="subtitle">
                    Cumple tus deseos y eleva tus experiencias. Vive los
                    momentos más exquisitos en las amenidades de Mikita Town.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box_right}>
          <div className={`image-box ${styles.imagen_item4}`}>
            <div
              className="image gallery-effect"
              style={{
                backgroundImage: `url(/imgs/bar2.jpeg)`,
              }}
            />
            <div className="image-content">
              <div className="title">Amenidades excepcionales.</div>
              <div className="subtitle">
                Cumple tus deseos y eleva tus experiencias. Vive los momentos
                más exquisitos en las amenidades de Mikita Town.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.image_container2}>
        <div className={`image-box ${styles.imagen_item1}`}>
          <div
            className="image gallery-effect"
            style={{
              backgroundImage: `url(/imgs/ameninew.png)`,
            }}
          />
          <div className="image-content">
            <div className="title">Amenidades excepcionales.</div>
            <div className="subtitle">
              Cumple tus deseos y eleva tus experiencias. Vive los momentos más
              exquisitos en las amenidades de Mikita Town.
            </div>
          </div>
        </div>

        <div className={`image-box ${styles.imagen_item2}`}>
          <div
            className="image gallery-effect"
            style={{
              backgroundImage: `url(/imgs/sillon.jpeg)`,
            }}
          />
          <div className="image-content">
            <div className="title">Amenidades excepcionales.</div>
            <div className="subtitle">
              Cumple tus deseos y eleva tus experiencias. Vive los momentos más
              exquisitos en las amenidades de Mikita Town.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.image_container3}>
        <div className={`image-box ${styles.imagen_item1}`}>
          <div
            className="image gallery-effect"
            style={{
              backgroundImage: `url(/imgs/balcon.png)`,
            }}
          />
          <div className="image-content">
            <div className="title">Amenidades excepcionales.</div>
            <div className="subtitle">
              Cumple tus deseos y eleva tus experiencias. Vive los momentos más
              exquisitos en las amenidades de Mikita Town.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.image_container4}>
        <div className={`image-box ${styles.imagen_item1}`}>
          <div
            className="image gallery-effect"
            style={{
              backgroundImage: `url(/imgs/imright.png)`,
            }}
          />
          <div className="image-content">
            <div className="title">Amenidades excepcionales.</div>
            <div className="subtitle">
              Cumple tus deseos y eleva tus experiencias. Vive los momentos más
              exquisitos en las amenidades de Mikita Town.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.image_container5}>
        <div className={styles.box_left}>
          <div className={`image-box ${styles.imagen_item1}`}>
            <div
              className="image gallery-effect"
              style={{
                backgroundImage: `url(/imgs/asado.png)`,
              }}
            />
            <div className="image-content">
              <div className="title">Amenidades excepcionales.</div>
              <div className="subtitle">
                Cumple tus deseos y eleva tus experiencias. Vive los momentos
                más exquisitos en las amenidades de Mikita Town.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box_right}>
          <div className={`image-box ${styles.imagen_item2}`}>
            <div
              className="image gallery-effect"
              style={{
                backgroundImage: `url(/imgs/juegos.png)`,
              }}
            />
            <div className="image-content">
              <div className="title">Amenidades excepcionales.</div>
              <div className="subtitle">
                Cumple tus deseos y eleva tus experiencias. Vive los momentos
                más exquisitos en las amenidades de Mikita Town.
              </div>
            </div>
          </div>
          <div className={`image-box ${styles.imagen_item3}`}>
            <div
              className="image gallery-effect"
              style={{
                backgroundImage: `url(/imgs/cine.png)`,
              }}
            />
            <div className="image-content">
              <div className="title">Amenidades excepcionales.</div>
              <div className="subtitle">
                Cumple tus deseos y eleva tus experiencias. Vive los momentos
                más exquisitos en las amenidades de Mikita Town.
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </main>
  );
}
