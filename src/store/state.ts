export interface State {
  playState: number;
  playUrl: string;
  isCanPlay: number;
  playTime: number;

  playIndex: number;
  playList: string[];

  musicName: string;
  musicAuthor: string;
  musicImgUrl: string;


  lyric: boolean;

};


export const state: State = {
  playState: 0,
  playUrl : '',
  isCanPlay: 0,
  playTime: 0,

  playIndex: -1,
  playList: [],

  musicName: '',
  musicAuthor: '',
  musicImgUrl: '',


  lyric: false,

};