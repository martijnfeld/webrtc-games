import Peer from "peerjs";
// const myPeer = new Peer(undefined, {
//     host: '/',
//     port: '3001'
// })
const myPeer = new Peer();
console.log(myPeer)

export default {
    peer: myPeer
}