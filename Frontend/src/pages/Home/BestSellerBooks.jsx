import { useEffect, useState } from "react"
import BookCard from "../../components/BookCard"

const BestSellerBooks = () => {
   const [books, setBooks] = useState([])

   useEffect(() => {
      fetch("http://localhost:8000/api/books/get_All").then(res => res.json()).then(data => {setBooks(data.slice(0,8));})
   }, [])
  return (
    <div>
      <BookCard books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default BestSellerBooks