import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from 'prop-types'


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
      
      loading:false
      }
    )
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9198e2aa6870486c80107b57f2bea0d2&page=
      ${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true})
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


  render() {
    return (
       

      <>
        <h1 className="text-center m-4">News-{this.props.category==="general"?"Headlines":this.props.category} and page = {this.state.page}</h1>
        

        {this.state.loading?
        
        <div className="container text-center">
          <Loader/>
        </div>
        
        
        
        
        :
          <>
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

   
      </div>
    </div>

      <div className="container d-flex justify-content-between my-1">
      <button onClick={this.goToPrevious} disabled={this.state.page<=1?true:false} className="btn btn-dark">&#8592;previous</button>
      <button onClick={this.goToNext} disabled = {this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark">Next&#8594;</button>
      </div>

        </>


        }
        

        
        

            

      </>
    );
  }
}

export default News;
