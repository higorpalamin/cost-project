import { BrowserRouter, Routes } from "react-router-dom"

function App() {

  return (
    <div>
      <BrowserRouter>
        <ul>
          <li>Home</li>
          <li>Contato</li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
        <p>Footer</p>
      </BrowserRouter>
    </div>
  )
}

export default App
