import LandingBg from '../../assets/Images/LandingBg.svg'
const LandingPage = () => {
  return (
    <div className='container h-screen w-screen flex'>
        <img src={LandingBg} alt="PerfumeBg" className='w-full -z-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] object-contain'></img>
      <div className='w-11/12 mt-auto mb-5 flex flex-col text-center justify-center text-white ml-[5vw]'>
        <h1 className=' text-[32px] font-bold'>A Morte Perfumes</h1> 
        <p className='text-[15px] font-light opacity-50 text-center mb-10'>
        This unique perfume combines notes of black pepper, absinthe and jasmine to create an intense and enigmatic fragrance.
        </p>
        <a href='/home' className='RedButton w-11/12 ml-[4vw] text-lg'>Navigate</a>
      </div>
    </div>
  )
}

export default LandingPage