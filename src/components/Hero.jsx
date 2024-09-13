import { FaArrowRight } from "react-icons/fa";


export const Hero = () => {
  return (
  
    <section className="text-gray-900 dark:bg-gray-900 dark:text-white">
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover costom-img bottom-0 bg-black/70 z-[2]">
    
  
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl">Captur Photography</h1>
      <p className="mb-8 text-lg font-normallg:text-xl sm:px-16 lg:px-48">I capture moments in nature and keep them alive</p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        
         
        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center  rounded-lg border text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 dark:text-white">
          Book
        </a>  
        </div>
      </div>
    </div>
  </section>
  )
}


