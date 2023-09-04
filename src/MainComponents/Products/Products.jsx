

const Products = ({name,price,src}) => {

  return (
    <div className="relative text-white h-[50vh]  w-[80vw] flex flex-col rounded-[1rem]">
      <img src={src} className="absolute object-contain w-full h-full -z-10"></img>
      <div className='mt-[55vw] md:mt-[50vw] lg:mt-[17vw] xl:mt-[20vw] flex'>
        <div className="lg:ml-[25%] lg:mt-[3vw]">
          <h1 className='ml-5 opacity-60'>Perfume</h1>
          <h1 className='text-[4.5vw]  lg:text-[4vh]  mt-1 font-bold ml-5'>{name}</h1>
        </div>
        <div className='ml-auto pr-10 mt-6 lg:mt-16 lg:pr-[30%]'>
          <h1 className='text-2xl'>{price}</h1>
        </div>
      </div>
    </div>
  )
}

export default Products