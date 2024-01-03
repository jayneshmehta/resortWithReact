import React from 'react'
import { useParams } from 'react-router';

export default function Getparm() {
  
    var { slug } = useParams();
    console.log("this is " + slug);
    return (slug)
}
