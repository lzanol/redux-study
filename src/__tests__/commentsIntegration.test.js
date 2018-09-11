import React from 'react';
import Root from "../components/Root";
import App from "../components/App";
import { mount } from 'enzyme';
import moxios from 'moxios';

beforeEach(() => {
	moxios.install();
	moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [
			{ name: 'Some comment...' },
			{ name: 'Another comment!' }
		]
	});
});

afterEach(() => moxios.uninstall());

it('can fetch and display comments', done => {
	const component = mount(<Root><App /></Root>);

	component.find('.fetch-comments').simulate('click');

	moxios.wait(() => {
		component.update();
		expect(component.find('li').length).toEqual(2);
		done();
	});
});
