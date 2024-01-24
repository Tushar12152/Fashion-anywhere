export const Latest=({latest})=>{
    return (
        <div className="border-b-2 border-gray-600 mb-2">
            <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-red-500 ">{latest?.heading}</h2>
                  <p className='text-gray-600 text-lg'>{ latest?.time}</p>
            </div>

            <div className="flex gap-6">
                  <h2 className="text-xl  ">{latest?.title}</h2>
                  <img className="w-40 h-28" src={latest?.image} alt="" />
            </div>
              
              <p className='text-gray-600 text-lg py-2'>{latest?.date}</p>

        </div>
    )
}