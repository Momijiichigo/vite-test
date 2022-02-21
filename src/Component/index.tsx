import Worker from './worker?worker'

const worker = new Worker();

worker.onmessage = async (e) => {
  console.log(e);
  
}
export const o = 3