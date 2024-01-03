import React from 'react'
import RoomFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import loading from './Loading';
import { RoomConsumer } from '../context';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

function RoomContainer() {
  return (
    <RoomConsumer>
      {value => {
        const {rooms,sortedRooms,loading} = value;
        if(loading){
          return <Loading/>
        }         
        return (
          <div>
            <RoomFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
        );
      }}
      </RoomConsumer>
      );
    }
    export default withRoomConsumer(RoomContainer);