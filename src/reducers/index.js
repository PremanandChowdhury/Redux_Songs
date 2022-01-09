import { combineReducers } from 'redux'

// Reducers
const songsReducer = () => {
  return [
    { title: 'Dance Meri Rani', duration: '03:43' },
    { title: 'Panghat', duration: '03:34' },
    { title: 'Raataan Lambiyan', duration: '03:50' },
    { title: 'Chaka Chak', duration: '04:31' },
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

// Combining the reducers together
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
})
