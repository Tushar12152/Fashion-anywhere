import Link from "next/link"



export const Navigation = (props:any) => {

    return (
        <div className="py-5">
               <div className='flex justify-around items-center'>
                   <img className="w-10" src={'https://i.ibb.co/wQHh51r/fashionanywhere-logo.webp'} alt="logo"/>

                   <div className="flex gap-10">
                       <Link className="hover:text-red-600 " href='/'>START HERE</Link>
                       <Link className="hover:text-red-600 " href='/'>BLOG</Link>
                       <Link className="hover:text-red-600 " href='/'>ABOUT US</Link>
                       <Link className="hover:text-red-600 " href='/'>CONTACT US</Link>
                   </div>

                   <button className="bg-red-600 py-3 px-8 text-white hover:bg-yellow-500">GET STARTED</button>
               </div>
        </div>
    )
}