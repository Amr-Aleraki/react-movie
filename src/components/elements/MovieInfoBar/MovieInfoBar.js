import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { calcTime, convertMoney} from "../../../helpers.js";
import "./MovieInfoBar.css";



const MovieInfoBar = ({ time, budget, revenue }) => (
    <div className="rmdb-movieinfobar">
      <div className="rmdb-movieinfobar-content">
        <div className="rmdb-movieinfobar-content-col">
          <FontAwesomeIcon className="fa-time" icon="clock" size="2x" />
          <span className="rmdb-movieinfobar-info">Running time: {calcTime(time)}</span>
        </div>
        <div className="rmdb-movieinfobar-content-col">
          <FontAwesomeIcon className="fa-budget" icon="money-check" size="2x" />
          <span className="rmdb-movieinfobar-info">Budget: {convertMoney(budget)}</span>
        </div>
        <div className="rmdb-movieinfobar-content-col">
          <FontAwesomeIcon className="fa-revenue" icon="ticket-alt" size="2x" />
          <span className="rmdb-movieinfobar-info">Revenue: {convertMoney(revenue)}</span>
        </div>
      </div>
    </div>
  )
  
//   MovieInfoBar.propTypes = {
//     time: PropTypes.number,
//     budget: PropTypes.number,
//     revenue: PropTypes.number
//   }


export default MovieInfoBar;