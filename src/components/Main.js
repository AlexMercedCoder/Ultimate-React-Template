import {Routes, Route} from "react-router-dom"

function Main(props){
    return <main>
        <Routes>
            <Route path="/" element={<h1>Main Page</h1>}/>
        </Routes>
    </main>
}

export default Main