import axios from '../axios';

export default {
  playMusic(context: any, paylod: any) {
    let {index, list} = paylod;

    context.commit('newPlayList', paylod);

    axios.get('/song/url', {params: {id: list[index].id}}).then(res => {
      context.commit('newPlay', {url: res.data.data[0].url});
    });

    axios.get('/song/detail', {params: {ids: list[index].id}}).then(res => {
      let song = res.data.songs[0];
      context.commit('newPlayInfo', {musicName: song.name, musicAuthor: (song.ar as any[]).map(i => i.name).join(' / '), musicImgUrl: song.al.picUrl});
    });
  },

}