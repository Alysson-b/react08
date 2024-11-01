import axios from "axios";
import { InicioContainerFilmes, Textsh1 } from "./style";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";

export const Inicio = () => {
  const [filmes, setFilmes] = useState();

  async function buscarFilmes() {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR"
      );
      setFilmes(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    buscarFilmes();
  }, []);
  return (
    <>
      <Textsh1>Filmes de Polulares</Textsh1>
      <InicioContainerFilmes>
        {filmes && filmes.map((element) => <Card filme={element} />)}
      </InicioContainerFilmes>
    </>
  );
};
