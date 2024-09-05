import React6 from 'react';
import'./App.css'';\
import Row from './banner';
import Baneer from './Banner';\
importr Nav from './Nav';
function App() {
    return(
        <div className="app">
            <Nav/>
            <Banner />
            {/* Movie rows*/}
            <Row title="Netflix originbals" fetchUrl="/netflixoriginals"/>
            <Row title="Trending Now" fetchUrl="/trending" />
            <Row Title="Action Movies" fetchUrl="/action"/>
            </div>
    );
}
export default App;

    )
}