import React, { ElementRef, useRef } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import Container from "../../../components/Container";
import { S } from "./Contact_Styles";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../../i18n/LanguageContext";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_c18gcrl", "template_nh10rcf", form.current, {
        publicKey: "nVBVTVvwCXLSy2kRv",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
      e.target.reset()
  };

  return (
    <S.Contact id={"contact"}>
      <Container>
        <SectionTitle>{t.contact.title}</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field required placeholder={t.contact.name} name={'user_name'}/>
          <S.Field required placeholder={t.contact.email} name={'email'} type={'email'}/>
          <S.Field required placeholder={t.contact.subject} name={'subject'}/>
          <S.Field required placeholder={t.contact.message} as={"textarea"} name={'message'}/>
          <Button type={"submit"}>{t.contact.send}</Button>
        </S.Form>
      </Container>
    </S.Contact> 
  );
};

export default Contact;
