import TrendyProducts from "../../MainComponents/Trendy/TrendyProducts"

const AllProducts = ({Images}) => {
  return (
    <div className="h-screen">
      <div>
        <img></img>
        <h1>All Perfumes</h1>
      </div>
      <div className="flex  flex-wrap gap-x-[10%] justify-center ">
        <div className="h-[75vw] lg:h-[65vh]  overflow-clip">
        <TrendyProducts title="Vintage" name="Haunted House" src={Images.Perfume1}/>
        </div>
        <div className="h-[75vw] lg:h-[65vh]  overflow-clip">
        <TrendyProducts title="Thematic" name="Vampire Blood" src={Images.Perfume2}/>
        </div>
        <div className="h-[95vw] lg:h-[95vh]  overflow-clip">
        <TrendyProducts title="Exclusive" name="Night Ghost" src={Images.Perfume3}/>
        </div>
        <div className="h-[95vw] lg:h-[95vh]   overflow-clip">
        <TrendyProducts title="Niche" name="Ghoul's Domain" src={Images.Perfume4}/>
        </div>
        <div className="h-[95vw] lg:h-[95vw]  lg:-mt-[10vw]  overflow-clip">
        <TrendyProducts title="Niche" name="Midnight Spectre" src={Images.Perfume5}/>
        </div>
        <div className="h-[75vw] lg:h-[95vh] lg:-mt-[10vw]  overflow-clip">
        <TrendyProducts title="Niche" name="Vampire Keep" src={Images.Perfume7}/>
        </div>
        <div className=" mb-16 h-[55vh] lg:h-[60vh] lg:-mt-[45vw]  rounded-[1rem] overflow-clip">
        <TrendyProducts title="Niche" name="Twilight Chateau" src={Images.Perfume2}/>
        </div>

      </div>
    </div>
  )
}

export default AllProducts