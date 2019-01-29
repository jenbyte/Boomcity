const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    minWidth: 300
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: '100%'
  },
  dense: {
    marginTop: 19
  },
  menu: {
    // minWidth: 200,
    width: '100%'
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%'
  },
  dropDown: {
    width: '100%'
  },
  header: {
    fontSize: '1.5rem',
    lineHeight: '1',
    marginBottom: '3rem'
    // maxWidth: 0.5
  },
  imageButton: {
    background: theme.palette.primary.main,
    margin: theme.spacing.unit,
    width: '100%'
  },
  shareButton: {
    background: theme.palette.primary.main
  }
});

export default styles;
