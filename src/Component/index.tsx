import Worker from './worker?worker'

const OFF_SCREEN_AVAILABLE = import.meta.env.PROD && 'transferControlToOffscreen' in HTMLCanvasElement.prototype
if(OFF_SCREEN_AVAILABLE){
  const worker = new Worker();
  
  worker.onmessage = async (e) => {
    console.log(e);
    
  }
}



export const o = 3