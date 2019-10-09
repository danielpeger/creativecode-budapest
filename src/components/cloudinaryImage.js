import React from 'react';

export default class CloudinaryImage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			dpr: 1
		}
	}
	
	getDpr(){
		this.setState({
			dpr: window.devicePixelRatio
		})
	}

	componentDidMount(){
    this.getDpr();
	}

	render() {
		const transformedSrc = this.props.src.replace("upload/", `upload/w_${this.props.width},dpr_${this.state.dpr}.0/`);
    return(
			<img src={transformedSrc} width={this.props.width} alt={this.props.alt}/>
    )
  }
}