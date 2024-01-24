import { Category } from "./CAtegory"
import { Latest } from "./Latest"
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

    const latest=[
        {
            _id:1,
            heading:'Gift guids',
            time:'4 Hours',
            image:'https://i.ibb.co/Tgrsv10/012324-bodysuit-Lead-e4f2bac6eb0f42e58ffc5317b14572b8.webp',
            title:'I can go breasly in this valentine bla bla bla..',
            date: 'By ruby lc django',
        },
        {
            _id:2,
            heading:'Gift guids',
            time:'4 Hours',
            image:'https://i.ibb.co/Tgrsv10/012324-bodysuit-Lead-e4f2bac6eb0f42e58ffc5317b14572b8.webp',
            title:'I can go breasly in this valentine bla bla bla..',
            date: 'By ruby lc django',
        },
        {
            _id:3,
            heading:'Gift guids',
            time:'4 Hours',
            image:'https://i.ibb.co/Tgrsv10/012324-bodysuit-Lead-e4f2bac6eb0f42e58ffc5317b14572b8.webp',
            title:'I can go breasly in this valentine bla bla bla..',
            date: 'By ruby lc django',
        },
        {
            _id:4,
            heading:'Gift guids',
            time:'4 Hours',
            image:'https://i.ibb.co/Tgrsv10/012324-bodysuit-Lead-e4f2bac6eb0f42e58ffc5317b14572b8.webp',
            title:'I can go breasly in this valentine bla bla bla..',
            date: 'By ruby lc django',
        },
        {
            _id:5,
            heading:'Gift guids',
            time:'4 Hours',
            image:'https://i.ibb.co/Tgrsv10/012324-bodysuit-Lead-e4f2bac6eb0f42e58ffc5317b14572b8.webp',
            title:'I can go breasly in this valentine bla bla bla..',
            date: 'By ruby lc django',
        },
        {
            _id:6,
            heading:'Gift guids',
            time:'4 Hours',
            image:'https://i.ibb.co/Tgrsv10/012324-bodysuit-Lead-e4f2bac6eb0f42e58ffc5317b14572b8.webp',
            title:'I can go breasly in this valentine bla bla bla..',
            date: 'By ruby lc django',
        },
        {
            _id:7,
            heading:'Gift guids',
            time:'4 Hours',
            image:'https://i.ibb.co/Tgrsv10/012324-bodysuit-Lead-e4f2bac6eb0f42e58ffc5317b14572b8.webp',
            title:'I can go breasly in this valentine bla bla bla..',
            date: 'By ruby lc django',
        },
        {
            _id:8,
            heading:'Gift guids',
            time:'4 Hours',
            image:'https://i.ibb.co/Tgrsv10/012324-bodysuit-Lead-e4f2bac6eb0f42e58ffc5317b14572b8.webp',
            title:'I can go breasly in this valentine bla bla bla..',
            date: 'By ruby lc django',
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
               <div className='mt-4'>
                  <WorkWare/>
               </div>
             </div>
             <div className=''>

             <div className="border-t-2 mb-1 w-full border-black"></div>
             <div className=" border-b-2 w-full border-black"></div>

             <h1 className='text-4xl pt-4'>THE LATEST</h1>

             <div>
                {
                    latest.map(item=><Latest key={item._id} latest={item}/>)
                }
             </div>

             </div>
         </div>
        </div>
     )
}