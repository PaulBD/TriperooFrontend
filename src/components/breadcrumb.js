import React from "react";

export default class Breadcrumb extends React.Component {
	render(){
	return (
		<ol className="breadcrumb">
		  <li className="breadcrumb-item"><a href="#">Home</a></li>
		  <li className="breadcrumb-item"><a href="#">Library</a></li>
		  <li className="breadcrumb-item active">Data</li>
		</ol>
       	);
	}
}