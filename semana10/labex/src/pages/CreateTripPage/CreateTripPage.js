import React from "react";
import { CreateTripContainer } from "../../styledPages/styledPages";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";


const CreateTripPage = () => {
   const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });
  useProtectedPage();

  const onClickCreate = (event) => {
    event.preventDefault();

    const day = form.date.slice(8, 10);
    const month = form.date.slice(5, 7);
    const year = form.date.slice(0, 4);
    const okDate = `${day}/${month}/${year}`;

    const body = {
      name: form.name,
      planet: form.planet,
      date: okDate,
      description: form.description,
      durationInDays: Number(form.durationInDays),
    };
  
    axios
      .post(`${BASE_URL}/trips/`, body, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then(() => {
       alert("Viagem adicionada!");
      })
      .catch((err) => alert(err.response.data.message));

    cleanFields();
  };

  return (
    <CreateTripContainer>
      <Header />
      <div className="BodyCreateContainer">
        <h1>Criar Viagem</h1>
        <form
          onSubmit={onClickCreate}
          className="ApplicationContainer"
          noValidate
          autoComplete="off"
        >
          <br />
          <br />

          <TextField
            required
            name={"name"}
            pattern={"^.{3,}"}
            title={"O nome deve conter mais de 3 caracteres"}
            className="formCreate"
            value={form.name}
            onChange={onChange}
            id="outlined-basic"
            label="Nome"
            variant="outlined"
          />
          <br />
          <br />
          <FormControl required variant="outlined" className="formCreate">
            <InputLabel id="demo-simple-select-outlined-label">
              Planeta
            </InputLabel>
            <Select
              name={"planet"}
              labelId="outlined"
              id="demo-simple-select-outlined"
              value={form.planet}
              onChange={onChange}
              label="Planeta"
            >
              <MenuItem value="">
                <em>Planeta</em>
              </MenuItem>
              <MenuItem value={"mercúrio"}>Mercúrio</MenuItem>
              <MenuItem value={"Vênus"}>Vênus</MenuItem>
              <MenuItem value={"Terra"}>Terra</MenuItem>
              <MenuItem value={"Jupiter"}>Jupiter</MenuItem>
              <MenuItem value={"Saturno"}>Saturno</MenuItem>
              <MenuItem value={"Urano"}>Urano</MenuItem>
              <MenuItem value={"Netuno"}>Netuno</MenuItem>
              <MenuItem value={"Plutão"}>Plutão</MenuItem>
            </Select>
          </FormControl>

          <br />
          <br />
          <TextField
            required
            min="30/06/2021"
            name={"date"}
            type={"date"}
            className="formCreate"
            value={form.date}
            onChange={onChange}
            id="outlined-basic"
            // label="Data"
            variant="outlined"
          />
          <br />
          <br />

          <TextField
            required
            name={"durationInDays"}
            type={"number"}
            min={18}
            className="formCreate"
            value={form.durationInDays}
            onChange={onChange}
            id="outlined-basic"
            label="Duração em dias"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            required
            name={"description"}
            pattern={"^.{3,}"}
            title={"O nome deve conter mais de 3 caracteres"}
            className="formDrescription"
            value={form.description}
            onChange={onChange}
            id="outlined-basic"
            label="Descrição"
            variant="outlined"
          />
          <br />
          <br />

          <Button
            type="submit"
            className="EnterButton"
            variant="contained"
            color="primary"
            endIcon={<Icon>send</Icon>}
          >
            Enviar
          </Button>
        </form>
      </div>
      <Footer />
    </CreateTripContainer>
  );
};
export default CreateTripPage;
