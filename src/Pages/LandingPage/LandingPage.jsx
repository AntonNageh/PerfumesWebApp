import LandingBg from '/Images/LandingBg.svg'
const LandingPage = () => {
  return (
    <div className=' relative h-screen w-screen flex overflow-y-clip'>
        <img src={LandingBg} alt="PerfumeBg" className='w-full -z-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] md:scale-[110%] md:mt-[15%] lg:scale-90 lg:top-[50%]'></img>
      <div className='w-11/12 mt-auto mb-5 flex flex-col text-center justify-center text-white ml-[5vw]'>
        <h1 className=' text-[32px] font-bold md:text-[42px] lg:text-[42px]'>A Morte Perfumes</h1> 
        <p className='text-[15px] font-light opacity-50 text-center mb-10 md:text-[24px] md:mx-auto lg:mx-auto lg:text-[24px] lg:w-9/12'>
        This unique perfume combines notes of black pepper, absinthe and jasmine to create an intense and enigmatic fragrance.
        </p>
        <a href='/home' className='RedButton w-11/12 ml-[4vw] text-lg md:text-2xl md:mb-10 lg:text-2xl lg:w-10/12 lg:mx-auto'>Navigate</a>
      </div>
    </div>
  )
}

export default LandingPage