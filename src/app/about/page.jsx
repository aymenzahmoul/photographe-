const About = () => {
    return (
      <div className='flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
        <div className='bg-white bg-opacity-90 p-8 rounded-lg shadow-xl max-w-[600px] w-full'>
          <h1 className='text-4xl font-extrabold text-center mb-6 text-gray-800'>
            Let's Work Together
          </h1>
          <form className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <input
                className='border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow'
                type="text"
                placeholder='Name'
              />
              <input
                className='border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow'
                type="email"
                placeholder='Email'
              />
            </div>
            <input
              className='border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow'
              type='text'
              placeholder='Subject'
            />
            <textarea
              className='border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow'
              cols="30"
              rows="10"
              placeholder='Message'
            ></textarea>
            <button
              className='bg-indigo-600 text-white font-bold p-3 w-full rounded-lg hover:bg-indigo-700 transition-colors shadow-lg'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
  
  export default About;
  