import reduceComments from "../comments";
import { SAVE_COMMENT } from "../../actions/types";

it('handles action type "SAVE_COMMENT"', () => {
	const newComment = 'New comment!';

	expect(reduceComments([], {
		type: SAVE_COMMENT,
		payload: newComment
	})).toEqual([newComment]);
});

it('handles wrong action types', () => {
	expect(reduceComments([], { type: 'wrong type!!!' })).toEqual([]);
});
