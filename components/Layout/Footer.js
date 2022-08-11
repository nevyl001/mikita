import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import Button from "../UI/Button";
import Paragraph from "../UI/Paragraph";
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container"></div>
    </footer>
  );
};

export default Footer;
