import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  constructor(){
      super()
      this.state = {
          articles:[],
          loading:true

      }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9198e2aa6870486c80107b57f2bea0d2";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles})
    this.loading=false;
  }

  render() {
    return (
       

      <>
      
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
      </>
    );
  }
}

export default News;
