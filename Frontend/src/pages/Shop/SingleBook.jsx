import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const SingleBook = () => {
   const {id} = useParams()
   const [book, setBooks] = useState("")

   useEffect(() => {
      const fetchBook = async () => {
         try {
            const res = await fetch(`http://localhost:8000/api/books/get_Book/${id}`)
            if (!res.ok) {
               throw new Error(`Error fetching data for book with ID ${id}`);
            }
            const data = await res.json()
            setBooks(data)
            
         } catch (error) {
            console.log(error);
         }
      }
      fetchBook()
   }, [id])
    
  return (
   <div className='mt-28 px-4 lg:px-24'>
      <img src={book.imageURL} alt="" className='h-96' />
      {book.bookTitle}
   </div>
  )
}

export default SingleBook