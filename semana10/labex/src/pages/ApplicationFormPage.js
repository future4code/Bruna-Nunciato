import React from "react";
import { ApplicationContainer } from "./styledPages";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TextField from "@material-ui/core/TextField";
// import { makeStyles } from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import useForm from "../hooks/useForm";
import useInput from "../hooks/useInput";
import axios from "axios";
import { BASE_URL, UrlTrips } from "../constants/url";
import useRequestApi from "../hooks/useRequestApi";
import { countries } from "../constants/countries";

const ApplicationFormPage = () => {
  const [trip, handleTrip] = useInput("");
  const tripsList = useRequestApi(UrlTrips, []);

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    idTrip: "",
  });

  const onClickApplication = (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    const id = {
      id: form.idtrip,
    };

    axios
      .post(`${BASE_URL}/trips/${id}/apply`, body)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        // history.push("/trip-detail");
      })
      .catch((err) => alert(err.response.data.message));

    cleanFields();

    alert("Cadastro efetuado!");
  };
  // const listOfTrips =
  //   tripsList.trips &&
  //   tripsList.trips.map((trip) => {
  //     return <MenuItem value={trip.id}>{trip.name}</MenuItem>;
  //   });

  return (
    <ApplicationContainer>
      <Header />
      {/* {console.log(`formulario enviado` , form)} */}
      <div className="BodyApplicationContainer">
        <h1>Formulário de Inscrição</h1>
        <form
          onSubmit={onClickApplication}
          className="ApplicationContainer"
          noValidate
          autoComplete="off"
        >
          <FormControl required
          variant="outlined" className="select">
            <InputLabel id="demo-simple-select-outlined-label">
              Viagem
            </InputLabel>
            <Select
              required
              name={"idTrip"}
              labelId="outlined"
              id="demo-simple-select-outlined"
              value={form.idTrip}
              onChange={handleTrip}
              label="Viagem"
            >
              <MenuItem value="">
                <em>Escolha uma Viagem</em>
              </MenuItem>
              {tripsList.trips &&
                tripsList.trips.map((trip) => {
                  return <MenuItem value={trip.id}>{trip.name}</MenuItem>;
                })}
            </Select>
          </FormControl>

          <br />
          <br />

          <TextField
            required
            name={"name"}
            pattern={"^.{3,}"}
            title={"O nome deve conter mais de 3 caracteres"}
            className="select"
            value={form.name}
            onChange={onChange}
            id="outlined-basic"
            label="Nome"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            required
            name={"age"}
            type={"number"}
            min={18}
            className="select"
            value={form.age}
            onChange={onChange}
            id="outlined-basic"
            label="Idade"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            className="select"
            required
            name={"profession"}
            value={form.profession}
            onChange={onChange}
            id="outlined-basic"
            label="Profissão"
            variant="outlined"
          />

          <br />
          <br />
          <FormControl required variant="outlined" className="select">
            <InputLabel id="demo-simple-select-outlined-label">País</InputLabel>
            <Select
              name={"country"}
              labelId="outlined"
              id="demo-simple-select-outlined"
              value={form.country}
              onChange={onChange}
              label="País"
          
            >
              <MenuItem value="">
                <em>País</em>
              </MenuItem>
              {countries.map((country)=>{
                return <MenuItem value={country}>{country}</MenuItem>
              })}
             
            </Select>
          </FormControl>
          <br />
          <br />
          <TextField
            required
            name={"applicationText"}
            className="select"
            value={form.applicationText}
            onChange={onChange}
            id="outlined-basic"
            label="Motivação"
            variant="outlined"
          />

          <br />
          <br />

          <Button
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
    </ApplicationContainer>
  );
};
export default ApplicationFormPage;
