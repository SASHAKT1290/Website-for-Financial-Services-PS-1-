import React from 'react'
import money from '../assets/money.jpg'
const Experiment = () => {
    return (
        <div className='w-full flex items-center'>
            <div class="mt-5 relative w-full max-w-sm aspect-[3/4]">
                <div class="absolute bottom-4 right-4 w-full h-full border-[10px] border-purple-600 z-0"></div>
                <img src={money} alt="..." class="relative w-full h-full object-cover z-10 rounded-md shadow-md" />
            </div>

        </div>
    )
}

export default Experiment
