import {Component} from 'react'

class HistorySuggestion extends Component {
  render() { 
      return (
           <div className="app-bg">
    <div className="header">
      <img
        className="welcome-logo"
        src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
        alt="app logo"
      />
      <div className="search-container">
        <img
          className="search-icon"
          src="https://assets.ccbp.in/frontend/react-js/search-img.png"
          alt="search"
        />
        <input className="search-input" type="search" />
      </div>
    </div>
    <div className="history-card">
      <ul className="">
        {initialHistoryList.map(eachLine => (
          <HistoryList historyDetails={eachLine} />
        ))}
      </ul>
    </div>
  </div>
)
      )
  }
}

export default HistorySuggestion
