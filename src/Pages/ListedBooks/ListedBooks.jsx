import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';

const ListedBooks = () => {
    const { storedBooks } = useContext(BookContext);
    console.log(storedBooks);

    return (
        <div>
            <h2>Books</h2>
        </div>
    );
};

export default ListedBooks;