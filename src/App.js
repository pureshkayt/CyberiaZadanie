import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import FeedbackForm from './components/FeedbackForm';
import Breadcrumb from "./components/Breadcrumbs";

function App() {
    return (
        <div className="App">
            <div className="main_content">
                <Header/>
            <main>
                <Breadcrumb/>
                <ProjectList />
                <FeedbackForm />
            </main>
            </div>
            <Footer />
        </div>
    );
}

export default App;
