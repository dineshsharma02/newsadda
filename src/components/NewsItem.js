import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl} = this.props;
        return (
            <div className="col-md-4">
                 
            <div className="card m-2" style={{width: "18rem"}}>
                <img className="card-img-top" src={imageUrl} alt="Img not found"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} rel="noreferrer" target = "_blank" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
        )
    }
}
