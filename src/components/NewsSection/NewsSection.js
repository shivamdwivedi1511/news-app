import React from 'react';
import './NewsSection.css';

const NewsSection =(props)=>{

    let d=new Date(props.item.publishedAt);
    let date=`${d.getDate()}/${d.getMonth() +1}/${d.getFullYear()}`;
    

    return(
        <div className='card'>
                <div className="thumbnail"><img className="left" src={props.item.urlToImage} alt='sample'></img></div>
                <div className="right">
                <h1>{props.item.title}</h1> 
                <div className='author'><h2>{(props.item.author)?props.item.author:'Unknown'}</h2></div>
                <div className="separator"></div>
                <p>{props.item.content}</p>
                 <h6>{date}</h6> 
                </div>
               
                
                
            </div>
    )
}

export default NewsSection;