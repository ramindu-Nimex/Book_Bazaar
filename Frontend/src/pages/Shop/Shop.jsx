import { useEffect, useState } from "react";
import { Card } from 'flowbite-react';
import NavBar from "../../components/NavBar";
import MyFooter from "../../components/MyFooter";

const Shop = () => {
  const [books, setBooks] = useState([])

   useEffect(() => {
      fetch("http://localhost:8000/api/books/get_All").then(res => res.json()).then(data => {setBooks(data.slice(0,8));})
   }, [])
  return (
    <>
    <NavBar/>
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black">All Books are Here</h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 my-12">
          {
            books.map(book => <Card
              
            >
              <img src={book.imageURL} alt="" className="h-96" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                  {book.bookTitle}
                </p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
              <button className="bg-blue-700 font-semibold text-white rounded py-2 hover:bg-black transition-all ease-in-out duration-300">Buy Now</button>
            </Card>)
          }
      </div>
    </div>
    <MyFooter/>
    </>
  )
}

export default Shop