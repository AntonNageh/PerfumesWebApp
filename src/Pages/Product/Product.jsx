import { useNavigate } from "react-router"

const Product = (props) => {
  const RandomNames = [
    "Fábio",
    "João",
    "Marcelo",
    "Pedro",
  ];
  const priceKeys = Object.keys(props.prices);
  const randomIndex0 = Math.floor(Math.random() * priceKeys.length);
  const randomPrice = props.prices[priceKeys[randomIndex0]];

  function getRandomImageKey(excludedKeys) {
    const availableKeys = Object.keys(props.Images).filter((key) => !excludedKeys.includes(key));
    return availableKeys[Math.floor(Math.random() * availableKeys.length)];
  }
  
  const excludedKeys = ["Perfume5", "Perfume7", "Perfume8", "search", "back", "Heart", "Arrowleft"];

  const randomImageKey = getRandomImageKey(excludedKeys);
  const randomIndex = Math.floor(Math.random() * RandomNames.length);
  const RandomOutput = RandomNames[randomIndex];
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mx-auto justify-center -z-10 overflow-x-hidden">
      <div className="h-[45vh] w-screen z-1 flex justify-center">
        <div className="flex justify-between w-full relative h-10 z-50 mt-5">
          <button onClick={()=>navigate("/home")} className="ml-5 h-[2.5rem]">
            <img src={props.Images.Arrowleft} className="pt-2 h-[2.5rem] bg-[#9da4ac] p-0 rounded-[1rem]"></img>
          </button>
          <button onClick={()=>navigate("/home")} className="ml-5 h-[2.5rem]">
            <img src={props.Images.Heart} className="h-[2.5rem] mr-7 backdrop-blur-3xl backdrop-brightness-150 p-2 rounded-[1rem]"></img>
          </button>
        </div>
        <img src={props.Images[randomImageKey]} alt="ProductImg" className="absolute h-full -translate-y-[30%] w-full"></img>
      </div>
      <div className="bg-black rounded-[1.7rem] -mt-[20%] z-10 text-white flex flex-col justify-center">
        <div className="ml-5 mt-10">
          <div className="h-[15vh] w-screen flex ">
            <img src={props.Images.Perfume8} className="w-[80px] h-[80px] rounded-[1rem]"></img>
            <div className="ml-5 -mt-1">
            <h1 className="text-base opacity-50">Perfume</h1>
            <h1 className="text-3xl">Name</h1>
            <h1>Inspired by the dark atmosphere</h1>
            </div>
          </div>
            <div className="bg-[#2c2c2c] w-11/12 h-20 rounded-[1rem] flex justify-between p-4">
              <div className="text-center">
               <h1 className="text-base">Volume : </h1> 
               <h1 className="text-2xl font-bold">100ml</h1>
              </div>
              <div className="text-center">
               <h1 className="text-base">Price : </h1> 
               <h1 className="text-2xl font-bold">{randomPrice}</h1>
              </div>
              <div className="text-center">
               <h1 className="text-base">Perfumer : </h1> 
               <h1 className="text-2xl font-bold">{RandomOutput}</h1>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-2xl font-bold">Description : </h1>
              <h1 className="text-base font-light opacity-70">Inspired by the dancing figure of Death that is commonly associated with Halloween, this unique perfume combines notes of black pepper, wormwood and jasmine to create an intense and enigmatic fragrance.</h1>
            </div>
            <button className='RedButton mb-10 w-11/12 ml-[4vw] mt-5 text-lg md:text-2xl md:mb-10 lg:text-2xl lg:w-10/12 lg:mx-auto'>Download</button>
        </div>
      </div>
    </div>
  )
}

export default Product