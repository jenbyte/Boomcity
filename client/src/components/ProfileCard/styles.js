const styles = theme => ({
  avatar: {
    marginRight: 20,
    width: 52,
    height: 52
  },
  card: {
    borderRadius: 0,
    padding: 30,
    paddingLeft: 20,
    minWidth: 390,
    width: '100%'
  },
  flex: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  userInfo: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    // lineHeight: 0,
    marginBottom: '1rem'
  },
  fullname: {
    color: '#696969',
    fontWeight: 400,
    fontSize: '2.8rem',
    textTransform: 'capitalize'
    // marginTop: '1.5rem'
  },
  pos: {
    color: '#808080',
    marginBottom: 12
  },
  bio: {
    fontWeight: 400,
    fontSize: '1rem',
    marginTop: 3
  },
  bioNull: {
    fontWeight: 400,
    fontSize: '1rem',
    fontStyle: 'italic',
    marginTop: 3
  },
  numOfItems: {
    fontSize: '1.3rem'
    // alignSelf: 'center'
  },
  bold: {
    fontSize: '1.4rem',
    fontWeight: 800
  },
  profileGridTitle: {
    color: theme.palette.primary.main,
    fontSize: '2rem',
    marginTop: '2.5rem',
    marginBottom: '1rem'
  },
  flexGrid: {
    display: 'flex',
    // justifyContent: 'space-around',
    flexGrow: 1,
    flexBasis: '100%'
  }
});

export default styles;
