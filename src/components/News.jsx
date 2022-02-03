import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  render() {
    return (
      <div>
        <Grid>
        <h3>About US</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque. Quisque non luctus sem. Nullam non magna vel nisi posuere bibendum vitae sed dui.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque. Quisque non luctus sem. Nullam non magna vel nisi posuere bibendum vitae sed dui.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque. Quisque non luctus sem. Nullam non magna vel nisi posuere bibendum vitae sed dui.
            </p>
        </Grid>
      </div>
    )
  }
}
