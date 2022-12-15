import { GreedyMod,DynamicMod, BranchGaugeMod,Backtracking } from './Computer';
import { getC,getP,getW,getS,getCPSW,writeAns} from './IO';

const BASE_PATH:string ="./data";
const DIR_NUM:string[] = ["/p01","/p02","/p03"];

for(let i=0;i<3;i++)
{
    let {c,p,s,w}=getCPSW(BASE_PATH+DIR_NUM[i]);
    console.log("p:"+p);
    console.log("w:"+w);
    let ans1 = GreedyMod(c,p,s,w,i);
    console.log("-------");
    let ans2 = DynamicMod(c,p,s,w,i);
    console.log("-------");
    let ans3 = BranchGaugeMod(c,p,s,w,i);
    console.log("-------");
    let ans4 = Backtracking(c,p,s,w,i);

    writeAns(i.toString(),[ans1,ans2,ans3,ans4]);
}

