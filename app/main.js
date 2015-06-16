import 'fetch';

import React from 'react';

import {reposForUser} from './api';

import RepositoryList from './repository-list'

class HelloWorld extends React.Component {
	render() {
		return (
			<div>
			<h2>Some title</h2>
			<RepositoryList />
			</div>
			);
	}
}

React.render(<HelloWorld />, document.body);