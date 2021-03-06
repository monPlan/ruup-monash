import React from 'react'
import {
  Grid,
  Typography
} from 'material-ui'
import CreateNewIncident from './CreateNewIncident'
import EditService from './EditService'

class AdminPage extends React.Component {
  
  render(){
   return ( 
      <div style={{padding: '1em'}}>
      <Grid container>
          <Grid item xs={12}>
              <Typography type="headline">
                  Status Administration
              </Typography>
              <CreateNewIncident />
          </Grid>
      </Grid>
      <Grid container>
          <Grid item xs={12}>
              <Typography type="headline">
                  Edit a Service
              </Typography>
              <EditService />
          </Grid>
      </Grid>
      </div>
    )
  }
}

export default AdminPage