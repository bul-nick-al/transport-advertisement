import * as React from 'react';
import styled from 'styled-components';

const phoneNumber = '+78008886677';

const Logo = styled.img`
    position: relative;
    top 30px;
    left: 30px;
`;

const Base = styled.footer`
    width: 100%;
    height: 161px
    background-image: linear-gradient(to bottom, #00aeef , #1991eb);
    text-align: left;
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
        <Logo src={require('../../../../assets/logo/logo.svg')} alt={'logo'} />
        <PhoneNumber>
            {phoneNumber}
        </PhoneNumber>
        <Links>
            <Link href="url">Носители</Link>
            <Link href="url">Сервис</Link>
            <Link href="url">Контакты</Link>
        </Links>
        <Links>
            <SocialIcons>
                <SocialIcon src={require('../../../../assets/social/vk.svg')} alt={'vk'} />
                <SocialIcon src={require('../../../../assets/social/twitter.svg')} alt={'twitter'} />
                <SocialIcon src={require('../../../../assets/social/youtube.svg')} alt={'youtube'} />
                <SocialIcon src={require('../../../../assets/social/facebook.svg')} alt={'facebook'} />
                <SocialIcon src={require('../../../../assets/social/google.svg')} alt={'google'} />
                <SocialIcon src={require('../../../../assets/social/instagram.svg')} alt={'instagram'} />
                <SocialIcon src={require('../../../../assets/social/linkedIn.svg')} alt={'linkedIn'} />
                <SocialIcon src={require('../../../../assets/social/ok.svg')} alt={'ok'} />
            </SocialIcons>
        </Links>
    </Base>
);
export default Footer;
