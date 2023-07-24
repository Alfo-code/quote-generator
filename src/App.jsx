import { useState , useEffect } from 'react'
import twitter from './social/icon-twitter.png'


function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote()
  },[]);

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        let quoteArray = data
        let random = Math.floor(Math.random() * quoteArray.length)
        let currentQuote = quoteArray[random]

        setQuote(currentQuote.text) 
        setAuthor(currentQuote.author)
      })
  }

  return (
    <>
      <div id='quote-box'>
        <h2 id="text">{quote}</h2>
        <h4 id="author">- {author}</h4>
        <div className="buttons">
          <a id='tweet-quote' href="http://twitter.com/intent/tweet" target='_blank' rel="noreferrer">
            <span><img src={twitter} alt="twitter" /></span>
          </a>
          <button onClick={() => getQuote()} id="new-quote">New quote</button>
        </div>
      </div>
      <p className="credits"> &copy; coded by <a href="https://github.com/Alfo-code">Alfo</a> for FreeCodeCamp</p>
    </>
  )
}

export default App
