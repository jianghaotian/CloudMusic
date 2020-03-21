export interface State {
  playState: number;
  playUrl: string;
  isCanPlay: number;

  musicName: string;
  musicAuthor: string;
  musicImgUrl: string;

};

export const state: State = {
  playState: 0,
  playUrl : '',
  isCanPlay: 0,
  musicName: '',
  musicAuthor: '',
  musicImgUrl: ''

};