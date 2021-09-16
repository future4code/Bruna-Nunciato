import React, { useContext } from "react";
import useForm from "../../hooks/useForm";
import { GlobalStateContext } from "../../global/GlobalStateContext";

export default function Header() {
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
    <div>
      <form onSubmit={sendForm}>
        <input
          name={"firstName"}
          value={form.firstName}
          onChange={onChange}
          placeholder="First Name"
          required
          pattern={"^.{3,}"}
          title={"type your first name"}
        />
        <input
          name={"lastName"}
          value={form.lastName}
          onChange={onChange}
          placeholder="Last Name"
          required
          pattern={"^.{2,}"}
          title={"type your last name"}
        />
        <input
          name={"participation"}
          value={form.participation}
          onChange={onChange}
          placeholder="Participation"
          required
          type={"number"}
        />
        <button>SEND</button>
      </form>
      <button onClick={reStart}>Clean Fileds</button>
    </div>
  );
}
