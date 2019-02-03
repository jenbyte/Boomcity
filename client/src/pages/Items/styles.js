const styles = theme => ({
  container: {
    background: theme.palette.bg.main,
    padding: '5%',
    minWidth: 350,
    [theme.breakpoints.up('md')]: {
      padding: '6%',
      minWidth: 400
    }
  }
});

export default styles;
