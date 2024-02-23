import React from 'react'

const page = () => {
    return (
        <>
            {/* for 2 equal divide layouts */}
            {/* <main className='grid gap-4 m-4 sm:grid-cols-2'>
           <div className='bg-teal-500 rounded min-h-[100px] shadow-lg'></div>
            <div className='bg-orange-500 rounded min-h-[100px] shadow-lg'></div>
         </main> */}

            {/* to divide 3 columns equally */}
            {/* <main className='grid gap-4 m-4 sm:grid-cols-3'>
                <div className='bg-teal-500 rounded min-h-[100px] shadow-lg'></div>
                <div className='bg-orange-500 rounded min-h-[100px] shadow-lg'></div>
                <div className='bg-red-500 rounded min-h-[100px] shadow-lg'></div>
            </main> */}
            {/* for 2 non-equal layouts */}
            {/* <main className='grid gap-4 m-4 sm:grid-cols-12'>
                <div className='bg-teal-500 rounded min-h-[100px] shadow-lg sm:col-span-4'></div>
                <div className='bg-orange-500 rounded min-h-[100px] shadow-lg sm:col-span-8'></div>

            </main> */}
            {/* for 3 non-equal layouts */}
            <main className='grid gap-4 m-4 sm:grid-cols-12 sm:grid-rows-12'>
                <div className='bg-orange-500 rounded min-h-[100px] shadow-lg sm:col-span-2 hidden sm:block sm:row-span-3'></div>
                <div className='bg-teal-500 rounded min-h-[100px] shadow-lg sm:col-span-8 sm:row-span-6'></div>
                <div className='bg-red-500 rounded min-h-[100px] shadow-lg sm:col-span-2 hidden sm:block  sm:row-span-3'></div>


            </main>
        </>
    )
}

export default page