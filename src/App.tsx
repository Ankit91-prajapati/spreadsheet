
import Toolbar from './components/Toolbar';
import TopToolbar from './components/Topbar';
import Footertitle from './components/Footertitle';
import Table from './components/Table';
import StyledHeaderRow from './components/HeaderRow';



function App() {


  return (
    <div className="flex flex-col h-screen bg-gray-50 w-[1440px] h-[1024px]">
      <TopToolbar/>
      <Toolbar />
      <StyledHeaderRow/>
      <Table/>
      
      <Footertitle/>
    </div>
  );
}

export default App;