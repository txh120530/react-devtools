import React from 'react';
import Slider, { Range } from 'rc-slider';

import Tooltip from 'rc-tooltip';

import 'rc-slider/assets/index.css';

import '../styles/rgba-styles.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};


class RGBASearchBar extends React.Component{
	state = { hexTerm: '', opacityTerm: 1};

		// onChange = (e) => {
		// 	e.preventDefault();


		// }


			handleChange = (e) =>{
				this.props.onSubmit(this.state.hexTerm, this.state.opacityTerm);
			};



			onHexChange = async (e) =>{
				const result = await this.setState({hexTerm: e.target.value});

				this.handleChange();
			};


			onOpacityInputChange = async (e) =>{

			if(e.target.value > 1){
				e.target.value = 1;
			}
			if(e.target.value < 0){
				e.target.value = 0;
			}
			const result = await this.setState({opacityTerm: e.target.value});

				this.handleChange();
		};


		onOpacitySliderChange = async (e) =>{
			if(e > 1){
				e = 1;
			}
			if(e < 0){
				e = 0;
			}
			const result = await this.setState({opacityTerm: e});

				this.handleChange();
		}



		render() {
			return (
				<div className="ui segment">
					<h2 className="ui title center">Hex to RGBA</h2>
					<form className="ui form">
						<div className="field">
							<label htmlFor="hex">Hex Value</label>
							<input name="hex" value={this.state.hexTerm} onChange={this.onHexChange } type="text"/>	

							<label htmlFor="opacity">Opacity</label>
							<input name="opacity" step=".01" value={this.state.opacityTerm} onChange={this.onOpacityInputChange} type="number" />
								<Slider min={0} max={1} step={.01} value={this.state.opacityTerm} onChange={this.onOpacitySliderChange} handle={handle}   />
						</div>
					</form>
				</div>
			);
		};
}

export default RGBASearchBar;