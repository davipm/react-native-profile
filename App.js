import React from "react";
import { Text, ScrollView, View, SafeAreaView, Image } from "react-native";
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
                borderRadius: 9999,
              }}
              resizeMode="center"
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
