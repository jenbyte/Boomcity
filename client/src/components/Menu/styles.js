const styles = theme => ({
  root: {
    flexGrow: 1
  },
  addCircle: {
    fontSize: 30,
    paddingRight: 8
  },
  shareButton: {
    flexGrow: 1,
    transition:
      'cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    // display: 'flex'
    // justifyContent: 'space-between'
  },
  menuIcon: {
    paddingRight: 10,
    width: 40
  },
  menuItem: {
    width: 165
  }
});

export default styles;
