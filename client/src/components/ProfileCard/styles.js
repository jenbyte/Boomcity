const styles = theme => ({
  avatar: {
    marginRight: 30,
    width: 55,
    height: 55
  },
  card: {
    padding: 50,
    width: '100%'
  },
  flex: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  fullname: {
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
    fontStyle: 'italic',
    margin: 0
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    lineHeight: 0
  },
  metaInfo: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    lineHeight: 0.5
  }
});

export default styles;
