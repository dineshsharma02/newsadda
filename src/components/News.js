import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps = {
    country:"in",
    pageSize:5,
    category:"general",
  }

  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  
  constructor(){
      super()
      this.state = {
          articles:[],
          loading:true,
          page:1,
          totalResults:0,
      }
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9198e2aa6870486c80107b57f2bea0d2&page=
      ${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState(
      {articles: parsedData.articles,
      
      loading:false,
      totalResults:parsedData.totalResults
      }
    )
  }

  async componentDidMount(){
    this.setState({loading:true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9198e2aa6870486c80107b57f2bea0d2&page=
      ${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles,
                  totalResults:parsedData.totalResults,
                  loading:false})
                  
  }

  goToPrevious= async()=>{
    
    
    this.setState(
      {
      page:this.state.page-1,
      }
    )
    this.updateNews();

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9198e2aa6870486c80107b57f2bea0d2&page=
    //   ${this.state.page-1}&pagesize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState(
    //   {articles: parsedData.articles,
    //   page:this.state.page+1,
    //   loading:false
    //   }
    // )
    
    
  }

  goToNext=async()=>{
    
    
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9198e2aa6870486c80107b57f2bea0d2&page=
      //   ${this.state.page+1}&pagesize=${this.props.pageSize}`;
      // this.setState({loading:true})
      // let data = await fetch(url);
      // let parsedData = await data.json()
      // this.setState(
      //   {articles: parsedData.articles,
      //   page:this.state.page+1,
      //   loading:false
      //   }
      // )
      // this.loading=false;
      this.setState(
        {
        page:this.state.page+1,
        }
      )
      this.updateNews();
      
  }

fetchMoreData = async() =>{
  this.setState({page: this.state.page+1})
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9198e2aa6870486c80107b57f2bea0d2&page=
      ${this.state.page}&pagesize=${this.props.pageSize}`;
  this.setState({loading:true})
  let data = await fetch(url)
  let parsedData = await data.json()
  this.setState({
    articles:this.state.articles.concat(parsedData.articles),
    totalResults:parsedData.totalResults,
    loading:false,
  })
}




  render() {
    return (
       

      <>
        <h1 className="text-center m-4">News-{this.props.category==="general"?"Headlines":this.props.category}</h1>
        {this.state.loading===true && <Loader/>}

        
        
        {/* <div className="container text-center">
          
        </div> */}
        
        
        
        
        
          
        <div className="container">

          


            
        <div className="row">
        {this.state.articles.map((element)=>{
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
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!==this.state.totalResults}
            loader={<Loader/>}
          >
          </InfiniteScroll>

   
      </div>
    </div>

      {/* <div className="container d-flex justify-content-between my-1">
      <button onClick={this.goToPrevious} disabled={this.state.page<=1?true:false} className="btn btn-dark">&#8592;previous</button>
      <button onClick={this.goToNext} disabled = {this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark">Next&#8594;</button>
      </div> */}

        


        
        

        
        

            

      </>
    );
  }
}

export default News;
