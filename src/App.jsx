import "./App.css";
import {  gql } from "@apollo/client";
import DisplayLocations from "./DisplayLocations";
import Button from "./Testing/Button";
export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
function App() {
    const onButtonClick = ()=>{
        alert("button clicked")
    }
  return (
    <div> 
        <Button onClick={onButtonClick} label="button"/>
    </div>
  );
}

export default App;

 
