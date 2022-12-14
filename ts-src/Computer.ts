//心算法(r)
function GreedyMod(max:number,price:number[],ans:number[],weight:number[],index:number):number[]
{
    //生成价值数组
    let priority = new Map();
    let res:number[] = [];
    for(let i=0;i<price.length;i++){res[i]=0;}
    let capacity = 0;
    let num = price.length;

    for(let i=0;i<num;i++)
    {
        priority.set(i,price[i]/weight[i]);
    }

    //对价值数组排序
    let map_sort_arr = Array.from(priority);
    map_sort_arr.sort((a,b)=>{return b[1]-a[1]});
    
    //贪心比较
    for(let i=0;i<map_sort_arr.length;i++)
    {
        let add = weight[map_sort_arr[i][0]];
        if((capacity+add)<=max)
        {
            capacity+=add;
            res[(map_sort_arr[i][0])]=1;
        }
    }

    //输出还没做完，考虑是否封装格式化
    console.log("File "+index+" GreedyMod res: ")
    console.log(res)
    return [1];
}
//......

//动态规划(r)
function DynamicMod(max:number,$price:number[],ans:number[],$weight:number[],index:number):number[]
{
    //数组拷贝,max为容量
    let price =  Array.from($price);
    price.unshift(0);
    let weight = Array.from($weight);
    weight.unshift(0);
    let dp:number[][]=[];

    //dp表置零
    for(let i=0;i<price.length;i++)
    {
        let arr = new Array;
        dp.push(arr);
        for(let j=0; j<max+1;j++)
        {
            arr.push(new Array);
            dp[i][j]=0;
        }
    }

    //生成了dp表
    for(let i=1;i<price.length;i++){
        for(let j=1;j<max+1;j++){
            if(j<weight[i]){
                dp[i][j]=dp[i-1][j];
            }
            else{
                dp[i][j]=Math.max(dp[i-1][j],dp[i-1][j-weight[i]]+price[i]);
            }
        }
    }
    console.log(dp);

    //寻找最优解（此处是将res归零）
    let res:number[] = [];
    for(let i=0;i<price.length;i++){
        res.push(0);
    }

    let find = (i:number,j:number)=>{
        if(i>0){
            if(dp[i][j]===dp[i-1][j]){
                res[i]=0;
                find(i-1,j)
            }
            else if(j-weight[i]>=0&&dp[i][j]==dp[i-1][j-weight[i]]+price[i]){
                res[i]=1;
                find(i-1,j-weight[i])
            }
        }
    }

    find(price.length-1,max)
    res.shift();
    console.log("File "+ index+ " DynamicMod res:")
    console.log(res)

    return[1];
}
//......


class Node{
    node_key:number[];
    node_id:number;
    constructor(idORnode:any){
        if(typeof idORnode === 'number'){
            this.node_id = idORnode;
            this.node_key = [];
        }
        else{//通过首参数的类型判断实现构造函数重载，进而实现拷贝构造函数
            this.node_key = Array.from(idORnode.node_key);
            this.node_id = idORnode.node_id;
        }
        
    }
    
    addKey(node_key_add:number){
        this.node_key.push(node_key_add);
    }

    setKey(node_key:number[]):void{
        this.node_key = Array.from(node_key);
    }
}

//分支限界（TS中采用迭代器在队列中剪枝的方式）
//数据结构：拷贝所有物品的信息，只改变取与不取
function BranchGaugeMod(max:number,price:number[],ans:number[],weight:number[],index:number):number[]
{
    //这里不采用按单位价值排序的数组，直接搜索剪枝
    let len=price.length;
    let NodeStack:Node[] = [];
    let NodeStack_2:Node[] = [];
    NodeStack.push(new Node(0));
    let count = 0;//count是用来决定这是第几个物品加不加入。

    //剪枝函数
    function prune(node:Node){
        //立即计算容量并比较
        let c=0;let v=0;
        for(let i=0;i<len;i++){
            if(node.node_key[i]===1){
                c+=weight[i];
                v+=price[i];
            }
        }
        //标价为已剪枝，暂时用于debug,后期可在每次遍历时除去
        if(c>max){
            node.node_id=-1;
            return -1;
        }
        else{
            return v;
        }
    }
    

    let best = 0;
    let bestIndex = -1;

    while(count<len){
        let NodeStackLen = NodeStack.length

        //构造放与不放
        for(let i=0;i<NodeStackLen;i++)
        {
            let AddItem = new Node(NodeStack[i]);
            let NotAddItem = new Node(NodeStack[i]);
            AddItem.addKey(1);
            NotAddItem.addKey(0);
            NodeStack.push(AddItem);
            NodeStack.push(NotAddItem);
        }

        //剪枝,undefine还是应该删掉
        for(let index in NodeStack){
            let value = prune(NodeStack[index])
            if(value===-1){
                //delete NodeStack[index];
            }
            else if(NodeStack[index].node_key.length<=count){
                
            }
            else {
                NodeStack_2.push(NodeStack[index]);
            }
        }

        NodeStack=[];
        NodeStack = Array.from(NodeStack_2);
        NodeStack_2=[];

        
        console.log("count: "+count);
        console.log(NodeStack);
        
        count++;
        debugger;
    }
    
    for(let index in NodeStack){
        if(prune(NodeStack[index])>best){
            best=prune(NodeStack[index]);
            bestIndex = Number(index);
        }
    }

    console.log("File "+ index+ " BranchGaugeMod res:")
    console.log(NodeStack[bestIndex].node_key);
    return [1];
}

//回溯法
function Backtracking(max:number,price:number[],ans:number[],weight:number[],index:number):number[]
{
    let capacity = 0;
    let priority = 0;

    let best_value = 0;
    let best_arr:boolean[] = [];
    let tree:boolean[] = [];

    for(let i=0;i<price.length;i++)
    {
        tree.push(false);
    }
    
    let now=0;

    for(;;)
    {
        //搜索触底，记录并回溯
        if(now===price.length)
        {
            //如果优于现存最优解，则取而代之
            if(best_value>priority)
            {
                best_arr = tree;
                best_value = priority;
            }

            else
            {
                
            }
        }

        if(tree[now]==false)
        {
            if((capacity+weight[now])<max)
            {
                capacity+=weight[now];
                priority+=price[now];
                tree[now]=!tree[now];
                now+=1;
            }
        }
    }




    return [1];
}

export {
    GreedyMod,//贪心
    DynamicMod,//动态
    Backtracking,//回溯
    BranchGaugeMod,//分支限界  
};