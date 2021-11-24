import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl,author,publishedAt} = this.props;
        return (


            <div className="col-md-4">
                 
            <div className="card m-2" >
                
                <img className="card-img-top" src={imageUrl?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfTftcosmlVzliw9GOVXJs8cbcUXt6pmQZbQ&usqp=CAU"} alt="Img not found"/>
                <div className="card-body">
                    <h5 className="card-title">{title?title.slice(0,88):""}</h5>
                    <p className="card-text">{description?description.slice(0,100):""}</p>
                    <a href={newsUrl} rel="noreferrer" target = "_blank" className="btn btn-dark">Read More</a>
                    <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                </div>
            </div>
            </div>
        )
    }
}
