import { Routes, Route, BrowserRouter } from "react-router-dom";
import Read from "./cart/Read";
import Products from "./products/Read";
import Add from "./products/Add";
import Edit from "./products/Edit";
import { Container, Nav } from "react-bootstrap";
import Category from "./category/Read";
import AddCategory from "./category/Add";
import EditCategory from "./category/Edit";
function App() {
  return (
    <div className="App">
      <Container>
        <Nav activeKey="/">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/categories">Category</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
      <BrowserRouter>
        <Routes>
          <Route path="/categories" element={<Category />} />
          <Route path="/edit/category/:id" element={<EditCategory />} />
          {/* <Route path="/categories" element={<Read />} /> */}
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/" element={<Products />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/cart" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
