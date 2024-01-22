

export const Banner=()=>{
       return (
        <div className='w-[90%] mx-auto mt-10'>
            <div className="flex gap-10">
                  <div className="w-[50%]">
                    <h1 className="font-extrabold text-5xl py-2">READY TO <br/>
                     DISCOVER HOW <br/> TO LIVE A TRULY <br/> FULFILLING LIFE?</h1>
                    <p className="py-3">Subscribe To Our Newsletter And Embark On A Journey Of Personal Growth! Discover Resources And Inspiring Content For Self-Improvement. We Offer Tips And Resources To Help You Live A True And Fulfilling Life. Embrace Positive Change Today!</p>
                    <div className="flex gap-2 py-2">
                         <input placeholder="Enter your email" className="border-2 border-black  w-[300px] p-2" type="text" />
                         <button  className="text-white bg-red-600 py-2 px-4 hover:bg-yellow-500">Subscribe</button>
                    </div>
                  </div>
                  <div className='w-[50%]'>
                    <img  className='w-[500px]' src={'https://i.ibb.co/FXP2vgH/Hero-Image-1-e1688595990137.png'} alt="" />
                  </div>
            </div>
        </div>
       )
}