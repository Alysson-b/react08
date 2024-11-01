import { CardDiv, CardPoster, CardTitulo } from "./style";

export const Card = ({ filme }) => {
  return (
    <>
      <CardDiv>
        <CardTitulo>{filme.title}</CardTitulo>
        <CardPoster
          src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
          alt=""
        />
      </CardDiv>
    </>
  );
};
