import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  constructor(){
      super()
      this.state = {
          articles:[],
          loading:true,
          page:1,
          totalResults:0,
      }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9198e2aa6870486c80107b57f2bea0d2&page=
      ${this.state.page}&pagesize=9`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles,
                  totalResults:parsedData.totalResults})
    this.loading=false;
  }

  goToPrevious= async()=>{
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9198e2aa6870486c80107b57f2bea0d2&page=
      ${this.state.page-1}&pagesize=9`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState(
      {articles: parsedData.articles,
      page:this.state.page-1
      }
    )
    this.loading=false;
  }

  goToNext=async()=>{
    if (this.state.page+1>Math.ceil(this.state.totalResults/9)){

    }
    else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9198e2aa6870486c80107b57f2bea0d2&page=
          ${this.state.page+1}&pagesize=9`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState(
          {articles: parsedData.articles,
          page:this.state.page+1
          }
        )
        this.loading=false;
      }
  }


  render() {
    return (
       

      <>
        <h1 className="text-center">News-headlines</h1>
        <div className="container">
          
            <div className="row">
            {this.state.articles.map((element)=>{
              return <NewsItem
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            })}

       
          </div>
        </div>

        
        <div class="container d-flex justify-content-between my-1">
            <button onClick={this.goToPrevious} disabled={this.state.page<=1?true:false} className="btn btn-dark">&#8592;previous</button>
            <button onClick={this.goToNext} className="btn btn-dark">Next&#8594;</button>
        </div>

            

      </>
    );
  }
}

export default News;
