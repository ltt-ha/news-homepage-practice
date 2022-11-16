import './bottom-home-new.styles.scss'
const BottomHomeNew=({stt,imgUrl,title,news})=>{
return <div className='bottom-new'>
        <img className='small-img' alt='img' src={imgUrl}/>
        <div className='small-new'>
           <h2>{stt}</h2>
           <h3>{title}</h3>
           <p> {news}</p>
        </div>
        
    </div>
}
// "../../assets/images/image-retro-pcs.jpg"
export default BottomHomeNew