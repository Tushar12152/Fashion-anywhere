export const CelebrationCard=({card})=>{
    return(
        <div className='flex gap-2 items-center mb-2 pt-2 pr-10'>
          <img className="w-36 h-28" src={card?.image} alt="" />
          <div>
          <h2 className="text-xl font-bold text-red-500 ">{card?.heading}</h2>
          <h1 className="font-bold text-2xl   "> {card?.title}</h1>
                <p className="font-bold text-md text-gray-600   "> by C# &c++</p>
          </div>
        </div>
    )
}