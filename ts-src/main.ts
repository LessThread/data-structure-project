import { time } from 'console';
import { GreedyMod,DynamicMod, BranchGaugeMod,Backtracking } from './Computer';
import { getC,getP,getW,getS,getCPSW,writeAns} from './IO';

const BASE_PATH:string ="./data";
const DIR_NUM:string[] = ["/p01","/p02","/p03"];

for(let i=0;i<3;i++)
{
    let {c,p,s,w}=getCPSW(BASE_PATH+DIR_NUM[i]);
    console.log("p:"+p);
    console.log("w:"+w);
    let t0 = new Date().getTime();
    let ans1 = GreedyMod(c,p,s,w,i);
    console.log("time: "+(()=>{let t1= new Date().getTime(); return t1-t0;})())
    console.log("-------");
    let ans2 = DynamicMod(c,p,s,w,i);
    console.log("time: "+(()=>{let t2= new Date().getTime(); return t2-t0;})())
    console.log("-------");
    let ans3 = BranchGaugeMod(c,p,s,w,i);
    console.log("time: "+(()=>{let t3= new Date().getTime(); return t3-t0;})())
    console.log("-------");
    let ans4 = Backtracking(c,p,s,w,i);
    console.log("time: "+(()=>{let t4= new Date().getTime(); return t4-t0;})())

    writeAns(i.toString(),[ans1,ans2,ans3,ans4]);
}

debugger;

