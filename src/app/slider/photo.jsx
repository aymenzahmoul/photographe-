import Image from 'next/image';
import React from 'react';

const Slider = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-extrabold text-5xl p-6 text-gray-900 leading-tight'>Travel Photos</h1>
      <p className='text-xl mb-10 text-gray-700 leading-relaxed'>
        Explore the beauty of different places through these captivating images.
      </p>
      
      <div className='grid grid-rows-none md:grid-cols-3 lg:grid-cols-5 gap-6 p-6'>
        {['CH1.jpg', 'b1.jpg', 'b2.jpg', 's1.jpg', 'ch2.jpg'].map((image, index) => (
          <div key={index} className='flex justify-center items-center w-full h-full overflow-hidden rounded-lg shadow-xl transform hover:scale-110 transition-transform duration-300'>
            <Image
              src={`/assets/images/${image}`}
              alt={`Travel photo ${index + 1}`}
              layout='responsive'
              width={215}
              height={217}
              className='rounded-md'
            />
          </div>
        ))}
      </div>

      {/* Video section */}
      <div className='mt-20 flex justify-center'>
        <div className='w-full md:w-2/3 lg:w-2/5'>
          <h2 className='font-bold text-4xl p-4 text-gray-900'>Watch Our Travel Video</h2>
          <video 
            className='w-full rounded-lg shadow-lg border-2 border-gray-300'
            controls
            autoPlay
            
            poster="/assets/images/video-thumbnail.jpg"
          >
            <source src="/assets/images/travel-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className='text-gray-700 mt-6 leading-relaxed'>
            Experience the journey through our captivating video that showcases the best moments of our travels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
