import * as fs from 'fs'

function getC(path:string):number
{
    return Number(fs.readFileSync(path).toString());
}

function getP(path:string):number[]
{
    return fs.readFileSync(path).toString().split("\n").map(Number);
}

function getS(path:string):number[]
{
    return fs.readFileSync(path).toString().split("\n").map(Number);
}

function getW(path:string):number[]
{
    return fs.readFileSync(path).toString().split("\n").map(Number);
}

function getCPSW(path:string){
    let c:number = -1; 
    (async()=>{c=getC(path+'/c.txt')})()
        //.then(()=>console.log("c:"+c+"\n"));

    let p :number[] = [];
    (async()=>{p=getP(path+'/p.txt')})()
        //.then(()=>console.log("p:"+p+"\n"));

    let s :number[] = [];
    (async()=>{s=getS(path+'/s.txt')})()
        //.then(()=>console.log("s:"+s+"\n"));

    let w :number[] = [];
    (async()=>{w=getW(path+'/w.txt')})()
        //.then(()=>console.log("w:"+w+"\n"));

    return{c,p,s,w};
}

export {
    getC,
    getP,
    getS,
    getW,
    getCPSW
};