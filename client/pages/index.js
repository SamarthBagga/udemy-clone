import { Inter } from '@next/font/google'
import Navbar from '../src/Navbar'
import { ReactNebula, smallSolarSystem, bigSolarSystem } from "@flodlc/nebula";
import EarthCanvas from '../src/Earth';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section>
      <Navbar/>
      <ReactNebula className="nebula" config={{astres: smallSolarSystem}}/>
        
      
      <div className='h-[90vh] flex items-center stu'>
        <div className='box w-[70vw] rounded-md h-[75vh] mx-auto my-auto flex stu'>
          <div className='w-1/2'>
            <div className='my-20 mx-7'>
            <p className='text-5xl font-semibold'>Learn for the sake <br/> of the future!</p>
            <p className='mt-7'>Learn new skills from the comfort of your <br/> or anywhere anytime.</p>
            <button className=' mt-7 started text-white py-3 px-5 text-md rounded-2xl bg-red-500' >Get Started</button>
            </div>
          

          </div>
          <div className='student w-1/2'>


          </div>
          
        </div>
      </div>
  
      <div className='h-[90vh] flex items-center'>
      <ReactNebula className="nebula" config={{astres: smallSolarSystem}}/>
      <div className='w-1/2 h-[30rem]'><EarthCanvas/></div>
      <div className='w-1/2 h-[10rem] stu flex items-center'>
        <div className='h-[30rem] w-[29rem] rounded-3xl bg-white stu flex mx-auto p-6 flex-col'>
<h1 className='text-2xl font-semibold'>Book your free sessions today!</h1>
<div className='mt-5 flex flex-col'>
<input type="text" placeholder="Name" className="py-2 my-3 px-5 ml-2 rounded-md bg-gray-200 text-gray-700 flex-grow mr-4" />
<input type="text" placeholder="Mobile Number" className="py-2 my-3 px-5 ml-2 rounded-md bg-gray-200 text-gray-700 flex-grow mr-4" />
<input type="text" placeholder="Class" className="py-2 my-3 px-5 ml-2 rounded-md bg-gray-200 text-gray-700 flex-grow mr-4" />
<button className=' mt-7 started text-white py-3 px-5 text-md rounded-2xl bg-red-500' >Submit Request</button>

</div>


        </div>
      </div>
      

        
      </div>
      
        
      
    </section>

  )
}
