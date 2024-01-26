export const Trending=()=>{
    const celibraties=[
        {
            _id:1,
         
        
            image:'https://i.ibb.co/QvkKgjd/instyle-naomi-osaka-004-4350d83a18674fa6afc6e72b9f67e2ec.webp',
            title:'advantage Nimai',
           
        },
        {
            _id:2,
         
        
            image:'https://i.ibb.co/pwdCQdm/dua-lipa-ded65d16fc034a44b76ca7ab9c8f8f5f.webp',
            title:'advantage Nimai',
          
        },
        {
            _id:3,
          
        
            image:'https://i.ibb.co/QvkKgjd/instyle-naomi-osaka-004-4350d83a18674fa6afc6e72b9f67e2ec.webp',
            title:'advantage Nimai',
            
        },
        {
            _id:4,
          
        
            image:'https://i.ibb.co/pwdCQdm/dua-lipa-ded65d16fc034a44b76ca7ab9c8f8f5f.webp',
            title:'advantage Nimai',
          
        },
       
       
    ]
    return (
    <div>
          <h1 className="font-bold text-3xl text-center my-10">Trending Celebreties</h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                celibraties.map(item=><div key={item._id}>
                    <div className='shadow-xl relative '>
                       <img src={item?.image} alt="" />
                       <h1 className='text-3xl font-bold absolute hover:underline bottom-3 text-white pl-4'>{item?.title}</h1>
                    </div>
                </div>) 
            }
          </div>

    </div>
    )
}