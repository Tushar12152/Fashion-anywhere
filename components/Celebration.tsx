import { CelebrationCard } from "./CelebrationCard"

export const Celebration=()=>{
   
    const celebrate=[
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
        <div className='bg-gray-400 '>
            <h1 className="p-10 font-extra-bold text-4xl hover:underline cursor-pointer">The Celebration Issue</h1>
            <div className=" w-[90%] flex gap-6 items-center justify-around ">
            <div className="p-10">
                <img className="w-96" src="https://i.ibb.co/QvkKgjd/instyle-naomi-osaka-004-4350d83a18674fa6afc6e72b9f67e2ec.webp" alt="" />
                <h1 className="font-bold text-red-600 text-lg"> Celebraty</h1>
                <h1 className="font-bold text-2xl   "> Advantage Nimai</h1>
                <p className="font-bold text-md text-gray-600   "> by C# with .net</p>
            </div>
            <div>
                {
                    celebrate.map(card=><CelebrationCard key={card._id} card={card}/>)
                }
            </div>
            
        </div>
        </div>
     )
}