import AddButton from "./stories/AddButton";
import AwardCard from "./stories/AwardCard";
import { Button } from "./stories/Button";
import awardExtra from "./assets/award-extra.png";

function App() {
  const item = {
    id: 1,
    brandName: 'Horecah',
    title: 'Best Chef',
    department: 'Kitchen',
    position: 'Head Chef'
  }

  return (
    <div className="mt-10 bg-white shadow-md items-center justify-center rounded-lg w-4/12 m-auto">
      <div className="items-center justify-center w-11/12 m-auto h-[calc(90vh-20px)] relative">
        <h2 className="text-left pt-4 text-[#484848] text-[24px]">Achievement</h2>
        <AwardCard item={item}/>
        <AddButton />
        <div className="absolute bottom-4 w-full">
          <img src={awardExtra} className="w-11/12 m-auto" alt="no img" />
          <Button backgroundColor={"#002351"} color={"white"} width={"70%"} label={"Next"} className='mr-5 mt-4'/>
          <Button width={"25%"} label={"Back"} color={"#002351"}/>
        </div>
      </div>
    </div>
  );
}

export default App;
