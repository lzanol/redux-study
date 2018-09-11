import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../Root';

let component;

beforeEach(() => component = mount(<Root><CommentBox /></Root>));
afterEach(() => component.unmount());

it('has textarea and button', () => {
	expect(component.find('textarea').length).toEqual(1);
	expect(component.find('button').length).toEqual(1);
});

describe('textarea specifics', () => {
	const text = 'Some user comment';

	beforeEach(() => {
		component.find('textarea').simulate('change', {
			target: { value: text }
		});

		component.update();
	});

	it('allows users to enter text and submit', () => {
		expect(component.find('textarea').prop('value')).toEqual(text);
	});

	it('clears text after submit', () => {
		component.find('form').simulate('submit');
		component.update();
		expect(component.find('textarea').prop('value')).toEqual('');
	});
});
