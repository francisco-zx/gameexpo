import React from "react";
import {
  Section,
  Title,
  Map,
  MapContainer,
  TextContainer,
  OrangeTitle,
  YellowTitle,
  BlueTitle,
  LigthBlueTitle,
  SubText,
  SubTextContainer,
  CustomImage,
  JumpInButton,
  BorderImage,
  ButtonContainer,
  SecondBorderImage,
  SecondButtonContainer,
  SecondJumpInButton,
} from "./styles";
import { Container } from "../Container";
import { breakpoints } from "../../../utils/theme";
import Button from "../Button";
import styled from "styled-components";
import map from "../../images/mapjune.png";
import buttonborder from "../../images/buttonborder.png";

const Sitemap = () => (
  <Section id="sitemap">
    <Container>
      <Title>GAME EXPO MAP</Title>
      <MapContainer>
        <Map>
          {/* <StaticImage
                    src={'../../images/DCL_AW_MAP 2.png'}
                /> */}
          <CustomImage src={map} alt="Sitemap" />
        </Map>
        <TextContainer>
          <SubTextContainer>
            <OrangeTitle>Blockchain Game Alliance Zone</OrangeTitle>
            <SubText>B1 - Blockchain Game Alliance</SubText>
            <SubText>B2 - UFORIKA - Ride to Survive</SubText>
            <SubText>B3 - The Desolation</SubText>
            <SubText>B4 - Clay Nation</SubText>
            <SubText>B5 - Aura</SubText>
            <SubText>B6 - Synergy Land</SubText>
          </SubTextContainer>
          <SubTextContainer>
            <YellowTitle>Decentraland Games Zone</YellowTitle>
            <SubText>B7 - Vroomway</SubText>
            <SubText>B8 - Ratscape</SubText>
            <SubText>B9 - Neon Crystal Maze</SubText>
            <SubText>B10 - Dialogic</SubText>
            <SubText>B11 - Soul Magic</SubText>
            <SubText>B12 - The Cavern</SubText>
            <SubText>B13 - Racetrack</SubText>
          </SubTextContainer>
          <SubTextContainer>
            <BlueTitle>RPG AND MMO ZONE</BlueTitle>
            <SubText>B14 - World of Kogaea</SubText>
            <SubText>B15 - DeFi Kingdoms</SubText>
            <SubText>B16 - Legions 2029</SubText>
            <SubText>B17 - Knights of Antrom</SubText>
            <SubText>B18 - AnyMagik</SubText>
            <SubText>B19 - Aavegotchi</SubText>
          </SubTextContainer>
          <SubTextContainer>
            <LigthBlueTitle>SPEED AND STRATEGY ZONE</LigthBlueTitle>
            <SubText>B20 - Sandstorm</SubText>
            <SubText>B21 - LootRush</SubText>
            <SubText>B22 - MotoDEX</SubText>
            <SubText>B23 - Space Traitor</SubText>
            <SubText>B24 - Planet Mojo</SubText>
            <SubText>B25 - Chibi Clash</SubText>
          </SubTextContainer>
          <ButtonContainer href="https://decentraland.org/events/event/?id=e5fcbaa3-8a51-4fbb-8ecb-89622d9e7eab&utm_source=landing&utm_medium=organic&utm_campaign=dclgx" target="_blank">
            <JumpInButton>Jump In</JumpInButton>
            <BorderImage
              src={buttonborder}
              alt="border"
              style={{
                position: "absolute",
                right: "-16px",
                width: "56px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </ButtonContainer>
        </TextContainer>
      </MapContainer>
      <SecondButtonContainer href="https://decentraland.org/blog/announcements/the-ultimate-guide-to-decentraland-game-expo-24?utm_org=dcl&utm_source=landing&utm_campaign=dclgx" target="_blank">
        <SecondJumpInButton>READ THE ULTIMATE GUIDE</SecondJumpInButton>
        <SecondBorderImage
          src={buttonborder}
          alt="border"
          style={{
            position: "absolute",
            right: "-16px",
            width: "56px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      </SecondButtonContainer>
    </Container>
  </Section>
);

const SaveTheDate = styled(Button)`
  width: 100%;
`;

const Polygon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 8px;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-left: 16px;
  }
`;

export default Sitemap;
