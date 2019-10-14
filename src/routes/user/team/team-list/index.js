import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/CustomButtons/Button';
import { Grid } from '@material-ui/core';
import TeamCard from './TeamCard';
import fakeTeamData from './fake-team-data'

function TeamList(props) {
  const { teams } = props

  return (
    <div>
      <Grid container>
        <Grid item>
          <Button color="primary">Create a Team</Button>
        </Grid>
      </Grid>
      <Grid container>
        {/* TOOD: RENDER TEAM LIST CARDS HERE */}
        {/* EXAMPLE CARD BELOW */}
        <Grid item xs={4}>
          <TeamCard
            name={teams[0].name}
            subtitle={teams[0].subtitle}
            description={teams[0].description}
            members={teams[0].members}
            id={teams[0].id}
          />
        </Grid>
      </Grid>
    </div>
  )
}

TeamList.defaultProps = {
  teams: fakeTeamData
}

TeamList.propTypes = {
  teams: PropTypes.array.isRequired
}

export default TeamList