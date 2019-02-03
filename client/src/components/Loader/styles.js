const styles = theme => ({
  container: {
    background: theme.palette.bg.main,
    height: '100%',
    width: '100%'
  },
  quote: {
    color: '#F1F1F1',
    fontSize: '1rem',
    fontWeight: 500,
    paddingLeft: 15
  },
  flex: {
    margin: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    lineHeight: 2
  }
});

export default styles;
