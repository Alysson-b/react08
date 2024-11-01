import { Link, Outlet } from "react-router-dom";
import {
  LayoutBotao,
  LayoutCabecalho,
  LayoutDivisoria,
  LayoutItens,
  LayoutLista,
  LayoutLogo,
} from "./style";

export const Layout = () => {
  return (
    <>
      <LayoutCabecalho>
        <LayoutDivisoria>
          <LayoutLogo
            src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_960_720.png 1x, https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_1280.png"
            alt="logo"
          />
          <LayoutLista>
            <LayoutItens to={"/"}>Inicio</LayoutItens>
            <LayoutItens to={"/filmes"}>Filmes</LayoutItens>
            <LayoutItens to={"/series"}>Series</LayoutItens>
          </LayoutLista>
        </LayoutDivisoria>
        <LayoutDivisoria>
          <i></i>
          <LayoutBotao>Entar</LayoutBotao>
          <LayoutBotao>Cadastrar</LayoutBotao>
        </LayoutDivisoria>
      </LayoutCabecalho>
      <main>
        <Outlet />
      </main>
    </>
  );
};
