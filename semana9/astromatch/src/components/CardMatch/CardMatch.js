import React from "react";
import { Card, Photo, Age, Text, PhotoProfile } from "../styles";

export default function CardMatch(prop) {
  return (
    <Card>
      <Photo src={prop.photo} alt="foto">
        <PhotoProfile  />
    
      <Age>
        {" "}
        <b>{prop.name},</b> &nbsp;{prop.age}
      </Age>

      <Text>
        <br></br>
        <p>{prop.bio}</p>
      </Text>  
      </Photo>
    </Card>
  );
}
