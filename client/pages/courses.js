import { Inter } from '@next/font/google'
import Navbar from '../src/Navbar'
import { ReactNebula, smallSolarSystem, bigSolarSystem } from "@flodlc/nebula";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useState } from 'react';



const inter = Inter({ subsets: ['latin'] })
const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8', 'Option 9', 'Option 10'];

const cards = [
  {
    image: 'https://picsum.photos/200/300',
    title: 'Card 1',
    author: 'Author 1',
    option: 'Option 1',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Card 2',
    author: 'Author 2',
    option: 'Option 2',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Card 3',
    author: 'Author 3',
    option: 'Option 3',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Card 4',
    author: 'Author 4',
    option: 'Option 4',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Card 5',
    author: 'Author 5',
    option: 'Option 5',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Card 6',
    author: 'Author 6',
    option: 'Option 6',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Card 7',
    author: 'Author 7',
    option: 'Option 7',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Card 8',
    author: 'Author 8',
    option: 'Option 8',
  },
];

export default function courses() {
    const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  return (
    
    <section>
        <nav className="flex items-center justify-between bg-gray-100 px-4 py-2 shadow">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-8 mr-4" />
        <a href="/categories" className="text-gray-700 font-medium">Categories</a>
      </div>
      <div className="flex items-center flex-grow">
        <input type="text" placeholder="Search" className="py-2 px-5 ml-2 rounded-full bg-gray-200 text-gray-700 flex-grow mr-4" />
        <button className="text-red-600 py-1 px-3 text-md rounded-md bg-red-200"><a href='/'>Logout</a></button>
      </div>
    </nav>
      <div className='h-[100vh] flex items-center'>
      <ReactNebula className="nebula" config={{astres: smallSolarSystem}}/>
      <div className='h-[10rem] stu flex items-center mx-auto'>
        <div className='h-[35rem] w-[70rem] rounded-3xl bg-white stu flex mx-auto p-6 flex-col items-center'>
            <h1 className='text-3xl font-semibold'>Explore Online Courses!</h1>
            <div className="flex justify-center py-4">
        {options.map((option, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-md ${selectedOption === option ? 'bg-blue-500 text-white' : 'bg-white text-gray-500 hover:bg-gray-200 cursor-pointer'}`}
            onClick={() => handleClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        {cards
          .filter((card) => card.option === selectedOption)
          .map((card, index) => (
            <Card key={index}>
              <CardMedia
                component="img"
                height="200"
                image={card.image}
                alt={card.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {card.author}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </div>



</div>


        </div>
      </div>
      

        
    
      
        
      
    </section>

  )
}