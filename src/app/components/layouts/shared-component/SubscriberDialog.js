import React from 'react';
import {
  Divider,
  TextField,
  makeStyles,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Slide,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Firebase, { withFirebase } from '../../Firebase';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: theme.spacing(1.5, 0),
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  input: {
    color: "black"
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomizedSnackbars = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Snackbar open={props.openClick} autoHideDuration={6000} onClose={props.handleClose}>
        <Alert onClose={props.handleClose} severity="success">
          Thanks for subscribing for our application you will receive an email to install our application. Thanks
        </Alert>
      </Snackbar>
    </div>
  );
}

const SubscriberDialog = props => {
  const { setOpen, open } = props;

  const classes = useStyles();
  const [valueClick, setValueClick] = React.useState(false);
  const [values, setValues] = React.useState({
    fullname: '',
    email: '',
  });

  // close modal function
  const handleClickClose = () => {
    setOpen(false);
  };

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  const canBeSubmitted = () => {
    const { fullname, email } = values;
    return fullname !== '' && email !== '';
  };


  // function to submit subscriber information
  const onSubmit = event => {
    props.firebase.subscriberData(event);

    // snackbar open function
    setValueClick(true);

    // close modal function
    handleClickClose();
  };

  // snackbar close function
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setValueClick(false);
  };

  if (valueClick === true) {
    return <CustomizedSnackbars openClick={valueClick} handleClose={handleClose} />
  }
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClickClose}
        keepMounted
        TransitionComponent={Transition}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Subscribe Details
        </DialogTitle>

        <Divider />

        <DialogContent>
          <div>
            <TextField
              id="fullname"
              label="Full Name"
              className={classes.textField}
              value={values.fullname}
              variant="outlined"
              onChange={handleChange('fullname')}
              margin="normal"
              fullWidth
              InputProps={{
                className: classes.input
              }}
              InputLabelProps={{
                className: classes.input,
              }}
            />
            <TextField
              id="email"
              label="Email"
              className={classes.textField}
              value={values.email}
              onChange={handleChange('email')}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </div>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => {
              onSubmit(values);
            }}
            color="primary"
            variant="contained"
            disabled={!canBeSubmitted()}
          >
            Save
          </Button>
          <Button
            onClick={() => handleClickClose()}
            color="primary"
            variant="contained"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withFirebase(SubscriberDialog)