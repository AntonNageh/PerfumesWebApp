import { useNavigate } from "react-router";
import levenshtein from 'fast-levenshtein';
import TrendyProducts from "../../MainComponents/Trendy/TrendyProducts";
const Search = (props) => {
  const navigate = new useNavigate();
  
const searchValue = props.searchValue.toLowerCase();

const options = [
  { value: "thematic", label: "Thematic" },
  { value: "exclusive", label: "Exclusive" },
  { value: "vintage", label: "Vintage" },
  { value: "niche", label: "Niche" },
  { value: "occasions", label: "Occasions" },
];

const threshold = 5; 

const bestMatch = options.reduce((best, option) => {
  const distance = levenshtein.get(searchValue, option.value);
  if (distance < threshold && distance < best.distance) {
    return { distance, label: option.label };
  }
  return best;
}, { distance: threshold + 1, label: '' });
console.log(props)
const result = bestMatch.distance <= threshold ? 
(
      (() => {
  switch (bestMatch.label.toLowerCase()) {
    case "thematic":
      return <div className="flex justify-around lg:-mt-[5em]">
              <TrendyProducts title="Thematic" name="Vampire Blood" src={props.Images.Perfume10}/> 
             </div>
    case "exclusive": 
      return <div className="flex justify-around lg:-mt-[5em]">
              <TrendyProducts title="Exclusive" name="Midnight Spectre" src={props.Images.Perfume4}/>
             </div>
    case "vintage":
      return <div className="flex justify-around lg:-mt-[5em]">
              <TrendyProducts title="Vintage" name="Ghost Keep" src={props.Images.Perfume11}/>
             </div>
    case "niche":
      return  <div className="flex justify-around lg:-mt-[5em]">
                <TrendyProducts title="Niche" name="Vampire Keep" src={props.Images.Perfume12}/>
              </div>
    case "occasions":
        return <div className="flex justify-around lg:-mt-[5em]">
                <TrendyProducts title="Occasions" name="Vampire Teeth" src={props.Images.Perfume3}/> 
               </div> 
    default:
      return <h1 className="mt-52 ml-10">"{props.searchValue}" was not found,<br/> Please go back to 
          <span onClick={()=>navigate("/home")} className="text-blue-600"> Homepage.</span> </h1>
  }
})()
) : (
  <h1 className="mt-52 ml-10">"{props.searchValue}" was not found,<br/> Please go back to 
      <span onClick={()=>navigate("/home")} className="text-blue-600"> Homepage.</span>
  </h1>
);



  return (
    <div className="text-6xl text-white h-screen w-screen">
              <div className="flex flex-row justify-center md:gap-x-5 mt-10 -ml-[30%] pl-10 lg:mt-[5%] ">
                <button onClick={()=>navigate("/home")} className=" lg:w-[4vw] w-[3rem] lg:mt-1 z-10 ">
                <img src={props.Images.back} alt="SearchIcon" className="md:scale-150  bg-[#252525] rounded-full md:mt-3 p-2"></img>
                </button>
                <h1 className="lg:text-6xl text-3xl md:text-6xl ml-5 mt-2 text-white lg:ml-10 ">{props.searchValue} </h1>
              </div>
         {result}
          </div>
  ) 
}

export default Search