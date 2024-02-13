import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const HeroSection = () => {
    useEffect(() => {
        ScrollReveal().reveal('.FadeInLeftt', { delay: 0, interval: 300, origin: 'left', distance: '80px', reset: false});
      }, []);
    useEffect(() => {
        ScrollReveal().reveal('.FadeInRight', { delay: 0, interval: 300, origin: 'right', distance: '80px', reset: false});
      }, []);
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left" className = "FadeInLeftt">
                        <Title >Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter 
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right" className = "FadeInRight">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection