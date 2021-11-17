import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    
                    <NewsItem title = "title1" description = "some desc" imageUrl= "www.google.com" newsUrl = "www.cnbc.com" />
                    <NewsItem title = "title1" description = "some desc" imageUrl= "www.google.com" newsUrl = "www.cnbc.com" />
                    <NewsItem title = "title1" description = "some desc" imageUrl= "www.google.com" newsUrl = "www.cnbc.com" />
                    <NewsItem title = "title1" description = "some desc" imageUrl= "www.google.com" newsUrl = "www.cnbc.com" />


                </div>
            </div>

            </>
        )
    }
}

export default News
