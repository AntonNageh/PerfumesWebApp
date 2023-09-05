import Flickity from "react-flickity-component";
import Products from '../../MainComponents/Products/Products'
import search from '/Images/Search.svg'

import './HomePage.css'
import TrendyProducts from "../../MainComponents/Trendy/TrendyProducts";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const HomePage = ({ Images, searchValue, setSearchValue }) => {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const  handleChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
  }

    useEffect(() => {
    // Add the event listener when the component mounts
    const node = inputRef.current;

    const handleKeyUp = ({ key} ) => {

      if (key === 'Enter') {
        setSearchValue(node.value);
        navigate("/search");
      }
    };
    if (node) {
      node.addEventListener('keyup', handleKeyUp);
      // Remove the event listener when the component unmounts
      return () => {
        node.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, [searchValue]);
  
  const handleClick = (e) =>{
    const newValue = e.target.innerText
    setSearchValue(newValue);
    navigate("/search");
  }

  const flickityOptions = {
    initialIndex: 1,
    contain: true,
   
  };

  
  return (
    <div className="h-screen w-screen flex flex-col justify-items-center overflow-x-hidden text-white ">
        <div className='w-11/12 self-center'>
          <div className='mb-10'>
            <div className="bg-[#252525] h-[55px] flex mt-5 rounded-[1rem] lg:mb-5">
              <img src={search} alt="SearchIcon" className='ml-5' width="25px" height="25px"></img>
              <input ref={inputRef} value={searchValue} onChange={handleChange} className='bg-transparent ml-5 outline-none w-10/12 Search' placeholder="Search perfumes"></input>
            </div>
            <div className='mt-5 w-full font-light md:pb-10 md:pt-5 md:ml-[15%] md:w-screen lg:inline-block lg:text-2xl lg:pb-10 lg:w-screen'>
              <div className="flex flex-wrap justify-center gap-3 pb-5 md:pb-0 md:-ml-[20%] lg:pb-0 lg:gap-0 lg:-ml-[20%]">
              <button
                onClick={(e)=>handleClick(e)}  
                className="bg-[#252525] opacity-75 rounded-[1rem] py-2 px-4"
              >
                Thematic
              </button>
                <button 
                onClick={(e)=>handleClick(e)} 
                className='bg-[#252525] opacity-75 rounded-[1rem] py-2 px-4 mx-2 md:mx-2 lg:mx-5'
                >
                  Exclusive
                </button>
                <button 
                onClick={(e)=>handleClick(e)} 
                className='bg-[#252525] opacity-75 rounded-[1rem] py-2 px-4'
                >
                  Vintage
                </button>
                <button 
                onClick={(e)=>handleClick(e)} 
                className='bg-[#252525] opacity-75 rounded-[1rem] py-2 px-4  mx-2 md:mx-2 lg:mx-5'
                >
                  Niche
                </button>
                <button 
                onClick={(e)=>handleClick(e)} 
                className='bg-[#252525] opacity-75 rounded-[1rem] py-2 px-4 mr-2 md:mr-2 lg:mr-5'
                >
                  Occasions
                </button>
              </div>
          </div>
          <div className='mb-10'>
            <div className='flex md:mb-10 lg:mb-24'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Popular Perfumes</h1>
              <a 
              onClick={
               ()=>navigate("/products")
                } 
              className='cursor-pointer text-lg md:text-2xl lg:text-3xl ml-auto pr-4 mt-1 opacity-50'>
                See all
                </a>
            </div>
            <div className='-mt-10 ml-2'>
            <Flickity
            className={"carousel"}
            elementType={"div"}
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false}
          >
            <div className="mr-5 ml-5">
              <Products name="The Dancing Death" src={Images.Perfume1} price="450,00"/>
            </div>
            <div>
              <Products name="Vampire blood" src={Images.Perfume2} price="85$"/>
            </div>
            </Flickity>
            </div>
          </div>
          <div>
            <div className='flex -mt-16 md:mt-10 lg:mt-16'>
              <h1 className='text-2xl font-bold lg:text-4xl lg:mb-[10%]'>Trendy</h1>
              <a onClick={()=>navigate("/products")} className='cursor-pointer text-lg ml-auto pr-4 mt-1 opacity-50 lg:text-3xl z-50'>See all</a>
            </div>
            <div className='-mt-10 lg:-mt-[15%] w-full md:ml-0 mb-10 lg:h-screen'>
            <Flickity
            className={"carousel"}
            elementType={"div"}
            options={flickityOptions} 
            disableImagesLoaded={false}
          >

            <div className="mr-5 h-[50vh] md:h-[70vh] lg:h-screen lg:mb-10">
             <TrendyProducts title="Vintage" name="Haunted House" src={Images.Perfume3}/>
            </div>
            <div className="mr-5 ml-10">
            <TrendyProducts title="Thematic" name="Vampire Blood" src={Images.Perfume4}/>
            </div>
            <div className="ml-10">
            <TrendyProducts title="Thematic" name="Vampire Blood" src={Images.Perfume5}/>
            </div>
            </Flickity>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage 