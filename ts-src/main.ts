import { GreedyMod,DynamicMod, BranchGaugeMod,Backtracking } from './Computer';
import { getC,getP,getW,getS,getCPSW } from './IO';

const BASE_PATH:string ="./data";
const DIR_NUM:string[] = ["/p01","/p02","/p03"];

for(let i=0;i<1;i++)
{
    let x = 1;
    let {c,p,s,w}=getCPSW(BASE_PATH+DIR_NUM[x]);
    console.log("p:"+p);
    console.log("w:"+w);
    console.log('\n');
    GreedyMod(c,p,s,w,i);
    console.log("-------");
    DynamicMod(c,p,s,w,i);
    console.log("-------");
    BranchGaugeMod(c,p,s,w,i);
    console.log("-------");
    Backtracking(c,p,s,w,i);
}


