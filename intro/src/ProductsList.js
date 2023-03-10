import React, { Component } from "react";
import {Table, Button} from "reactstrap";

export default class ProductsList extends Component {

  render() {
    return (
      <div>
        <h3>
          {this.props.title}-{this.props.currentCategory}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {this.props.products && this.props.products.map(product => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.product.Name}</td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityperunit}</td>
              <td>{product.unitsInStock}</td>
              <td><Button onClick={()=>this.props.addToCart(product)} color="info">add</Button></td>
            </tr>
          ))}
            </tbody>
        </Table>
      </div>
    );
  }
}
