import { SAVE_COMMENT, FETCH_COMMENT } from './types';
import axios from 'axios';

export function saveComment(comment) {
	return {
		type: SAVE_COMMENT,
		payload: comment
	};
}

export function fetchComments() {
	return {
		type: FETCH_COMMENT,
		payload: axios.get('https://jsonplaceholder.typicode.com/comments')
	};
}
