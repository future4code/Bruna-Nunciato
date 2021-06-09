import React, {useState} from 'react'
import { LoginContainer } from './styledPages'
import Header from '../components/Header/Header'
import Footer from "../components/Footer/Footer";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


const ApplicationFormPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [country, setCountry] = useState("");
  const [motivation, setMotivation] = useState("");
  const [trip, setTrip] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleAge = (event) => {
    setAge(event.target.value);
  };
  const handleProfession = (event) => {
    setProfession(event.target.value);
  };
  const handleCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleMotivation = (event) => {
    setMotivation(event.target.value);
  };
  const handleTrip = (event) => {
    setTrip(event.target.value);
  };

  return (
    <LoginContainer>
      <Header />
      <div className="BodyApplicationContainer">
         <form noValidate autoComplete="off">
          <select>
            <option value="" disabled selected>
              Escolha a Viagem
            </option>
            <option value="Brasil">Marte</option>
            <option value="USA">Jupiter</option>
          </select>
          {/* <TextField
            value={name}
            onChange={handleName}
            id="outlined-basic"
            label="Nome"
            variant="nome"
          />
          <br />
          <br />
          <TextField
            value={age}
            onChange={handleAge}
            id="outlined-basic"
            label="Idade"
            variant="age"
          />
          <TextField
            value={profession}
            onChange={handleProfession}
            id="outlined-basic"
            label="Profissão"
            variant="profissao"
          /> */}

{/* <FormControl variant="outlined" className={""}>
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleAge}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Marte</MenuItem>
          <MenuItem value={20}>Venus</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}





          {/* <select>
            <option value="" disabled selected>
              Escolha o país
            </option>
            <option value="Brasil">Brasil</option>
            <option value="USA">USA</option>
          </select> */}
          {/* <TextField
            value={motivation}
            onChange={handleMotivation}
            id="outlined-basic"
            label="Motivação"
            variant="motivation"
          />*/}
         </form> 
        <Button className="EnterButton" variant="contained" color="primary">
          Enviar
        </Button>
      </div>
      <Footer />
    </LoginContainer>
  );
};
export default ApplicationFormPage;