import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Content from './Content';


const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />}></Route>
          <Route path="/curriculum" element={<Content />}></Route>
					
			
				</Routes>
			</BrowserRouter>
      <h1>푸터 들어갈 공간입니다 .</h1>
		</div>
	);
};

export default App;