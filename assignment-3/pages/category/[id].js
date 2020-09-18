import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "../../lib/apollo";
import Link from "next/link";
import { Typography, Grid, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const CATEGORY_LIST = gql`
  query Category($id: String!) {
    categoryList(filters: { url_key: { eq: $id } }) {
      id
      name
      description
      products {
        items {
          id
          name
          url_key
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
  }
`;

const useStyles = makeStyles((theme) => ({
  pagetitle: {
    marginTop: 20,
  },
  categorydesc: {
    fontSize: 14,
  },
  categorytitle: {
    borderBottom: "1px solid #ccc",
    marginBottom: 40,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(5),
  },
  productimage: {
    width: "100%",
  },
  productTitle: {
    fontSize: "18px",
    color: "#000",
  },
  price: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#000",
  },
}));

function CategoryId() {
  const classes = useStyles();
  const router = useRouter();
  const id = router.query.id;
  const response = useQuery(CATEGORY_LIST, {
    variables: { id: id },
  });

  const { loading, error, data } = response;
  if (loading) {
    return <Layout>Loading ...</Layout>;
  }
  if (error) {
    return <Layout>Error...</Layout>;
  }

  const category = data.categoryList;
  const products = data.categoryList[0].products.items;
  return (
    <Layout>
      <div className={classes.categorytitle}>
        <Typography className={classes.pagetitle} variant="h3" component="h3">
          {category[0].name}
        </Typography>
        <div
          className={classes.categorydesc}
          dangerouslySetInnerHTML={{ __html: category[0].description }}
        />
      </div>
      <div>
        <Grid container spacing={3}>
          {products.map((val, key) => {
            return (
              <Grid key={key} item xs={3}>
                <Paper className={classes.paper}>
                  <img
                    className={classes.productimage}
                    src={val.image.url}
                    alt={val.name}
                  />
                  <p className={classes.productTitle}>{val.name}</p>
                  <p className={classes.price}>
                    {`${
                      val.price_range.minimum_price.final_price.currency
                    } ${val.price_range.minimum_price.final_price.value.toFixed(
                      2
                    )}`}
                  </p>
                  <Button variant="contained" color="secondary">
                    <Link href="/product/[id]" as={`/product/${val.url_key}`}>
                      <a style={{ color: "white", textDecoration: "none" }}>
                        Detail
                      </a>
                    </Link>
                  </Button>
                </Paper>
              </Grid>
            );
          })}
          ;
        </Grid>
      </div>
    </Layout>
  );
}

export default withApollo({ ssr: true })(CategoryId);
