import Image from 'next/image'

const bestselling = [
    {src: '/assets/images/3.jpg', title: 'nuclear war' , author: 'rebecca yarros'},
    {src: '/assets/images/7777.jpg', title: 'nuclear war' , author: 'rebecca yarros'},
    {src: '/assets/images/777.jpg', title: 'nuclear war' , author: 'rebecca yarros'},
    {src: '/assets/images/222.jpg', title: 'nuclear war' , author: 'rebecca yarros'},
    {src: '/assets/images/666.jpg', title: 'nuclear war' , author: 'rebecca yarros'},
    {src: '/assets/images/9999.jpg', title: 'nuclear war' , author: 'rebecca yarros'},
    
  ];
  

export const AutoSlider = () => {
  return (
   <>

<div className='slider h-72 mt-10 overflow-hidden flex'>
   <div className='flex gap-5 cursor-pointer animate-pulse'>

{
 bestselling.map(({ src, title, author}) =>(
    <div className='flex flex-col items-start flex-shrink-0'>
    <Image src={src} alt={'Nuclear War'} width={195} height={195}className='w-52 h-52 object-cover rounded-md' />
    <span className='pt-2'>{'title'}</span>
    <span className='text-gray-400'>{'author'}</span>       
    </div>     
 )
)

}

    
</div>
</div>   
    </>
  )
}
