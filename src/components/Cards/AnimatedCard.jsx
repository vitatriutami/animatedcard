import React from 'react'


const CardsData = [
  {
    id: 1,
    img: Photo1,
    title: "Sunset",
    desc: "Each character will appear on by one"
  },
  {
    id: 2,
    img: Photo2,
    title: "Dog",
    desc: "Each character will appear on by one"
  },
  {
    id: 3,
    img: Photo3,
    title: "Sunrise",
    desc: "Each character will appear on by one"
  },
]

const AnimatedCard = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-white font-bold text-3xl mb-14 mt-5 sm:mt-0'>
      Responsive Animated Card
      </h1>

      {/* cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center">

      </div>
    </div>
  )
}

export default AnimatedCard
