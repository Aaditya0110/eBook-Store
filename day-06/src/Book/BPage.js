import React from 'react';
import bg from './novel.jpg';
import './BPage.css';
import Nav from '../pages/Nav';
import Review from './Review';
import Rating from '@mui/material/Rating';

function BPage() {
    
  return(
    <>
    <Nav/>
    <div className='Book3'>
        <div className='r1'>
        <div className='Titl'>
            <img src={bg} className='imgs3'></img>
        </div>
        <div className='cont3'>
            <h1 className='ti3'>Title:</h1>
            <div className='i1'>Author:</div>
            <div className='i1'>Genre:</div>
            <div className='i1'>Language:</div>
            <div className='i1'>Publication:</div>
            <div className='i1'>Release Date:</div>
            <div className='i1'>Age Rating:</div>
            <div className='i1'>Pages</div>
            <div className='i1'><Rating/></div>
            
        <div className='but'>
            <button id='btn'>Buy</button><br/>
            <button id='btn'>Add to Cart</button>
        </div>
        </div>
        </div>
        <hr></hr>
        <div>
            <h2>Preview:</h2>
        HBO’s hit series A GAME OF THRONES is based on George R. R. Martin’s internationally bestselling series A SONG OF ICE AND FIRE, the greatest fantasy epic of the modern age. A DANCE WITH DRAGONS is the fifth volume in the series.

The future of the Seven Kingdoms hangs in the balance.

In the east, Daenerys, last scion of House Targaryen, her dragons grown to terrifying maturity, rules as queen of a city built on dust and death, beset by enemies.

Now that her whereabouts are known many are seeking Daenerys and her dragons. Among them the dwarf, Tyrion Lannister, who has escaped King’s Landing with a price on his head, wrongfully condemned to death for the murder of his nephew, King Joffrey. But not before killing his hated father, Lord Tywin.

To the north lies the great Wall of ice and stone – a structure only as strong as those guarding it. Eddard Stark's bastard son Jon Snow has been elected the 998th Lord Commander of the Night's Watch, but he has enemies both in the Watch and beyond the Wall, where the wildling armies are massing for an assault.

On all sides bitter conflicts are reigniting, played out by a grand cast of outlaws and priests, soldiers and skinchangers, nobles and slaves. The tides of destiny will inevitably lead to the greatest dance of all…
        </div>
        <hr></hr>
        <div className='Review'>
        <h2>Customer Reviews:</h2>
        <Review/>
        <Review/>
        <Review/>
        </div>
    </div>
    </>
  );
}

export default BPage;