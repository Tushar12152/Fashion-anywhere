import Link from "next/link"

export const Category=({categories})=>{

   console.log(categories)


    return (
        <div className="flex gap-2 w-full ">
            <div className='mb-6 w-[50%]'>
            <h3 className='text-red-600 py-2'> {categories?.category} </h3>
                <img className="w-[200px]" src={categories?.image} alt="" />

            </div>
            <div className='w-[50%]'>
                <Link href={'/'} className="mb-2">{categories?.title}</Link>
                <br /> 
                <Link  href={'/'} className='text-gray-400 py-3'>{categories?.date}</Link>

            </div>
        </div>
    )
}