import React, { memo, useEffect } from 'react';
import {
  Divider,
  TextField,
  makeStyles,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  MenuItem,
  Slide,
} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SubscriberDialog = props => {
  const { setOpen, open } = props;

  const classes = useStyles();
  const [values, setValues] = React.useState({
    fullname: '',
    email: '',
  });

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
              // dispatchCreateNewPositionAction(values);
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

export default SubscriberDialog