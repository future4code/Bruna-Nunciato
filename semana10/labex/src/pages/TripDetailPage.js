import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import {BASE_URL} from '../constants/url'
import { useHistory } from 'react-router-dom';
// import useProtectedPage from '../hooks/useProtectedPage';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';

const TripDetailPage = () => {
  //     const [trip, setTrip] = useState ({})
  //     const history = useHistory()

  //    useProtectedPage()

  //    useEffect(()=>{
  //     document.title ="LabeX - Viagens"
  //    })

  //     const getTripDetail = (id) =>{
  //         axios
  //         .get(`${BASE_URL}/trip/${id}`, {
  //             headers: {
  //                 auth: localStorage.getItem ("token")
  //             }
  //         })
  //         .then((res) =>{
  //             setTrip(res.data.trip)
  //         })
  //         .catch((err) => alert(err.response.data))
  //         }
  //         useEffect (() => {
  //         getTripDetail("assistir aula")
  //     },[])

  return (
    <div>
      <p> Gerenciar Trips </p>
      {/* {trip.name ? trip.name: <p>Carregando...</p>} */}
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>

      <Button
        variant="contained"
        color="secondary"
        className={""}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </div>
  );
};
export default TripDetailPage;