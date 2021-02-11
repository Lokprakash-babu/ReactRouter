import './App.css';
import React, {useState, useEffect} from 'react';
import {Link, useParams, useRouteMatch} from 'react-router-dom';
function Item({match}) {

  let [item, setItem]=useState({
      images:{}
  });
  useEffect(()=>{
      fetchItem()
  },[]);
  const fetchItem=async()=>{
    const data=await fetch(`https://fortnite-api.com/v1/playlists/${match.params.id}`);
    const item=await data.json();
    setItem(item.data);
    console.log('item', item.data);
  }
  return (
    <div>
        <h1>{item.name}</h1>
        <img src={item.images.missionIcon} alt="img"></img>
    </div>
  );
}

export default Item;
