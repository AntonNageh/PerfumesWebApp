import Flickity from "react-flickity-component";
import Products from '../../MainComponents/Products/Products'
import search from '../../assets/Images/Search.svg'
import Perfume1 from '../../assets/Images/Perfume1.svg'
import Perfume2 from '../../assets/Images/Perfume2.svg'
import Perfume3 from '../../assets/Images/Perfume3.svg'
import Perfume4 from '../../assets/Images/Perfume4.svg'
import Perfume5 from '../../assets/Images/Perfume5.svg'

import './HomePage.css'
import TrendyProducts from "../../MainComponents/Trendy/TrendyProducts";
const HomePage = () => {

  const flickityOptions = {
    initialIndex: 0,
    contain: true,

    Parallax: true,
    wrapAround: true

  };

  
  return (
    <div className="h-screen w-screen flex flex-col justify-items-center overflow-x-hidden text-white ">
        <div className='w-11/12 self-center'>
          <div className='mb-10'>
            <div className="bg-[#252525] h-[55px] flex mt-5 rounded-[1rem] lg:mb-5">
              <img src={search} alt="SearchIcon" className='ml-5' width="25px" height="25px"></img>
              <input className='bg-transparent ml-5 outline-none w-10/12' placeholder="Search perfumes"></input>
            </div>
            <div className='mt-5 w-full  flex gap-x-2 font-light md:inline-block md:-ml-[20%] md:w-screen  lg:text-2xl lg:pb-10 lg:inline-block lg:-ml-[30%] lg:w-screen'>
            <Flickity
            className={"carousel"}
            elementType={"div"}
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false}
          >
            <div>
              <button 
                // onClick={{/* HandleClick function for filtering through the perfumes*/}} 
                className='bg-[#252525] opacity-75 rounded-[1rem] py-2 px-4'>
                Thematic
              </button>
            </div>
            <div>
              <button className='bg-[#252525] opacity-75 rounded-[1rem] py-2 px-4 md:mx-2 lg:mx-5'>Exclusive</button>
            </div>
            <div>
              <button className='bg-[#252525] opacity-75 rounded-[1rem] py-2 px-4'>Vintage</button>
            </div>
            <div>
              <button className='bg-[#252525] opacity-75 rounded-[1rem] py-2 px-4 md:mx-2 lg:mx-5'>Niche</button>
            </div>
            <div>
              <button className='bg-[#252525] opacity-75 rounded-[1rem] py-2 px-4 md:mr-2 lg:mr-5'>Occasions</button>
            </div>
            </Flickity>
            </div>
          </div>
          <div className='mb-10'>
            <div className='flex md:mb-10 lg:mb-24'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Popular Perfumes</h1>
              <a href='/Products' className='text-lg md:text-2xl lg:text-3xl ml-auto pr-4 mt-1 opacity-50'>See all</a>
            </div>
            <div className='-mt-10 ml-2'>
            <Flickity
            className={"carousel"}
            elementType={"div"}
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false}
          >
            <div className="mr-5 ml-5">
              <Products name="The Dancing Death" src={Perfume1} price="450,00"/>
            </div>
            <div>
              <Products name="Vampire blood" src={Perfume2} price="85$"/>
            </div>
            </Flickity>
            </div>
          </div>
          <div>
            <div className='flex -mt-16 md:mt-10 lg:mt-16'>
              <h1 className='text-2xl font-bold lg:text-4xl lg:mb-[10%]'>Trendy</h1>
              <a href='/Products' className='text-lg ml-auto pr-4 mt-1 opacity-50 lg:text-3xl'>See all</a>
            </div>
            <div className='-mt-10 lg:-mt-[15%] -ml-16 mb-10 lg:h-screen'>
            <Flickity
            className={"carousel"}
            elementType={"div"}
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false}
          >
            <div className="mr-5 ml-10 h-[50vh] md:h-[70vh] lg:h-screen lg:mb-10">
             <TrendyProducts title="Vintage" name="Haunted House" src={Perfume3}/>
            </div>
            <div className="mr-5 ml-10">
            <TrendyProducts title="Thematic" name="Vampire Blood" src={Perfume4}/>
            </div>
            <div className="ml-10">
            <TrendyProducts title="Thematic" name="Vampire Blood" src={Perfume5}/>
            </div>
            </Flickity>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomePage 