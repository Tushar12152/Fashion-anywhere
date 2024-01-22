import { Category } from "./CAtegory"
import { WorkWare } from "./Workware"

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
          <div className="grid grid-cols-4 gap-3 py-10 w-full">
             <div className=''> 
             <div className="border-t-2 mb-1 w-full border-black"></div>
             <div className=" border-b-2 w-full border-black"></div>

             <h1 className='text-4xl pt-4'>MUST-READS</h1>
            <div className="w-full flex flex-col gap-4 ">
            {
                categoriesData.map(data=> <Category categories={data} key={data._id} />)
             }
            </div>
                
             </div>
             <div className='col-span-2'>
             <div className="border-t-2 mb-1 w-full border-black"></div>
             <div className=" border-b-2 w-full border-black"></div>
               <div>
                  <WorkWare/>
               </div>
             </div>
             <div className=''>2</div>
         </div>
        </div>
     )
}