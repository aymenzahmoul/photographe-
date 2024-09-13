import {AutoSlider}  from './AutoSlider';

const title = (
    <>
   Chaque photo est un poème sans mots, 
    <br/>
    une œuvre d'art unique capturée <br/> en une fraction de seconde
    </>
);
const description ="À travers l'objectif, on voit le monde sous un angle différent, où chaque détail raconte une histoire" 

const bestselling = [
  {src: '/assets/images/3.jpg', title: 'nuclear war' , author: 'rebecca yarros'},
  {src: '/assets/images/99.jpg', title: 'nuclear war' , author: 'rebecca yarros'},
  {src: '/assets/images/99.jpg', title: 'nuclear war' , author: 'rebecca yarros'},
  {src: '/assets/images/99.jpg', title: 'nuclear war' , author: 'rebecca yarros'},
  {src: '/assets/images/99.jpg', title: 'nuclear war' , author: 'rebecca yarros'},
  {src: '/assets/images/99.jpg', title: 'nuclear war' , author: 'rebecca yarros'},
  
];



export const Filter = () => {
  return (
    <section className='bg-center bg-no-repeat text-gray-900 dark:bg-gray-900 dark:text-white '>
    <div className="px-4 mx-auto  text-center py-24 lg:pt-32">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl">{title}</h1>
      <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">{description}</p>
      

      <div className="flex justify-center">
     
      <ul className="flex flex-col sm:flex-row rounded-xl sm:rounded-full justify-center align-middle gap-3 text-sm bg-gray-200 p-2 l"> 
       <li className="px-4 py-2 rounded full cursor pointer select-none bg-gray-900 text-white">Videos</li>
       <li className="px-4 py-2 rounded full cursor pointer select-none hover:bg-gray-900 hover:text-white">Images</li>
      </ul>
    </div>


 
<AutoSlider image = {bestselling}/>

      </div>
      </section>
      )

}
