import React, { useEffect, useState } from 'react'
import axios from 'axios'


function News(props) {
  const [currentNews, setCurrentNews] = useState([])
  
  const newsAPI = `https://newsapi.org/v2/everything?q=food&apiKey=${process.env.REACT_APP_NEWS_KEY}`

  const hideNews = (props.hideSearch)

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
          <h1 className="news-title"> {item.title} </h1>
            <p> By {item.author} </p>
              <img src={item.urlToImage} className="news-img" alt="images-news"/>
            <p> {item.description} </p>
                <br />
            <a href={item.url} alt='' className="news-links"><button className="news-button"> Link to article </button></a>
                <br />
            <hr className="news-hr" />
                <br />
        </div>
      )
  })

  

    return (
      <div className="news-div">

        <h1 className="component-title"> Recent News </h1>

        {resultsToDisplay}

      </div>
    )
}
  
  export default News