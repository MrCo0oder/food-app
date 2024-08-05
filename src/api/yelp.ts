import axios from 'axios';

export const yelp=()=>axios.create({
  baseURL:'https://api.yelp.com/v3/businesses',
  headers: {
	accept: 'application/json',
	Authorization: 'Bearer l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx'
  }
})
