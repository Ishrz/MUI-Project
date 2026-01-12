import "./App.css";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import SideBar from './components/SideBar'
import Stack from '@mui/material/Stack';




const App = () => {

     


  return (
    <div className="">
      <Navbar/>
      <Stack direction={'row'} justifyContent={"space-between"}>
      <SideBar >
        Hello
      </SideBar>
      <Feed/>
      <RightBar/>
      </Stack>
    </div>
  
  )

}

export default App;
