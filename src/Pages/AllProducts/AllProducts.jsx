import { useNavigate } from "react-router"
import TrendyProducts from "../../MainComponents/Trendy/TrendyProducts"

const AllProducts = ({Images}) => {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto overflow-clip h-full lg:h-[100rem]">
      <div className="flex flex-row justify-center md:gap-x-5 mt-10 -ml-[30%] pl-10 lg:mt-[5%] ">
        <button onClick={()=>navigate("/home")} className=" lg:w-[4vw] w-[3rem] lg:mt-1 z-10 ">
        <img src={Images.back} alt="SearchIcon" className="md:scale-150  bg-[#252525] rounded-full md:mt-3 p-2"></img>
        </button>
        <h1 className="lg:text-6xl text-3xl md:text-6xl ml-5 mt-2 text-white lg:ml-10 ">All Perfumes</h1>
      </div>
      <div className="flex flex-wrap gap-x-[10%] justify-center lg:scale-90 md:-mt-[10%] -mt-[6%] lg:-mt-[15%]">
        <div className="h-[80vw] lg:h-[80vh]  overflow-clip">
        <TrendyProducts title="Vintage" name="Haunted House" src={Images.Perfume1}/>
        </div>
        <div className="h-[80vw] lg:h-[80vh]  overflow-clip">
        <TrendyProducts title="Thematic" name="Vampire Blood" src={Images.Perfume2}/>
        </div>
        <div className="h-screen lg:h-[105vh] lg:-mt-[5%] mb-10 overflow-clip">
        <TrendyProducts title="Exclusive" name="Night Ghost" src={Images.Perfume3}/>
        </div>
        <div className="h-screen -mt-[100%] lg:h-[105vh] lg:-mt-[5%] overflow-clip">
        <TrendyProducts title="Niche" name="Ghoul's Domain" src={Images.Perfume4}/>
        </div>
        <div className="h-screen -mt-[100%] lg:h-[95vw] lg:-mt-[10%]  overflow-clip">
        <TrendyProducts title="Occasions" name="Midnight Spectre" src={Images.Perfume10}/>
        </div>
        <div className="h-screen -mt-[100%] lg:h-[105vh] lg:-mt-[10%]  overflow-clip">
        <TrendyProducts title="Niche" name="Vampire Keep" src={Images.Perfume11}/>
        </div> 


      </div>
    </div>
  )
}

export default AllProducts