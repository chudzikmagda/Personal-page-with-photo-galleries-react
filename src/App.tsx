import React, { ReactElement } from 'react';
import './App.scss';
import Layout from './components/Layout/Layout';
import Header from './components/ui-elements/Header/Header';

function App(): ReactElement {
	return <Layout ContentComponent={Header} />;
}

export default App;
