import './style.css'
import Worker from './worker?worker'

const worker = new Worker();

worker.onmessage = async (e) => {
  console.log(e);
  
}
const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
