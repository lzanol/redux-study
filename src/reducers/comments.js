import { SAVE_COMMENT, FETCH_COMMENT } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case SAVE_COMMENT:
			return [...state, action.payload];

		case FETCH_COMMENT:
			return action.payload.data.map(comment => comment.name);

		default:
			return state;
	}
};