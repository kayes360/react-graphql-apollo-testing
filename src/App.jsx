import "./App.css"; 
import Button from "./Testing/Button";
 
function App() {
    const onButtonClick = ()=>{
        alert("button clicked")
    }
  return (
    <div> 
        <Button onClick={onButtonClick} label="button">
        Button
        </Button>
    </div>
  );
}

export default App;

 
