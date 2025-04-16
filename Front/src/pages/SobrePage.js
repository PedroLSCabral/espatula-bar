import React from 'react';
import { Container, Title, Paragraph } from '../styles/styledConsts';

const Sobre = () => {
  return (
    <Container>
      <Title>Sobre o Projeto</Title>
      <Paragraph>
        Este projeto foi desenvolvido por Luiz Eduardo e Pedro Lucas como parte da disciplina de Banco de Dados I.
      </Paragraph>
      <Paragraph>
        Nosso objetivo foi criar um sistema de controle e gerenciamento de dados usando React e uma API RESTful.
      </Paragraph>
      <Paragraph>
        No momento em que o projeto foi feito, somos do 4 período do curso de Ciência de Dados e IA na UFPB.
      </Paragraph>
      
    </Container>
  );
};

export default Sobre;