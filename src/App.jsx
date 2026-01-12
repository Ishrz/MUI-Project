import { styled } from "@mui/material/styles";
import "./App.css";
import Button from "@mui/material/Button";
import Section from "./components/Section";

export const MyButton=styled(Button)({
        backgroundColor:'#1f2f5f',
        color:'red',
        '&:hover':{backgroundColor:'pink', scale:'0.85'},
        '&:active':{backgroundColor:'red'},
        padding:'20px',
        borderRadius:'50px',
    })


const App = () => {

     


  return (
    <div className="text-white/40 bg-black w-full h-screen">
      <h1>Home</h1>
      <Button
        variant="outlined"
        sx={{backgroundColor:'gray', border:'black', color:'black'}}
        
      >
        Button
      </Button>
      <MyButton>MEra custom button</MyButton>
      <Section/>
    </div>
  );
};

export default App;
