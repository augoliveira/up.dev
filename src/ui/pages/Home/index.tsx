'use client'
import { Section } from '#/styles/styles'
import GlobalStyles from '#/styles/GlobalStyle'
import { HomeHero } from '#/ui/components/Home'
import Main from 'ui/components/Main'
import * as S from './styles'
import Scroll from '#/ui/components/Scroll'
import Paralax from '#/ui/components/Paralax'
export default function Home() {
  return (
    <>

      <S.Wrapper>
          <Paralax />
        <GlobalStyles />
      </S.Wrapper>
    </>
  );
}
