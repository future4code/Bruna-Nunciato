import React, { useContext } from "react";
import useForm from "../../hooks/useForm";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { HeaderContainer, Group } from "./styled";
import { Button, Form, Input } from 'reactstrap';


export default function Header(props) {
  const { form, onChange, cleanFields } = useForm({
    firstName: "",
    lastName: "",
    participation: ""
  });
  const { setPerson, setReset } = useContext(GlobalStateContext);

  const sendForm = (event) => {
    event.preventDefault();
    console.log("Formulário enviado!", form);
    setPerson(form);
    cleanFields();
  };
  
  const reStart = ()=>{
    setReset(true)
  }

  return (
    <HeaderContainer>
      <Form  onSubmit={sendForm} inline>
        <Group>
        <Input className="input-space"
          name={"firstName"}
          value={form.firstName}
          onChange={onChange}
          placeholder="First Name"
          required
          pattern={"^.{3,}"}
          title={"type your first name"}
        />
        <Input className="input-space"
          name={"lastName"}
          value={form.lastName}
          onChange={onChange}
          placeholder="Last Name"
          required
          pattern={"^.{2,}"}
          title={"type your last name"}
        />
        <Input className="input-space"
          name={"participation"}
          value={form.participation}
          onChange={onChange}
          placeholder="Participation"
          required
          type={"number"}
        />  
        
        <button className="btn btn-primary-outline">
        SEND</button>
     </Group>
      </Form>
      <Button className="buttonX" onClick={reStart} color="danger">CLEAN DATA</Button>
    </HeaderContainer>
  );
}
