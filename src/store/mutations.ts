import { State } from './state';

export default {
  newPlay (state: State,  payload: any) {
    state.playUrl = payload.url;
    state.playState = 1;
    state.isCanPlay = 0;
  },
  newPlayInfo (state: State,  payload: any) {
    state.musicName = payload.musicName;
    state.musicAuthor = payload.musicAuthor;
    state.musicImgUrl = payload.musicImgUrl;
  },

  changePlayState (state: State) {
    if (state.playUrl != '') {
      if (state.playState === 1) {
        state.playState = 0;
      } else {
        state.playState = 1;
      }
    }
  },
  canPlay (state: State) {
    state.isCanPlay = 1;
  },
  endedPlay (state: State) {
    state.playState = 0;
  },

  newPlayList (state: State, payload: any) {
    state.playList = payload.list;
    state.playIndex = payload.index;
    console.log(payload.list);
  }
  
};