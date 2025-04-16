import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;

export const Select = styled.select`
  width: 142px;
  padding: 0px 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  background-color: white;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
`;

export const Label = styled.label``;

export const Input = styled.input`
    width: 120px;
    padding: 0px 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-word;
`;


export const Thead = styled.thead``;


export const Tr = styled.tr``;


export const Th = styled.th`
  width: 30%;
  text-align: start;
  border-bottom: 5px solid #ccc;
  padding: 10px 5px;
  white-space: nowrap; 
`;


export const Tbody = styled.tbody``


export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  margin: 10px 0;
`;

export const Image = styled.img`
  margin-top: 30px;
  width: 200px;
  height: auto;
`;


