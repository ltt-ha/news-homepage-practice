import './home.styles.scss'
import BottomHomeNew from '../bottom-home-new/bottom-home-new.component'
const Home = ()=> {
return <div className='home-container '>
     <div className='image-web box'> </div>
     <div className='big-title box'>
         <h1> The Bright Future of Web 3.0?</h1>
     </div>
     <div className='big-title-content box'> 
     <p>We dive into the next evolution of web that claims to put the power of the platforms back into the hards of the people. But is it really fulfilling its promise? </p>
     <br/>
     <button type="button" className="read-more-btn btn btn-warning btn-lg ">READ MORE</button>
     </div> 
     <div className='right-side box'>
        <h2 style={{color:'orange'}}><b>New</b></h2>
        <br />
        <div className='news'>
            <h3>Hydrogen VS Electric Car</h3>
            <p> Will hydrogen-flueded cars ever catch up to EVs</p>
            <br />
            <hr/>
            <br />
            <h3>The Downsides of AI Artistry</h3>
            <p> What are the possible adverse effects of on-demand AI image generation?</p>
            <br />
            <hr/>
            <br />
            <h3>Is VC Funding Drying Up?</h3>
            <p> Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            <br />
        </div>
    </div>
    <BottomHomeNew 
       imgUrl={require("../../assets/images/image-retro-pcs.jpg")}
       stt="01"
       title="Reviving Retro PCs"
       news="What happen when odd PCs" />
    <BottomHomeNew 
       imgUrl={require("../../assets/images/image-top-laptops.jpg")}
       stt="02"
       title="Top 10 Laptops of 2022"
       news="Our best picks for various needs and budgets" />
       <BottomHomeNew 
       imgUrl={require("../../assets/images/image-gaming-growth.jpg")}
       stt="03"
       title="The Growth of Gaming"
       news="How the pandemic has sparked fresh opportunities" />

</div>
}
export default Home