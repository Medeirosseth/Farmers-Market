/** @jsxImportSource @emotion/react */
import { Component } from "react"
import MarketSchedule from "../Data/MarketSchedule.json"
import SeasonalProduce from "../Data/SeasonalProduce.json"

export default class App extends Component {
  constructor(props) {
    super(props)
    const today = new Date()
    this.state = {
      welcomeIsVisible: true,
      dayOfWeek: today.getDay(),
      currentMonth: today.getMonth(),
    }
  }

  render = () => {
    const { location } = MarketSchedule[this.state.dayOfWeek]
    const nameOfMonth = SeasonalProduce[this.state.currentMonth].month
    const monthlySelection = SeasonalProduce[this.state.currentMonth].selection
    return (
      <main>
        {
          this.state.welcomeIsVisible
            ? <>
              <h3>Welcome to Marjories Farmers Market </h3>
              <p> {this.state.dayOfWeek} we are located at {location}</p>
              <p> {nameOfMonth} produce is</p>
              <ul>
                {
                  monthlySelection.map((produce, idx) => (
                    <li key={idx}>{produce}</li>
                  ))
                }
              </ul>
            </>
            : ``
        }
      </main>
    )
  }
}
