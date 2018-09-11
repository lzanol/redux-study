import { saveComment } from "..";
import { SAVE_COMMENT } from "../types";

describe('save new comment', () => {
	const newComment = 'New comment!';
	const action = saveComment(newComment);

	it('has correct payload', () => {
		expect(action.payload).toEqual(newComment);
	});

	it('has correct type', () => {
		expect(action.type).toEqual(SAVE_COMMENT);
	});
});
