import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';


const Products = ({name,price,src}) => {
  const navigate = useNavigate()
  const uniqueId = uuidv4();
  return (
    <div className="relative text-white h-[50vh] w-[80vw] flex flex-col rounded-[1rem]" id={uniqueId}>
      <button onClick={()=>navigate(`/product/${uniqueId}`)}>
        <img src={src} className="absolute object-contain  w-full h-full -z-10"></img>
        <div className='mt-[55vw] md:mt-[60%] lg:mt-[17vw] xl:mt-[20vw] flex text-left'>
          <div className="lg:ml-[25%] lg:mt-[3vw]">
            <h1 className='ml-5 opacity-60'>Perfume</h1>
            <h1 className='text-[4.5vw]  lg:text-[4vh]  mt-1 font-bold ml-5'>{name}</h1>
          </div>
          <div className='ml-auto pr-10 mt-6 lg:mt-16 lg:pr-[30%]'>
            <h1 className='text-2xl md:mt-[30%]'>{price}</h1>
          </div>
        </div>
      </button>
    </div>
  )
}

export default Products