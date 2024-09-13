import Image from 'next/image';
import React from 'react';

export const Work = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
    <h1 className='max-w-[1240px] mx-auto py-16 text-center'>Travel photos</h1>
    <div className='grid grid-row-none md:grid-cols-5 p-4 gap-x-4'></div>
    <div className='w-fuul h-full col-span-2 md:col-span-3 row-span-2'>
    <Image
    src=''
    alt='/'
      width='677'
    height='451'
    layout='responsive'
    objectFit='cover'
  
    />
 </div>

 <div className='w-full h-full'>
    <Image
src=''
alt='/'
width='215'
height='217'
layout='responsive'
objectFit='cover'
 />
</div> 

<div className='w-full h-full'>
    <Image
src=''
alt='/'
width='215'
height='217'
layout='responsive'
objectFit='cover'
 />
</div> 

<div className='w-full h-full'>
    <Image
src=''
alt='/'
width='215'
height='217'
layout='responsive'
objectFit='cover'
 />
</div> 

<div className='w-full h-full'>
    <Image
src=''
alt='/'
width='215'
height='217'
layout='responsive'
objectFit='cover'
 />
</div> 

    </div>
  )
}
