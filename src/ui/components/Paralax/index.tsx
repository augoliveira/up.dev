/* eslint-disable @next/next/no-img-element */
'use client';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AdvancedBannerTop } from '../AdvancedBanner';
import Main from '../Main';
import * as S from './styles';


export default function App() {
  return (
    <ParallaxProvider>
      <AdvancedBannerTop />
      <S.Wrapper>
        <Main/>
      </S.Wrapper>

    </ParallaxProvider>
  );
}
