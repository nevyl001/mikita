import Paragraph from "../components/UI/Paragraph";
import Link from "next/link";
import Subtitle from "../components/UI/Subtitle";
import Menu from "../components/Layout/Menu";
import React from "react";
import styles from "../styles/privacidad.module.css";

export default function privacidad() {
  return (
    <div className={styles.privacidad}>
      <Menu />
      <div className={styles.section_10}>
        <div className={styles.text}>
          <Subtitle size="medium" color="white">
            AVISO DE PRIVACIDAD
          </Subtitle>
          <Paragraph size="small">Última modificación: 31 julio 2022</Paragraph>
          <Paragraph size="medium">
            De acuerdo a lo Previsto en la “Ley Federal de Protección de Datos
            Personales”, declara AGICRESA S.A. de C.V., ser un a empresa
            legalmente constituida de conformidad con las leyes mexicanas, con
            domicilio en Circuito Pedernal Picacho No. 711, Int. 113, Col. San
            Isidro Juriquilla II, Juriquilla. Santa Rosa Jauregui. Querétaro,
            Qro. C.P: 76226 ; y como responsable del tratamiento de sus datos
            personales, hace de su conocimiento que la información de nuestros
            clientes es tratada de forma estrictamente confidencial por lo que
            al proporcionar sus datos personales, tales como:
          </Paragraph>
          <Paragraph size="medium">
            1. Nombre Completo.
            <br />
            2. Dirección.
            <br />
            3. Registro Federal de Contribuyentes.
            <br />
            4. Teléfonos de Hogar, Oficina y móviles.
            <br />
            5. Correo Electrónico.
          </Paragraph>
          <Paragraph size="medium">
            Estos serán utilizados única y exclusivamente para los siguientes
            fines:
          </Paragraph>
          <Paragraph size="medium">
            1. Información y Prestación de Servicios.
            <br />
            2. Actualización de la Base de Datos.
            <br />
            3. Cualquier finalidad análoga o compatible con las anteriores.
          </Paragraph>
          <Paragraph size="medium">
            En el caso de Datos sensibles, tales como:
          </Paragraph>
          <Paragraph size="medium">
            1. Datos Financieros (Ingresos, Estados de Cuenta, y demás
            relacionados)
            <br />
            2. Datos Patrimoniales (Bienes Materiales, Inmuebles, y demás
            relacionados)
            <br />
            3. Datos Personales (Cónyuge, Estado Civil, Nacionalidad, Educación,
            Hijos, y demás relacionados).
            <br />
            4. Referencias familiares y no familiares (Nombre, Dirección,
            Teléfono, relación, etc.).
          </Paragraph>
          <Paragraph size="medium">
            Estos serán utilizados única y exclusivamente para los siguientes
            fines:
          </Paragraph>
          <Paragraph size="medium">
            1. Investigación y/u Obtención de Créditos ante las Instituciones
            Financieras.
            <br />
            2. Cualquier finalidad análoga o compatible con la anterior.
            <br />
            3. Información y Prestación de Servicios.
          </Paragraph>
          <Paragraph size="medium">
            Para prevenir el acceso no autorizado a sus datos personales y con
            el fin de asegurar que la información sea utilizada par a los fines
            establecidos en este aviso de privacidad, hemos establecido diversos
            procedimientos con la finalidad de evitar el uso o divulgación no
            autorizados de sus datos, permitiéndonos tratarlos debidamente.
          </Paragraph>
          <Paragraph size="medium">
            Así mismo, le informamos que sus datos personales pueden ser
            Transmitidos para ser tratados por personas distintas a esta
            empresa.
          </Paragraph>
          <Paragraph size="medium">
            Todos sus datos personales son tratados de acuerdo a la legislación
            aplicable y vigente en el país, por el lo le informamos que usted
            tiene en todo momento los derechos(ARCO) de acceder, rectificar,
            cancelar u oponerse al tratamiento que le damos a sus datos
            personales; derecho que podrá hacer valer a través del Área de
            Privacidad encargada de la seguridad de datos personales en el
            Teléfono (442) 880 0472, o por medio de su correo electrónico:
            administrativoqro@agicresa.com.mx
            <br />A través de estos canales usted podrá actualizar sus datos y
            especificar el medio por el cual desea recibir información, ya que
            en caso de no contar con esta especificación de su parte, AGICRESA
            establecerá libremente el canal que considere pertinente para
            enviarle información.
          </Paragraph>
          <Paragraph size="medium">
            Este aviso de privacidad podrá ser modificado por AGICRESA S.A. de
            C.V., dichas modificaciones serán oportunamente informadas a través
            de correo electrónico, teléfono, o cualquier otro medio de
            comunicación que AGICRESA S.A. de C.V. determine para tal efecto.
          </Paragraph>
          <Paragraph size="medium">
            ATENTAMENTE
            <br />
            AGICRESA S.A. de C.V.
          </Paragraph>
        </div>
        <div className={styles.foo_down}>
          <div className={styles.btn}>
            <Link href="/">
              <a>VOLVER AL HOME</a>
            </Link>
          </div>
          <div className={styles.direccion}>
            <Paragraph>
              Circuito Pedernal Picacho # 711, C.P. 76226, Col. San Isidro
              Juriquilla, Santiago de Querétaro, Qro.
            </Paragraph>
            <Paragraph>MIKITA TOWN | Todos los derechos reservados.</Paragraph>
            <Subtitle size="small" color="white">
              Las imágenes e información presentadas en esta página son
              solamente como referencia y no deben ser consideradas como
              definitivas. Los precios pueden ser modificados sin previo aviso.
            </Subtitle>
            <Subtitle size="small" color="white">
              Powered by Fortemus
            </Subtitle>
          </div>
        </div>
      </div>
    </div>
  );
}
