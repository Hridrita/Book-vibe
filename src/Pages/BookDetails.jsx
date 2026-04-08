import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../Context/BookContext";

const BookDetails = () => {
  const { id } = useParams();
  console.log(id);

  const books = useLoaderData();
  console.log(books);

  const expectedBook = books.find((book) => book.bookId == id);
  console.log(expectedBook); //param string return kore tai ekhne r triple equal dei nai

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  const {handleMarkAsRead, storedBooks, handleWishList} = useContext(BookContext);
  console.log(handleMarkAsRead, storedBooks);

  

  return (
    <div className="grid grid-cols-2 lg:card-side bg-base-100 shadow-sm container mx-auto p-8">
      <figure className=" w-full flex items-center justify-center bg-gray-100 rounded-xl">
        <img src={image} alt="Album" className="max-h-[500px] w-auto object-contain shadow-lg" />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="card-title text-2xl">{bookName}</h2>
        <h2 className="card-title">By: {author}</h2>
        <p className="py-2 border-y">{category}</p>
        <p>Review: {review}</p>
        {tags.map((tag, index) => (
          <div
            key={index}
            className="badge text-green-500 bg-green-100 font-bold"
          >
            {tag}
          </div>
        ))}
        <div className="justify-end border-t space-y-3">
          <div className="flex justify-between items-center gap-2">
            <span> Number of Pages: </span>
            <span>{totalPages}</span>
          </div>

          <div className="flex justify-between items-center gap-2">
            <span>Publisher: </span>
            <span>{publisher}</span>
          </div>

          <div className="flex justify-between items-center gap-2">
            <span>Year of Publishing: </span>
            <span>{yearOfPublishing}</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => handleWishList(expectedBook)} className="btn btn-primary">Wishlist</button>
            <button onClick={() => handleMarkAsRead(expectedBook)} className="btn btn-primary">Mark as Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
