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

function DynamicMod(max:number,price:number[],ans:number[],weight:number[],index:number):number[]
{

    //此段复用封装,需要排序吗？
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