import axios from '../axios';

export default {
  playMusic(context: any, paylod: any) {
    axios.get('/song/url', {params: {id: paylod.id}}).then(res => {
      context.commit('newPlay', {url: res.data.data[0].url});
    });

    axios.get('/song/detail', {params: {ids: paylod.id}}).then(res => {
      let song = res.data.songs[0];
      console.log(song);
      context.commit('newPlayInfo', {musicName: song.name, musicAuthor: (song.ar as any[]).map(i => i.name).join(' / '), musicImgUrl: song.al.picUrl});
    });
  }
}