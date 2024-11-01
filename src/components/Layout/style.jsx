import { Link } from "react-router-dom";
import styled from "styled-components";

export const LayoutCabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 20px;
  background-color: #8b96a0;
  border-radius: 18px;
`;
export const LayoutDivisoria = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const LayoutLista = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  list-style: none;
  color: black;
`;

export const LayoutLogo = styled.img`
  max-width: 80px;
  border-radius: 50%;
`;

export const LayoutItens = styled(Link)`
  font-size: 18px;
`;

export const LayoutBotao = styled(Link)`
  background-color: #f51111ba;
  padding: 10px 20px;
  cursor: pointer;
  color: black;
  border-radius: 15px;
  transition: 0.3s ease-in-out;
`;
