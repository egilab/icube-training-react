import Link from "next/link";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

function Layout(props) {
  const { children } = props;
  const classes = useStyles();
  const data = useSelector((state) => state.cart);

  return (
    <Container fixed>
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6">
              <Link href="/">
                <a style={{ color: "white", textDecoration: "none" }}>Home</a>
              </Link>
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Link href="/cart">
                <a style={{ color: "white", textDecoration: "none" }}>
                  Cart [ {data.totalitem} ]
                </a>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      {children}
    </Container>
  );
}

export default Layout;
