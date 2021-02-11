import './App.css';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
function Shop() {

  let [items, setItems]=useState([]);
  useEffect(()=>{
      fetchItem()
  },[]);
  const fetchItem=async()=>{
      const data = await fetch('https://fortnite-api.com/v1/playlists');
      const items=await data.json()
      console.log('data', items.data);
      setItems(items.data);
  }
  return (
    <div>
        {
            items.map((item)=><h1 key={item.id}><Link to={`/shop/${item.id}`}>{item.name}</Link>
            </h1>)
        }
    </div>
  );
}

export default Shop;
