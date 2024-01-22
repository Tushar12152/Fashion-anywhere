import { Category } from "./CAtegory"

export const FashionCategory=()=>{

    const categoriesData=[
        {   _id:1,
            category:'MAKEUP',
            image:'https://i.ibb.co/1vXzfjy/EXCLUSIVEcopy-5aefb55496a04619b3bcee05a247599e.webp',
            title:'Night Moves: Jenna Lyons on Getting Ready to Whitney Houston and Her Late-Night Skin Care Secrets',
            date:'By Lauren Valenty'
        },
        {
            _id:2,
            category:'MAKEUP',
            image:'https://i.ibb.co/1vXzfjy/EXCLUSIVEcopy-5aefb55496a04619b3bcee05a247599e.webp',
            title:'Night Moves: Jenna Lyons on Getting Ready to Whitney Houston and Her Late-Night Skin Care Secrets',
            date:'By Lauren Valenty'
        },
        {
            _id:3,
            category:'MAKEUP',
            image:'https://i.ibb.co/1vXzfjy/EXCLUSIVEcopy-5aefb55496a04619b3bcee05a247599e.webp',
            title:'Night Moves: Jenna Lyons on Getting Ready to Whitney Houston and Her Late-Night Skin Care Secrets',
            date:'By Lauren Valenty'
        },
        {
            _id:4,
            category:'MAKEUP',
            image:'https://i.ibb.co/1vXzfjy/EXCLUSIVEcopy-5aefb55496a04619b3bcee05a247599e.webp',
            title:'Night Moves: Jenna Lyons on Getting Ready to Whitney Houston and Her Late-Night Skin Care Secrets',
            date:'By Lauren Valenty'
        },
    ]


     return (
        <div>  
          <div className="grid grid-cols-3 gap-3">
             <div className='w-[30%]'> 
             {
                categoriesData.map(data=> <Category key={data._id} />)
             }
                
             </div>
             <div className='w-[40%]'>1</div>
             <div className='w-[30%]'>2</div>
         </div>
        </div>
     )
}