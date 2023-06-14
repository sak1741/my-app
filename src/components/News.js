import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

    constructor(){
        super();
        console.log("Hello I am constructor of news class")
        this.state = {
            articles:[],
            loading:true,
            page:1,
            totalarticles:0,
            x:0
        } 
        
      
    }
    async componentDidMount(){
        //This runs at last after constructor, render
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=15`;
        console.log(this.props.category);
        this.setState({
           
            loading:true
            })
         

        
        let data= await fetch(url);
      
        let parseData = await data.json()
        console.log(parseData)
        this.setState({articles: parseData.articles,
        totalarticles:parseData.totalResults,
        loading:false,
        x : this.state.totalarticles
        })
     
    }
    
    handlePreviousClick= async()=>{
       
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pagesize=15`;
        this.setState({
           
            loading:true
            })
        let data= await fetch(url);
        let parseData = await data.json()
        console.log(parseData)
        this.setState({articles: parseData.articles, page:this.state.page-1, loading:false, x:this.state.x+15})
       
        console.log( this.state.totalarticles)
        
    }
    handleNextClick= async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=15`;
        this.setState({
           
            loading:true
            }) 
        let data= await fetch(url);
        let parseData = await data.json()
        console.log(parseData)
        this.setState({articles: parseData.articles, page:this.state.page+1, loading:false,x:this.state.x-15})
    
        console.log( this.state.totalarticles)
    }


    
  render() {
    
    return (
    < div className='container my-3 text-center'>
   <h2> NewsMonkey- Top Headlines</h2>
   
  
    <div className="row">
    {
    this.state.loading?<Spinner></Spinner>: this.state.articles.map((element)=>{

        return <div className="col-md-4" key={element.url}>
         <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.url} img={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name}></NewsItem>
         </div>
      
         
         
        })

    }
   

</div>
<div class="d-flex justify-content-between my-3" >
<button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>


<button disabled={this.state.x< 15} type="button" class="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>

</div>

    </div>
    
    )
  }

}
export default News

