"use client";
import Image from "next/image";
import Link from "next/link";
import s from "./Header.module.scss";
import Modal from "../Modal/Modal";
import { useState } from "react";
import Form from "../Form/Form";

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <header className={s.header_flex}>
      <Link href="/">
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width={70}
          height={84}
          className={s.logo}
        />
      </Link>
      <Link
        href="/#feedback"
        className={s.gradientBorder}
        onClick={(e) => {
          e.preventDefault();
          setModalOpen(true);
        }}
      >
        <span className={s.feedback_text}>Связаться с нами</span>
      </Link>
      {modalOpen && (
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Form onSuccess={() => setModalOpen(false)} />
        </Modal>
      )}
    </header>
  );
}
