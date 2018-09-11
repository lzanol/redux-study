import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
	renderList() {
		return this.props.comments.map((comment, i) =>
			<li key={i}>{comment}</li>);
	}

	render() {
		return <div>
			<ul>{this.renderList()}</ul>
		</div>;
	}
}

export default connect(state => ({
	comments: state.comments
}))(CommentList);
