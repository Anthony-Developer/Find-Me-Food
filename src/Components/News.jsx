import React, { useEffect, useState } from 'react'
import axios from 'axios'


function News() {
  const [currentNews, setCurrentNews] = useState([])
  
  const newsAPI = `https://newsapi.org/v2/everything?q=food&apiKey=${process.env.REACT_APP_NEWS_KEY}`

  const newsResults = async () => {
    let res = await axios.get(
      newsAPI
    )
    setCurrentNews(res.data.articles)
  }

  useEffect(() => {
    newsResults()
  }, [])

  const resultsToDisplay = currentNews.map((item) => {

      return (
        <div className="news-individual-divs" key={item.index}>
          <h1> {item.title} </h1>
          <p> By {item.author} </p>
          <img src={item.urlToImage} className="news-img"/>
          <p> {item.description} </p>
          <br />
          <a href={item.url} className="news-links"> Link to article</a>
          <br />
          <hr className="news-hr" />
          <br />
        </div>
      )
  })

  console.log(currentNews)

    return (
      <div className="news-div">

        <h1 className="component-title"> Recent News </h1>

        {resultsToDisplay}

      </div>
    )
  }
  
  export default News