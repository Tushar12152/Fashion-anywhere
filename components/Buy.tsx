

export const Buy=()=>{
  const BuyProduct=[
    {
        _id:1,
        heading:'Fashion',
    
        image:'https://i.ibb.co/QvkKgjd/instyle-naomi-osaka-004-4350d83a18674fa6afc6e72b9f67e2ec.webp',
        title:'advantage Nimai',
        date: 'By Python with django',
    },
    {
        _id:2,
        heading:'Fashion',
    
        image:'https://i.ibb.co/QvkKgjd/instyle-naomi-osaka-004-4350d83a18674fa6afc6e72b9f67e2ec.webp',
        title:'advantage Nimai',
        date: 'By Python with django',
    },
    {
        _id:3,
        heading:'Fashion',
    
        image:'https://i.ibb.co/QvkKgjd/instyle-naomi-osaka-004-4350d83a18674fa6afc6e72b9f67e2ec.webp',
        title:'advantage Nimai',
        date: 'By Python with django',
    },
    {
        _id:4,
        heading:'Fashion',
    
        image:'https://i.ibb.co/QvkKgjd/instyle-naomi-osaka-004-4350d83a18674fa6afc6e72b9f67e2ec.webp',
        title:'advantage Nimai',
        date: 'By Python with django',
    },
   
   
]
      return(
        <div>
            <h1 className='font-bold text-2xl text-center py-10 hover:underline'>What to buy <span  className='font-bold text-2xl '>→</span></h1> 

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4'>
                {
                  BuyProduct.map(item=> <div key={item._id}>
                    <div className="shadow-xl">
                         <img className='w-96 h-60 p-2'  src={item.image} alt='img'/>
                           <h2 className="text-xl p-2 font-bold text-red-500 ">{item?.  heading}</h2>
                             <h1 className="font-bold text-2xl p-2 hover:underline cursor-pointer "> {item?.title}</h1>
                         <p className="font-bold text-md text-gray-600 p-2  ">{item?.date}</p>
                    </div>

                    <div className=" border-b-2 w-full border-black mt-10"></div>

                  
                  </div>)
                }
            </div>
            <h1 className='text-center font-bold py-4 mb-12 text-3xl cursor-pointer hover:underline'>See More Shopping</h1>
            
        </div>
      )
}