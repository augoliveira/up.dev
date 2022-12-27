import styled from 'styled-components'

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .AboutImg {
    width: 200px;
    display: flex;
    justify-self: center;
    align-self: center;
    position: relative;
    transition: 0.4s;
    transition: 1s all ease;
    border-radius: 5px;
    margin-bottom: 2rem;

    &:hover {
      transform: scale(1.1);
    }
  }

  .aboutContent {
    padding: 0 1rem;
    text-align: start;
    max-width: 31rem;
  }

  /*ESPECIALIDADES*/

  .especialidades {
    padding: 98px 0 60px;
  }
  .conteudo #titulo {
    background: url(/assets/dinamite/img/square.png) no-repeat;
    background-position: 285px 100px;
    float: left;
    margin: 5px;
    height: 675px;
    padding-top: 100px;
    width: 370px;
  }
  .conteudo #titulo h3 {
    color: #ffcc00;
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 5px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  .conteudo #titulo h1 {
    font-size: 90px;
    font-weight: 900;
    line-height: 95px;
  }
  .conteudo #titulo hr {
    border: 0;
    background: #ffcc00;
    height: 1px;
    margin: 40px 0 10px -67px;
    float: left;
    width: 163px;
  }
  .conteudo #titulo h2 {
    color: #ffcc00;
    font-family: 'Julietta';
    font-size: 90px;
    font-weight: 200;
    padding-left: 15px;
  }
  
  .aboutDescription {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 994px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);

    .AboutImg {
      width: 300px;
    }

    .aboutContent {
      width: 31rem;
      font-weight: 500;
    }
  }
`;
