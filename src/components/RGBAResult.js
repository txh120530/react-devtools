import React from 'react';

import hexToRgba from 'hex-to-rgba';

import '../styles/rgba-styles.css';

// function isHex(h) {
// 	let n =h.replace('#', "");
// 	console.log(n);
// 	var a = parseInt(n,16);
// 	return (a.toString(16) ===n.toLowerCase());
// }


const RGBAResult = (props) => {
	const hex = props.terms[0];
	const opacity = props.terms[1];

	if (hex !== '' ){
	const rgba = hexToRgba(hex, opacity);

var style = {
      backgroundColor: rgba
    };

		return (
		<div className="result center">
			<h2>{rgba}</h2>
			<div className="rgbabox" style={style}></div>
		</div>
	);
	}	else{
		return (
			<div className="result center">
				<h2>Please enter a valid hex value</h2>
			</div>
		);
	}


}

export default RGBAResult;