import React from 'react';
import { mount } from 'enzyme';
import Root from '../Root';
import CommentList from '../CommentList';

const state = {
	comments: ['Some comment.', 'Some other comments.', 'Another comment!']
};
let component;

beforeEach(() => component = mount(<Root initialState={state}><CommentList /></Root>));
afterEach(() => component.unmount());

it('has one LI element per comment', () => {
	expect(component.find('li').length).toEqual(state.comments.length);
});

it('shows the comments inside each element', () => {
	component.find('li').forEach((elm, i) =>
		expect(elm.text()).toEqual(state.comments[i]));
});
