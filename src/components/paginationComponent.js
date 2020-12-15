import React from 'react'
import './pagination.css'

const Pagination = ({postsPerPage, totalPosts, paginate, activePage, changePage}) =>{
 const pageNumbers=[];
 const back ="<";
 const next = ">"
 let backButton = null;
 let nextButton = null;
 for (let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
pageNumbers.push(i);
 }
 const pages = pageNumbers.map(number=>{
      return(<li key={number} className="page-item">
        <a onClick={()=>paginate(number)} href="!#" className="page-link">
          {number}
        </a>
      </li>)
    });
console.log(activePage);
console.log(totalPosts);
console.log(activePage * postsPerPage);
    if(activePage > 1){
      
  backButton =  <li><a onClick={() => changePage('back')}>{back}</a></li> 
    }
    if( totalPosts -1 > activePage * postsPerPage){
      nextButton =
      <li><a onClick={() => changePage('next')}>{next}</a></li> 
    }

  return(
    <div>
   
<ul className="pagination">
{backButton}
    {pages}
    
  {nextButton} 
  </ul>
    </div>
  
  
  );
}

export default Pagination;