import React, { Fragment, useState, useRef } from 'react';
import PageTemplate from '../components/PageTemplate/page-template';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { TextField, Box } from '@material-ui/core';
import Axios from 'axios';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const alertEl = useRef(null);
  const handleFormSubmit = () => {
    if (name && email && message) {
      Axios.post('https://api.sponsy.io/mail/', {
        name,
        email,
        message
      })
        .then(function(response) {
          setName('');
          setEmail('');
          setMessage('');
          setIsSubmit(true);
          alertEl.current.focus();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };
  return (
    <Fragment>
      <PageTemplate title='Contact'>
        <form>
          <Box>
            <TextField
              id='name'
              onChange={e => setName(e.target.value)}
              label='Name'
              value={name}
              variant='filled'
              InputProps={{ style: { backgroundColor: name && '#F2F2F2' } }}
            />
          </Box>
          <Box>
            <TextField
              onChange={e => setEmail(e.target.value)}
              id='email'
              label='Email'
              value={email}
              variant='filled'
              InputProps={{ style: { backgroundColor: email && '#F2F2F2' } }}
            />
          </Box>
          <Box>
            <TextField
              multiline
              rowsMax='8'
              id='message'
              label='Message'
              value={message}
              variant='filled'
              onChange={e => setMessage(e.target.value)}
              InputProps={{
                style: {
                  color: '#B3BFEB',
                  backgroundColor: message && '#F2F2F2'
                }
              }}
            />
          </Box>
          <Box display='flex' justifyContent='center' pt={7}>
            <Button
              onClick={handleFormSubmit}
              variant='contained'
              color='default'
            >
              Send
            </Button>
          </Box>
          {isSubmit && (
            <Box pt={7}>
              <Alert
                tabIndex='1'
                ref={alertEl}
                icon=''
                variant='filled'
                severity='success'
              >
                Thank you for contacting us!
              </Alert>
            </Box>
          )}
        </form>
      </PageTemplate>
    </Fragment>
  );
};

export default Contact;
