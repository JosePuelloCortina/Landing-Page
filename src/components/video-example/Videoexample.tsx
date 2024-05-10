import ReactPlayer from 'react-player'

export default function Videoexample() {
  return (
    <div className='pt-48'>
        <ReactPlayer 
            frameBorder="0"
            height="70vh"
            width="100%"
            url="https://www.youtube.com/watch?v=1hcnYokVn8U"
        />
       
    </div>
  )
}
