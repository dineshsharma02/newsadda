import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl} = this.props;
        return (


            <div className="col-md-4">
                 
            <div className="card m-2" style={{width: "18rem"}}>
                <img className="card-img-top" src={imageUrl?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfTftcosmlVzliw9GOVXJs8cbcUXt6pmQZbQ&usqp=CAU"} alt="Img not found"/>
                <div className="card-body">
                    <h5 className="card-title">{title?title.slice(0,88):""}</h5>
                    <p className="card-text">{description?description.slice(0,88):""}</p>
                    <a href={newsUrl} rel="noreferrer" target = "_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
            </div>
        )
    }
}
