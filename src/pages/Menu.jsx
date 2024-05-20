import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [brand, setBrand] = useState('');

  const handleBrand = e => {
    setBrand(e.target.value);
  };

  return (
    <>
      <h1>Menu Page</h1>
      <div>
        <input type="text" value={brand} onChange={(e) => handleBrand(e)}></input>
        <Link to={`/product/${brand}`}>
          <button onClick={handleBrand}>브랜드 페이지로 이동</button>
        </Link>
      </div>
    </>
  );
}

export default Menu;