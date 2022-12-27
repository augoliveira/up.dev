'use client'
import LogoSVG from 'assets/svg/LogoSVG'
import { About } from '../About'
import * as S from './styles'


const Main = ({
  title = 'Next.js Pro - Boilerplate',
  description = 'A ready to production Next.js boilerplate'
}) => (
  <>
    <S.Wrapper>
      <S.Logo>
        <LogoSVG />
      </S.Logo>

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <About />
    </S.Wrapper>
  </>
)

export default Main
