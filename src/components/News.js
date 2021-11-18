import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "College Football News" },
      author: "College Football News",
      title: "Kansas vs TCU Prediction, Game Preview",
      description:
        "Kansas vs TCU prediction, game preview, how to watch, lines, and why each team might - or might not - win this Saturday.",
      url: "https://collegefootballnews.com/2021/11/kansas-vs-tcu-prediction-game-preview-lines-how-to-watch",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/hAc4e3YZJ0fkrNTGsAXNcw--~B/aD02MDA7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/college_football_news_usa_today_articles_667/fbb77772a034305d7f376a49df7e7132",
      publishedAt: "2021-11-18T04:38:53Z",
      content:
        "Kansas vs TCU prediction, game preview, how to watch: Saturday, November 20\r\nKansas vs TCU How To Watch\r\nDate: Saturday, November 20Game Time: 4:00 ETVenue: Amon G Carter Stadium, Fort Worth, TXHow T… [+2503 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Jaguars Wire",
      title: "The reviews are in for QB Trevor Lawrence’s Week 10 performance",
      description:
        "The critics were a bit harsh toward Lawrence this week, but it wasn't all negative.",
      url: "https://jaguarswire.usatoday.com/2021/11/17/the-reviews-are-in-for-qb-trevor-lawrences-week-10-performance/",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/6QiNwobiyQn5d1TRjxSDuw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/Plb0w84E.qvgl684cS_xHQ--~B/aD0xNzA3O3c9MjU2MDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/jacksonville_jaguars_wire_usa_today_sports_articles_630/1f949d0041d35fd1991f2b14eca2f4bd",
      publishedAt: "2021-11-18T04:35:00Z",
      content:
        "Jacksonville quarterback Trevor Lawrence is having a tough go of it as a rookie. But while he hasnt singlehandedly turned the team around, its hard to place much of the blame at his feet. While he st… [+3635 chars]",
    },
  ];
  constructor(){
      super()
      this.state = {
          articles:this.articles,
          loading:false

      }
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
