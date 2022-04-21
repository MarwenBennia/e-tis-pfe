import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor:theme.palette.background.default,
    marginTop:'20px',
  },
  root: {
    flexGrow: 1,
  },
}));