
import {
  Card,
  CardHeader,
  Media,
  Table,
  Container,
  Row,
  Button,
  Nav,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


// core components
import Header from "components/Headers/Header.js";
const Tables = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://192.168.0.171/get-products");
        setProducts(response.data);

      } catch (error) {
        console.log("error fetching produk", error);
      }
    };
    fetchProduct();
  },
    []);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Card tables</h3>
                <div className="col text-right">
                <Link to="/new-item" className="btn btn-primary">Add New</Link>
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Status</th>
                    <th scope="col">Users</th>
                    <th scope="col">Completion</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {products.map((item) => {
                    return (
                      <tr>
                        <th scope="row">
                        </th>
                        <th>{item.harga}</th>
                        <th>{item.kategori}</th>
                      </tr>
                    )
                  })}

                </tbody>
              </Table>

            </Card>
          </div>
        </Row>
        {/* Dark table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Card tables</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Status</th>
                    <th scope="col">Users</th>
                    <th scope="col">Completion</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {products.map((item) => {
                    return (
                      <tr>

                        <th scope="row">

                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("../../assets/img/theme/bootstrap.jpg")}
                              />
                            </a>
                            <Media>
                              <span className="mb-0 text-sm">
                                {item.name}
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <th>{item.harga}</th>
                        <th>{item.kategori}</th>

                      </tr>
                    )
                  })}

                </tbody>
              </Table>

            </Card>
          </div>
        </Row>

      </Container>
    </>
  );
};

export default Tables;
