//action creator
export const inc = () => {
    return {
      type: 'INC'
    }
  };
export const dec = () => ({type: 'DEC'});
export const rnd = (value) => ({type: 'RND', payload: value});
export const res = () => ({type: 'RES'});