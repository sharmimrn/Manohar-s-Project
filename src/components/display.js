import Axios from 'axios';
import sampleresponse from '../resources/sampleResponse1.json'
import { useState, useEffect } from 'react'
import Pagination from "./paginationComponent"; 
import Posts from './posts' 
//import DataTable from "react-data-table-component";
/*const sampleresponse = sampleresponse.map((details,index)=>({
    version: details.version

}))*/
const Display = () =>{
    const [activePage, setActivePage] = useState(1);
    const [postsPerPage,setpostsPerPage] = useState(10);
    const [loading,setLoading] = useState(10);
    const [posts, setPosts] = useState([]);
useEffect(()=>{
    const fetchPosts = async() =>{
setLoading(true);
//const res = await Axios.get("url");
const res = sampleresponse;
setPosts(res);
console.log(res);

setLoading(false);
    }
    fetchPosts();
})
    
    /*constructor(props) {
        super(props);
        console.log("Props:: " + props)
        this.state = {activePage:1,data: []}}
        handlePageChange = pageNumber => {
            console.log(`active page is ${pageNumber}`);
           // this.setState({ activePage: pageNumber });
           setActivePage(pageNumber);
          };*/
        const onChange = (e, pageInfo) => {
            console.log(pageInfo.activePage);
            //this.setState(()=>{return{activePage: pageInfo.activePage}});
            setActivePage(pageInfo.activePage);

          //setApiUrl('https://swapi.co/api/people/?page=' + page.activePage.toString());
        };
        const indexOfLastPost = activePage*postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
        console.log(currentPosts);
        const paginate = (pageNumber) =>setActivePage(pageNumber);
        const changePage= (direction) => {
            if (direction == 'back') {
                setActivePage(activePage - 1)
             }
             else if (direction == 'next') {
                setActivePage(activePage + 1)
             }
            }
        return(
            <div>
                {/*sampleresponse.map((details,index)=>{
                    return (<h1>{details.version}</h1>);

                })*/}
               {/*<DataTable
          title="Movies"
          columns={columns}
          data={sampleresponse}
          defaultSortField="title"
               />
               <Pagination 
      activePage={activePage}
      onPageChange={onChange}
      totalPages={10}
      ellipsisItem={null}
      color='secondary' size="small" shape="rounded"
    />*/}
 
    <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} activePage={activePage} changePage={changePage}/> 
    </div>
        )}

export default Display;