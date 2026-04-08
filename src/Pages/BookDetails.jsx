import React from 'react';
import { useParams } from 'react-router';

const BookDetails = () => {
    const params = useParams();
    console.log(params);
    
    return (
        <div>
            <h2>Helloooo</h2>
        </div>
    );
};

export default BookDetails;