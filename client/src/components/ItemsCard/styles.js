const styles = theme => ({
  avatar: {
    marginRight: 15
    // width: 60,
    // height: 60
  },
  button: {
    margin: theme.spacing.unit
  },
  card: {
    maxWidth: 400
  },
  media: {
    height: 140
  },
  pos: {
    marginBottom: 12
  },
  title: {
    fontWeight: 400,
    textTransform: 'capitalize'
  },
  description: {
    fontWeight: 400
  },
  userInfo: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center'
  },
  metaInfo: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    lineHeight: 0
  }
});

export default styles;
