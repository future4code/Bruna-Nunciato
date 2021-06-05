import React from "react";
import { Card, Photo, Age, Text } from "../styles";

export default function CardMatch(prop) {
  return (
    <Card>
      <Photo>
        <img width="100%" height="300px" src={prop.photo} alt="foto" />
      </Photo>
      <Age>
        {" "}
        <b>{prop.name},</b> &nbsp;{prop.age}
      </Age>

      <Text>
        <br></br>
        <p>{prop.bio}</p>
      </Text>
    </Card>
  );
}
