// Write your code here
import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, tossResultUrl: HEADS_IMG_URL}

  onclicking = () => {
    const {headsCount, tailsCount, tossResultUrl} = this.state

    const tossResult = Math.floor(Math.random() * 2)

    let latestHeadCount = headsCount

    let latestTailsCount = tailsCount

    let tossImage = ''

    if (tossResult === 0) {
      latestHeadCount += 1
      tossImage = HEADS_IMG_URL
    } else {
      latestTailsCount += 1
      tossImage = TAILS_IMG_URL
    }

    this.setState({
      headsCount: latestHeadCount,
      tailsCount: latestTailsCount,
      tossResultUrl: tossImage,
    })
  }

  render() {
    const {headsCount, tailsCount, tossResultUrl} = this.state
    const total = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="coin-toss-bg-card ">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResultUrl} className="image" alt="toss result" />
          <button type="button" className="button" onClick={this.onclicking}>
            Toss Coin
          </button>
          <div className="results-container">
            <p className="result">
              Total:<span className="count-total">{total}</span>
            </p>
            <p className="result">
              Heads:<span className="count-heads">{headsCount}</span>
            </p>
            <p className="result">
              Tails:<span className="count-tails">{tailsCount}</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
