import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,apiKey} from '../../constants/constants'
import YouTube from 'react-youtube'


function Rowpost(props) {
  const [Movie, setMovie] = useState([])
  const [Url, setUrl] = useState('')
  useEffect(() => {
   axios.get(props.url).then(response=>{
    console.log(response.data);
    setMovie(response.data.results)
   }).catch((err)=>{
    console.log('error occured');
   })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }
  const showMovie=(id=>{
    axios.get(`movie/${id}/videos?api_key=${apiKey}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrl(response.data.results[0])
      }
console.log(response.data.results);
    }).catch(()=>{
      console.log('error');
    })

  })
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
<div className="posters">
  {Movie.map(movie=>
    
 <img onClick={()=>showMovie(movie.id)
 }  className={props.isSmall?'smallPoster':'poster' }src={`${imageUrl+movie.backdrop_path}`} alt="poster" />
    
  )}
   
</div>
{Url && <YouTube videoId={Url.key} opts={opts}  />}
    </div>
  )
}

export default Rowpost