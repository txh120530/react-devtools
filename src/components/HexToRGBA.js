import React from 'react';
import SearchBar from './RGBASearchBar';
import RGBAResult from './RGBAResult';

class HexToRGBA extends React.Component{
		state = {rgba: '' };

	onRGBASubmit = async (hexTerm, opacityTerm) => {
		this.setState({rgba: [hexTerm, opacityTerm]});
	}



  renderResults() {
    if(this.state.rgba === '') {
      return null;
    } else {
      return (
        <RGBAResult terms={this.state.rgba} />
      );
    }
  };




	render() {
		return (
			<div className="ui segment flex-ed main-container">
				<SearchBar onSubmit={this.onRGBASubmit} />

				<div className="ui segment">
					{this.renderResults()}
				</div>
			</div>
		);
	}

}


export default HexToRGBA;