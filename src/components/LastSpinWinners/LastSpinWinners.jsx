import React from 'react';
import './LastSpinWinners.css';
import logo from '../../assets/logo.png';
import trophy from '../../assets/trophy.png';


const LastSpinWinners = () => {
  return (
  	<div class="lastspinwinnerscon">
  	<div class="lastspinwinnersconheader">
  		<div class="lastspinwinnersconicon">
  			<img src={trophy} alt="Trophy Icon" className="trophyicon" />
  		</div>
  		<div class="lastspinwinnerscontext">
  			<h3>Last Spin Winners</h3>
  		</div>
  	</div>
  	<div class="lastspinwinnersconcontainer">
  		<table>
        <tr>
          <th>Winner</th>
          <th>Time</th>
          <th>Prize</th>
        </tr>
        <tr>
          <td>lorem ispum</td>
          <td>lorem ispum</td>
          <td>lorem ispum</td>
        </tr>
      </table>
  	</div>
  	</div>
 );
};

export default LastSpinWinners;