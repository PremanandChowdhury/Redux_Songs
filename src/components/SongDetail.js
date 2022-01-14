import React from 'react'
import { connect } from 'react-redux'

const SongDetail = (props) => {
  console.log('Props Are : ', props)
  return <div>Song Detail</div>
}

const mapStateToProps = (state) => {
  console.log('STATE:', state)
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)
