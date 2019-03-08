import * as React from 'react';
import styled from 'styled-components';
import mediaPultLogo from '../../../../assets/logo/logo.svg';
import vkLogo from '../../../../assets/social/vk.svg';
import twitterLogo from '../../../../assets/social/twitter.svg';
import youtubeLogo from '../../../../assets/social/youtube.svg';
import facebookLogo from '../../../../assets/social/facebook.svg';
import googleLogo from '../../../../assets/social/google.svg';
import instagramLogo from '../../../../assets/social/instagram.svg';
import linkedInLogo from '../../../../assets/social/linkedIn.svg';
import okLogo from '../../../../assets/social/ok.svg';

const phoneNumber = '+78008886677';

const Logo = styled.img`
    position: relative;
    top: 30px;
    left: 30px;
`;

const Base = styled.footer`
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 161px;
    background-image: linear-gradient(to bottom, #00aeef, #1991eb);
    text-align: left;
    font-family: 'Open Sans', sans-serif;
`;

const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Link = styled.a`
    color: white;
    padding: 0 15px;
    text-decoration: none;
`;

const SocialIcons = styled.div`
    margin-top: 50px;
`;

const SocialIcon = styled.img`
    padding: 0 30px;
`;

const PhoneNumber = styled.div`
    position: relative;
    float: right;
    font-size: 24px;
    color: white;
    top: 30px;
    right: 20px;
`;

const Footer = () => (
    <Base>
        <Logo src={mediaPultLogo} alt={'logo'} />
        <PhoneNumber>{phoneNumber}</PhoneNumber>
        <Links>
            <Link href="url">Носители</Link>
            <Link href="url">Сервис</Link>
            <Link href="url">Контакты</Link>
        </Links>
        <Links>
            <SocialIcons>
                <SocialIcon
                    src={vkLogo}
                    alt={'vk'}
                />
                <SocialIcon
                    src={twitterLogo}
                    alt={'twitter'}
                />
                <SocialIcon
                    src={youtubeLogo}
                    alt={'youtube'}
                />
                <SocialIcon
                    src={facebookLogo}
                    alt={'facebook'}
                />
                <SocialIcon
                    src={googleLogo}
                    alt={'google'}
                />
                <SocialIcon
                    src={instagramLogo}
                    alt={'instagram'}
                />
                <SocialIcon
                    src={linkedInLogo}
                    alt={'linkedIn'}
                />
                <SocialIcon
                    src={okLogo}
                    alt={'ok'}
                />
            </SocialIcons>
        </Links>
    </Base>
);
export default Footer;
