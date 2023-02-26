import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home"

const Router = () => {
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
}

export default Router;