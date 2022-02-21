import Worker from './worker?worker'

const OFF_SCREEN_AVAILABLE = import.meta.env.PROD && 'transferControlToOffscreen' in HTMLCanvasElement.prototype

let unko
if(OFF_SCREEN_AVAILABLE){
  const worker = new Worker();
  
  worker.onmessage = async (e) => {
    console.log(e);
    
  }
  unko = 'aaaa'
} else {
  unko = 'bbbb'
}



export const o = unko