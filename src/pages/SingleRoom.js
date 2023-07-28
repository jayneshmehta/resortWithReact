import React, { Component } from 'react';
import defaultBcq from '../images/room-1.jpeg';
import { RoomContext } from '../context';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import SimpleComponent from '../components/StyledHero';


export default class SingleRoom extends Component {
  
  geturl(){
    let slug = window.location.href;
    slug = slug.split("/");
    return  slug[slug.length - 1];
  }

  constructor(props) {
    super(props);
    this.state = {
      slug: this.geturl(),
      defaultBcq
    }
  }
  static contextType = RoomContext;
  render() {

    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return <div className='error'>
        <h3>No such room could be found</h3>
        <Link className='btn-primary'>back to rooms</Link>
      </div>
    }
    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
    const [mainImg, ...defaultimg] = images;
    return (
      <>
        <SimpleComponent img={images[0] || this.state.defaultBcq} >
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>Back to rooms</Link>
          </Banner>
        </SimpleComponent>
        <section className='single-room'>
          <div className='single-room-images'>
            {
              defaultimg.map((item, index) => (
                <img src={item} key={index} alt={name} />
              ))
            }
          </div>
          <div className='single-room-info'>
            <article className='desc'>
              <h3>details</h3>
              <p>{description}</p>I
            </article>
            <article className='info'>
              <h3>Info</h3>
              <h6>price : ${price} </h6>
              <h6>size : ${size} SQFT</h6>
              <h6>max Capacity : {
                capacity > 1 ? `${capacity} people` : `${capacity} person`
              }
              </h6>
              <h6>{pets ? "pets allowed" : "pets not allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className='room-extras'>
          <h6>extras</h6>
          <ul className='extras'>
            {
              extras.map((item, index) => {
                return <li key={index}>- {item}</li>
              })
            }
          </ul>
        </section>
      </>
    );
  }
}
