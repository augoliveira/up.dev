import styled from 'styled-components'

export const Wrapper = styled.main`
  background: linear-gradient(160.44deg, #6d23b6 1.37%, #47126b 58.45%);
  box-shadow: inset 10px 10px 20px #9783e3;
  border-radius: 10px;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.div`
  margin-bottom: 2rem;
  svg {
    width: 200px;
    fill: white;
  }
  color: white;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`
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
`
