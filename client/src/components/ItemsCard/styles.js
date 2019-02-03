const styles = theme => ({
  avatar: {
    marginRight: 15,
    width: 50,
    height: 50
  },
  button: {
    border: '1px solid #D3D3D3',
    color: theme.palette.primary.main,
    fontSize: '0.9rem',
    margin: theme.spacing.unit,
    marginBottom: '1rem',
    padding: '0.5rem 1.5rem'
  },
  card: {
    // minWidth: 400,
    borderRadius: 0,
    dislay: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  media: {
    minHeight: 250
  },
  select: {
    color: '#808080',
    marginBottom: 12
  },
  title: {
    fontWeight: 400,
    fontSize: '1.5rem',
    textTransform: 'capitalize',
    marginTop: '1.5rem'
  },
  description: {
    fontWeight: 400,
    fontSize: '1rem',
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
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  metaName: {
    '&:hover': {
      color: theme.palette.secondary.main,
      cursor: 'pointer'
    }
  },
  metaDate: {
    color: 'grey'
  }
});

export default styles;
