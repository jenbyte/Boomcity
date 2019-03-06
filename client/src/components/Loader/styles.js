const styles = theme => ({
  root: {
    height: '100%'
    // width: '100%'
  },
  quote: {
    color: theme.palette.primary.main,
    fontSize: '1.3rem',
    fontWeight: 500,
    lineHeight: 1.5,
    textAlign: 'center',
    paddingLeft: 15,
    paddingTop: 50,
    width: 400
  },
  container: {
    margin: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
