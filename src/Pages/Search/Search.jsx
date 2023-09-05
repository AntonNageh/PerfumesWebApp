import { useNavigate } from "react-router";
import levenshtein from 'fast-levenshtein';
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

const result = bestMatch.distance <= threshold ? (
  <h1>{bestMatch.label}</h1>
) : (
  <h1 className="mt-52 ml-10">"{props.searchValue}" was not found,<br/> Please go back to 
      <span onClick={()=>navigate("/home")} className="text-blue-600"> Homepage.</span>
  </h1>
);



  return (
    <div className="text-6xl text-white">
        <h1>Blabla</h1>
        {/* {
        props.searchValue ? (
          <div>
            {(() => {
              switch (props.searchValue.toLowerCase()) {
                case "thematic":
                  return <h1>Thematic</h1>;
                case "exclusive": 
                  return <h1>Exclusive</h1>;
                case "vintage":
                  return <h1>Vintage</h1>;
                case "niche":
                  return <h1>Niche</h1>;
                case "occasions":
                  return <h1>Occasions</h1>;
                default:
                  return <h1 className="mt-52 ml-10">"{props.searchValue}" was not found,<br/> Please go back to 
                      <span onClick={()=>navigate("/home")} className="text-blue-600"> Homepage.</span>
                  </h1>;
              }
            })()}
          </div>
        ) : <div className="flex mt-[15vh] justify-around text-3xl w-screen">
          <h1 className="w-10/12"> An error occured while loading your desired item, please go back to 
          <span onClick={()=>navigate("/home")} className="text-blue-600"> Homepage</span> again.</h1>
          </div>          
        } */}
          {result}
          </div>
  )
}

export default Search