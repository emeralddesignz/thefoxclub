import React from 'react';
import './GameBox.css';
import logo from '../../assets/logo.png';
import gemicon from '../../assets/gem1.png';


const GameBox = () => {
  return (
  	<div class="w-4/5">
  	<div class="gameboxheader">
  		<div class="gameboxicon">
  			<img src={gemicon} alt="Gem Icon" className="gemicon" />
  		</div>
  		<div class="gameboxtext">
  			<h3>Bonus $CHITZ Machine</h3>
  			<p>This is a machine created for active fox club players</p>
  		</div>
  	</div>
  	</div>
 );
};

export default GameBox;