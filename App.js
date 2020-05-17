import React from "react";
import { Text, ScrollView, View, Image } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <TitleBar>
          <Ionicons name="ios-arrow-back" size={24} color="#52575D" />
          <Ionicons name="md-more" size={24} color="#52575D" />
        </TitleBar>

        <View style={{ alignSelf: "center" }}>
          <ProfileImage>
            <Image
              source={require("./assets/profile-pic.jpg")}
              style={{
                flex: 1,
                height: undefined,
                width: undefined,
              }}
              resizeMode="cover"
            />
          </ProfileImage>
          <Dm>
            <MaterialIcons name="chat" size={18} color="#DFD8C8" />
          </Dm>
          <Active />
          <Add>
            <Ionicons
              name="ios-add"
              size={48}
              color="#DFD8C8"
              style={{ marginTop: 6, marginLeft: 2 }}
            />
          </Add>
        </View>

        <InfoContainer>
          <Name>Julie</Name>
          <Job>Photographer</Job>
        </InfoContainer>

        <StatsContainer>
          <StatsBox>
            <Text>483</Text>
            <SubText>Posts</SubText>
          </StatsBox>
          <StatsBox
            style={{
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderColor: "#DFD8C8",
            }}
          >
            <Text>483</Text>
            <SubText>Followers</SubText>
          </StatsBox>
          <StatsBox>
            <Text>483</Text>
            <SubText>Following</SubText>
          </StatsBox>
        </StatsContainer>

        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <MediaImageContainer>
              <Image
                source={require("./assets/media1.jpg")}
                style={{
                  flex: 1,
                  height: undefined,
                  width: undefined,
                  borderRadius: 15,
                }}
                resizeMode="cover"
              />
            </MediaImageContainer>
            <MediaImageContainer>
              <Image
                source={require("./assets/media2.jpg")}
                style={{
                  flex: 1,
                  height: undefined,
                  width: undefined,
                  borderRadius: 15,
                }}
                resizeMode="cover"
              />
            </MediaImageContainer>
            <MediaImageContainer>
              <Image
                source={require("./assets/media3.jpg")}
                style={{
                  flex: 1,
                  height: undefined,
                  width: undefined,
                  borderRadius: 15,
                }}
                resizeMode="cover"
              />
            </MediaImageContainer>
          </ScrollView>

          <MediaCount>
            <Text style={{ fontSize: 24, color: "#DFD8C8", fontWeight: "300" }}>
              70
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#DFD8C8",
                fontWeight: "300",
                textTransform: "uppercase",
              }}
            >
              Media
            </Text>
          </MediaCount>
        </View>
      </ScrollView>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1 1 auto;
  background-color: #fff;
`;

const TitleBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  margin-right: 16px;
  margin-left: 16px;
`;

const ProfileImage = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 9999px;
  overflow: hidden;
`;

const Dm = styled.View`
  background-color: #41444b;
  position: absolute;
  top: 20px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Active = styled.View`
  background-color: #34ffb9;
  position: absolute;
  bottom: 28px;
  left: 10px;
  padding: 4px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;

const Add = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  right: 0;
  bottom: 0;
  width: 60px;
  height: 60px;
  background-color: #41444b;
  border-radius: 30px;
`;

const InfoContainer = styled.View`
  margin-top: 16px;
  align-items: center;
  align-content: center;
`;

const Name = styled.Text`
  font-family: sans-serif;
  font-weight: 200;
  font-size: 36px;
  color: #52575d;
`;

const Job = styled(Name)`
  color: #aeb5bc;
  font-size: 14px;
`;

const StatsContainer = styled.View`
  flex-direction: row;
  align-self: center;
  margin-top: 32px;
`;

const StatsBox = styled.View`
  flex: 1 1 auto;
  align-items: center;
`;

const SubText = styled(Name)`
  font-size: 12px;
  font-weight: 500;
  color: #aeb5bc;
  text-transform: uppercase;
`;

const MediaImageContainer = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 12px;
  overflow: hidden;
  margin: 0 10px;
`;

const MediaCount = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 50%;
  margin-top: -50px;
  margin-left: 30px;
  width: 90px;
  height: 90px;
  background-color: #41444b;
  border-radius: 12px;

  shadow-color: rgba(0, 0, 0, 0.38);
  shadow-offset: 0 20px;
  shadow-radius: 30px;
  shadow-opacity: 1;
  elevation: 5;
`;
