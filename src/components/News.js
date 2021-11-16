import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

    render() {
        return (
            <>
            <div>
                This is new Component
            </div>
            <div className="row">
                <div className="col-md-4">
                <NewsItem/>
                </div>
                <div className="col-md-4">
                <NewsItem/>
                </div>
                <div className="col-md-4">
                <NewsItem/>
                </div>
                <div className="col-md-4">
                <NewsItem/>
                </div>
                <div className="col-md-4">
                <NewsItem/>
                </div>
            </div>

            </>
        )
    }
}

export default News
