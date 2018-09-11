import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
	state = { comment: '' };

	onChange = e => {
		this.setState({ comment: e.target.value });
	}

	onSubmit = e => {
		e.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({ comment: '' }, () => this.tf.focus());
	}

	onFetchButton = e => {
		e.preventDefault();
		this.props.fetchComments();
	}

	render() {
		return <form onSubmit={this.onSubmit}>
			<h4>Add a comment</h4>
			<textarea ref={ref => this.tf = ref}
				onChange={this.onChange} value={this.state.comment} />
			<div><button>Submit</button>&nbsp;
				<button className="fetch-comments" onClick={this.onFetchButton}>Fetch</button></div>
		</form>
	}
}

export default connect(null, actions)(CommentBox);
