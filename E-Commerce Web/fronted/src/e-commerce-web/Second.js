import './style.css';
function Second(){
    return(
        <>
<header>
<div className='container'>
        <div className='left'>
            <img src={require('./images/s1.png')} alt='shopimage'></img>
        </div>
        <div className='right'>
            <h1>Best Festival Offers</h1>
            <p>We are providing best quality materials. We have best
             quality clothes, shoes for man and womens.</p>
             <p>50% Discount!!! </p>
             <button>Shop</button><br></br>
             <img src={require('./images/icon.png')} alt='shopimage'></img>
        </div>
    </div>
</header>
<section id="featured">
<h1>Featured</h1>
<div className='wrapper'>

    <div className='box1'>
    <img src={require('./images/s1.png')} alt='shopimage'></img>
    <div className='price'>Price: $50</div>
    </div>
    <div>
    <img src={require('./images/s2.jpg')} alt='shopimage'></img>
    <div className='price'>Price: $50</div>
    </div>
    <div>
    <img src={require('./images/s3.jpg')} alt='shopimage'></img>
    <div className='price'>Price: $50</div>
    </div>
    <div>
    <img src={require('./images/s4.jpg')} alt='shopimage'></img>
    <div className='price'>Price: $50</div>
    </div>
    <div>
    <img src={require('./images/s1.png')} alt='shopimage'></img>
    <div className='price'>Price: $50</div>
    </div>
    </div>
</section>
        </>
    )
}
export default Second;