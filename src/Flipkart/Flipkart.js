import React, { useEffect, useState } from 'react'

function Flipkart() {
const [shopdata, setShopdata] = useState([]);
const [loading, SetLoading] = useState(true);

const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;
const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = shopdata.slice(startIndex, endIndex);
 
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

useEffect(()=>{
    const fetchdata = async () =>{
             const res = await fetch('https://web-scraper-backend1.vercel.app/products');
             const jsondata = await res.json();
             console.log(jsondata);
             setShopdata(jsondata);
             SetLoading(false);
    };
    fetchdata();
},[]);

  return (
    <div>
    <h1 style={{color:"#FFFF", padding:"10px"}}>E-Shoping Exclusive</h1>
    <div className='flipkart-container'>
     {currentData.map((data,idx)=>(
        <div className='shop-card-listing'>
        <div className='shop-card' key={idx}>
        <img style={{height:"300px", boxSizing:"border-box", borderRadius:"10px"}} src={data.image}/>
       <div className='shop-content'>
       <h4 className='title'>{data.title.slice(0, 65)}</h4>
    <h2 className='rating'><small>Rating:</small>{data.rating}</h2>
    <div className='offer-container'>
        <p className='offer'>{data.source}</p>
        <div className='pricing'>
        <p className='actual-price'><small>Price:</small>{data.price}</p>
    <p className='selling-price'><small>Final Price:</small>{data.finalPrice}</p>
        </div>
    </div>
       </div>
        </div>
     </div>
    ))}
    </div>
    <div className='pagination'>
        {/* Previous button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page numbers */}
        {currentData.map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= currentData.length}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Flipkart
