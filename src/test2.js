import { getC,getP,getW,getS } from './test.js';

let c = -1; 
(async()=>{c=getC('./data/p01/c.txt')})()
    .then(console.log("c:"+c+"\n"));

let p = [];
(async()=>{p=getP('./data/p01/p.txt')})()
    .then(console.log("p:"+p+"\n"));

let s = [];
(async()=>{s=getS('./data/p01/s.txt')})()
    .then(console.log("s:"+s+"\n"));

let w = [];
(async()=>{w=getW('./data/p01/w.txt')})()
    .then(console.log("w:"+w+"\n"));