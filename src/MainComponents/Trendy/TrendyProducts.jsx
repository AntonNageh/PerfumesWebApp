
const TrendyProducts = ({title,name,src}) => {
  return (
    <div className="relative text-white h-[45vh] md:h-[75vw] lg:w-[30vw] lg:h-[40vw] mt-[30%] w-[60vw] flex flex-col rounded-[1rem] bg-[#252525]">
        <div>
            <img src={src} className="object-contain w-full lg:w-[30vw]  "></img>
        </div>
    <div className='flex mt-2 md:mt-3 lg:mt-3'>
      <div>
        <h1 className='ml-5 opacity-60'>{title}</h1>
        <h1 className='text-[1.2rem] mt-1 font-bold ml-5'>{name}</h1>
      </div>
    </div>
  </div>
  )
}

export default TrendyProducts