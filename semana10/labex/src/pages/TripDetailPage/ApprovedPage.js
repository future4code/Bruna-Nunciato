import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const ApprovedPage = (props) => {
  return(
  <div>
    <Card>
      <CardContent width="70%">
      {props.candidateApproved &&
        props.candidateApproved.map((candidate) => {
          return (
            <div>
               <h4>    <b>Nome: </b>{candidate.name.toUpperCase()} {" "}    </h4>
            </div>
          );
        })}
      {!props.candidateApproved && (
        <p>Não existem candidatos aprovados para esta viagem</p>
      )}
</CardContent>
    </Card>
  </div>
  )
};
export default ApprovedPage;
