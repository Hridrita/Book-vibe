import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { addReadListToLocalDB, addWishListToLocalDB, getAllReadListFromLocalDB, getAllWishListFromLocalDB } from "../Utils/LocalDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState(()=> getAllReadListFromLocalDB());
  const [wishList, setWishList] = useState(()=> getAllWishListFromLocalDB());


  // useEffect(() =>{
  //   const getreadListFromLocalDB = getAllReadListFromLocalDB();
  //   console.log(getAllReadListFromLocalDB);
  //   setStoredBooks(getAllReadListFromLocalDB);
  // },[])

  const handleMarkAsRead = (currentBook) => {
    //store book id or store book object
    //where to store
    //array or collection
    //if the book is already exist then show a toast or alert
    // if not then add the book in the array or collection


    addReadListToLocalDB(currentBook);
    addWishListToLocalDB(currentBook);

    console.log(currentBook);

    const isExistBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The Book is Already Exist");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} is Added to List`);
    }
  };

  const handleWishList = (currentBook) => {
    console.log(currentBook);

    const isExistInReadList = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistInReadList) {
      toast.error("The Book is Already in Wishlist");
      return;
    }

    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The Book is Already Exist");
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is Added to Wishlist`);
    }
  };

  const data = {
    // test : "demo"
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
