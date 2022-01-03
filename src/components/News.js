import React, { useEffect ,useState} from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  

  const updateNews=async()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=
      ${page}&pagesize=${props.pageSize}`;
    // this.setState({loading:true})
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  
  },[])


  

const fetchMoreData = async() =>{
  // this.setState({page: })
  
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=
      ${page+1}&pagesize=${props.pageSize}`;
  setPage(page+1)
  setLoading(true)
  let data = await fetch(url)
  let parsedData = await data.json()
  setArticles(articles.concat(parsedData.articles))
  setTotalResults(parsedData.totalResults)
  setLoading(false)
  
}




  
    return (
       

      <>
        <h1 className="text-center" style={{ marginTop:'60px' }}>News-{props.category==="general"?"Headlines":props.category}</h1>
        {loading===true && <Loader/>}

        
        
        {/* <div className="container text-center">
          
        </div> */}
        
  
        <div className="container">
  
        <div className="row">
        {articles.map((element)=>{
          return <NewsItem
            title={element.title}
            description={element.description}
            imageUrl={element.urlToImage}
            newsUrl={element.url}
            author = {element.author}
            publishedAt = {element.publishedAt}
            
          />
          
        })}

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length!==totalResults}
            loader={<Loader/>}
          >
          </InfiniteScroll>

   
      </div>
    </div>

      {/* <div className="container d-flex justify-content-between my-1">
      <button onClick={this.goToPrevious} disabled={page<=1?true:false} className="btn btn-dark">&#8592;previous</button>
      <button onClick={this.goToNext} disabled = {page+1>Math.ceil(totalResults/props.pageSize)} className="btn btn-dark">Next&#8594;</button>
      </div> */}

      </>
    );
  }



News.defaultProps = {
  country:"in",
  pageSize:5,
  category:"general",
}

News.propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}

export default News;
