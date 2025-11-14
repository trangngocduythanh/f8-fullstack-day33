import { Route, BrowserRouter as Router, Routes } from "react-router";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import News from "@/pages/News";
import About from "@/pages/About";

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <main>
                    <Routes>
                        <Route index element={<Home></Home>}></Route>
                        <Route path="news" element={<News></News>}></Route>
                        <Route path="about" element={<About></About>}></Route>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
