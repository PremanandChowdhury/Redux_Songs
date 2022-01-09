// Action Creator
export const selectSong = (song) => {
  /**
   * @returns Action
   * @desc    Type & payload
   */
  return {
    type: 'SONG_SELECTED',
    payload: song,
  }
}
