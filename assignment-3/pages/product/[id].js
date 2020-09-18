import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "../../lib/apollo";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { action_addcart } from "../redux/actions/action_cart";
import { useSelector } from "react-redux";

const PRODUCT_DETAIL = gql`
  query Product($id: String!) {
    products(filter: { url_key: { eq: $id } }) {
      items {
        id
        name
        description {
          html
        }
        image {
          url
        }
        price_range {
          maximum_price {
            final_price {
              value
              currency
            }
          }
          minimum_price {
            final_price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  formCart: {
    display: "grid",
    gridTemplateColumns: "10% 30%",
    columnGap: "20px",
    marginTop: 20,
  },
  productimage: {
    width: "100%",
  },
  pagetitle: {
    marginTop: 40,
    fontWeight: "bold",
  },
  productdesc: {
    fontSize: 14,
  },
  price: {
    color: "red",
  },
  productimage: {
    marginTop: 40,
    width: "100%",
  },
}));

function ProductDetail() {
  const classes = useStyles();
  const router = useRouter();
  const id = router.query.id;
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const datacart = useSelector((state) => state.cart);

  const handleChange = (event) => {
    setQty(event.target.value);
  };

  const handleCart = () => {
    let total = 0;
    if (datacart.totalitem > 0) {
      for (let key in datacart.cartitem) {
        total += datacart.cartitem[key].qty;
      }
    }

    dispatch(
      action_addcart(total, {
        id: id,
        name: products[0].name,
        price: products[0].price_range.minimum_price.final_price.value,
        qty: qty,
      })
    );
  };

  const response = useQuery(PRODUCT_DETAIL, {
    variables: { id: id },
  });

  const { loading, error, data } = response;

  if (loading) {
    return <Layout>Loading ...</Layout>;
  }
  if (error) {
    return <Layout>Error ...</Layout>;
  }
  const products = data.products.items;
  return (
    <Layout>
      <Grid container spacing={10}>
        <Grid item xs={5}>
          <img
            className={classes.productimage}
            src={products[0].image.url}
            alt={products[0].name}
          />
        </Grid>
        <Grid item xs={7}>
          <Typography className={classes.pagetitle} variant="h4" component="h4">
            {products[0].name}
          </Typography>
          <Typography className={classes.price} variant="h6" component="h6">
            {`${
              products[0].price_range.minimum_price.final_price.currency
            } ${products[0].price_range.minimum_price.final_price.value.toFixed(
              2
            )}`}
          </Typography>
          <div
            className={classes.productdesc}
            dangerouslySetInnerHTML={{ __html: products[0].description.html }}
          />
          <div className={classes.formCart}>
            <Select value={qty} displayEmpty onChange={handleChange}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
            <Button variant="contained" color="secondary" onClick={handleCart}>
              Add To Cart
            </Button>
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default withApollo({ ssr: true })(ProductDetail);
