import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

function Flipkart() {
  const [shopdata, setShopdata] = useState([]);
  const [loading, SetLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = shopdata.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(
        "https://web-scraper-backend1.vercel.app/auth/products"
      );
      const jsondata = await res.json();
      console.log(jsondata);
      setShopdata(jsondata);
      SetLoading(false);
    };
    fetchdata();
  }, []);

  return (
    <>
      <h1 style={{ color: "#FFFF", padding: "10px" }}>E-Shoping Exclusive</h1>
      <div className="flipkart-container">
        {currentData.map((data, idx) => (
          <div className="shop-card-listing">
            <div className="shop-card" key={idx}>
              <img
                alt="img"
                style={{
                  height: "300px",
                  boxSizing: "border-box",
                  borderRadius: "10px",
                }}
                src={data.image}
              />
              <div className="shop-content">
                <p className="title">{data.title.slice(0, 50)}</p>
                <h2 className="rating">
                  {data.rating}
                  <small>⭐</small>
                </h2>
                <Fade>
                  <p className="selling-price">{data.finalPrice}</p>
                </Fade>

                <del className="actual-price">{data.price}</del>
                <Fade>
                  <div className="offer-container">
                    <a
                      href="https://web-scraper-backend1.vercel.app/auth/products"
                      className="productlink"
                    >
                      <p className="offer">
                        Check in{" "}
                        <span style={{ color: "black" }}>{data.source}</span>
                      </p>
                    </a>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Flipkart;
