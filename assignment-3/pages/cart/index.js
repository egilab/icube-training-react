import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Layout from "../../components/layout";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  pagetitle: {
    marginTop: 20,
    paddingBottom: 20,
    borderBottom: "1px solid #ccc",
    marginBottom: 40,
  },
  table: {
    minWidth: 650,
  },
}));

function Cart() {
  const classes = useStyles();
  const data = useSelector((state) => state.cart);
  const [datacart, setDataCart] = useState([]);

  useEffect(() => {
    const getData = () => {
      for (let key in data.cartitem) {
        setDataCart((prevArray) => [
          ...prevArray,
          {
            name: data.cartitem[key].name,
            price: data.cartitem[key].price,
            qty: data.cartitem[key].qty,
          },
        ]);
      }
    };
    getData();
  }, []);
  return (
    <Layout>
      <Typography className={classes.pagetitle} variant="h3" component="h3">
        Cart
      </Typography>
      {datacart.length > 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell align="right">Qty</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {datacart.map((val, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {val.name}
                    </TableCell>
                    <TableCell align="right">{val.qty}</TableCell>
                    <TableCell align="right">${val.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <p>Cart Empty</p>
      )}
    </Layout>
  );
}

export default Cart;
