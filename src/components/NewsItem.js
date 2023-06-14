
import React, { Component } from 'react'


export class NewsItem extends Component {
  
  render() {
    let {title,description,imageUrl, img}=this.props
    return (
      <div className='my-3'>
       
        <div class="card"  >
        
  <img src={img?img:"https://i.insider.com/63ab3e2147bbe40019837632?width=1200&format=jpeg"} class="card-img-top"  alt="" ></img>
  <div class="card-body">
    
    <h5 class="card-title">{title}</h5>
    <p class="card-text"> {description}</p>
    <a href={imageUrl} target="_blank" class="btn btn-sm btn-primary">Read More</a>
    <p class="card-text"><small class="text-muted">By {this.props.author==null?"unknown":this.props.author} on {new Date(this.props.date).toGMTString()}.</small></p>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'92%'}}>
    {this.props.source}

  </span>
  </div>
</div>
      </div>
    )
  }
}

NewsItem.defaultProps = {
  title:"News",
  img:"https://i.insider.com/63ab3e2147bbe40019837632?width=1200&format=jpeg",


}
export default NewsItem
