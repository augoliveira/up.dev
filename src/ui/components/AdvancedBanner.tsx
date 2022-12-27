import { ParallaxBanner } from 'react-scroll-parallax';
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';
import Image from 'next/image'
import Bg from '../../../public/181.jpg';
import BgImg from '../../../public/Bg-fuguete.png';
import { HomeHero } from './Home';


export const AdvancedBannerTop = () => {
  const background: BannerLayer = {
    children: (
      <Image
        src={Bg}
        fill
        placeholder="blur"
        blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
        quality={100}
        sizes="75%"
        style={{
          objectFit: 'cover',
        }}
        alt={''}
      />
    ),
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        <HomeHero />
      </div>
    ),
  };

  const foreground: BannerLayer = {
    children: (
      <Image
        src={BgImg}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
        alt={''}
      />
    ),
    translateY: [0, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };


  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="full"
    />
  );
};
