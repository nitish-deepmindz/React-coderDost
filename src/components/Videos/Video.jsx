
import './video.css';

function Video({title, channel="Coder Dost", views, time, verified, id}){


    return(
        <div className='container'>
            <img className='pic' src={`https://picsum.photos/id/${id}/160/100`} alt="" />
            <div className='title'>{title}</div>
            <div className='channel'>{channel} {verified ? "@": null} </div>
            <div className="views">{views} views <span>.</span> {time}
            </div>
        </div>
    )
}


export default Video;
