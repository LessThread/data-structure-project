//贪心算法
function GreedyMod(max:number,price:number[],ans:number[],weight:number[],index:number):number[]
{

    let priority = new Map();
    let res:number[] = [];
    for(let i=0;i<price.length;i++){res[i]=0;}
    let capacity = 0;
    let num = price.length;

    for(let i=0;i<num;i++)
    {
        priority.set(i,price[i]/weight[i]);
    }

    let map_sort_arr = Array.from(priority);
    map_sort_arr.sort((a,b)=>{return b[1]-a[1]});
    
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
    console.log("File "+index+" res: ")
    console.log(res)
    return [1];
}

//动态规划
function DynamicMod(max:number,$price:number[],ans:number[],$weight:number[],index:number):number[]
{
    //JS的数组拷贝
    let price =  Array.from($price);
    price.unshift(0);
    let weight = Array.from($weight);
    weight.unshift(0);

    let dp:number[][]=[];

    for(let i=0;i<price.length;i++)
    {
        let arr = new Array;
        dp.push(arr);

        for(let j=0; j<max;j++)
        {
            arr.push(new Array);
            dp[i][j]=0;
        }
    }
    for(let i=1;i<price.length;i++){
        for(let j=1;j<max;j++){
            if(j<=weight[i]){
                dp[i][j]=dp[i-1][j];
            }
            else{
                dp[i][j]=Math.max(dp[i-1][j],dp[i-1][j-weight[i]]+price[i]);
            }
        }
    }

    //生成了dp表
    console.log(dp);
    console.log(max,price.length)

    let res:number[] = [];
    for(let i=0;i<price.length;i++){
        res.push(0);
    }

    let find = (i:number,j:number)=>{
        if(i>=0){
            console.log(i,j)
            if(j==3)return;
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

    find(price.length-1,max-1)
    res.shift();
    console.log(res)

    return[1];
}


class Node{
    data:number;
    left:Node;
    right:Node;
    count:number;
    constructor(data:number, left:Node, right:Node)
    {
        this.data = data;
        this.left = left;
        this.right = right;
        this.count = 1;
    }
}

function generateBinaryTree(price:number[],weight:number[])
{
    
}

function BranchGaugeMod(max:number,price:number[],ans:number[],weight:number[],index:number):number[]
{
    let best_result = 0;//记录目前最优值
    return [1];
}

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
    GreedyMod,
    DynamicMod,
    Backtracking,
    BranchGaugeMod,
};