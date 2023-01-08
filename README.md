# 代码文件说明
## 文件位置
0. Git如有需要请拉取[远程仓库](https://github.com/sandwools/project)  
[![github](https://img.shields.io/github/languages/top/sandwools/project)](https://github.com/sandwools/project)

1. TypeScript原始文件:`ts-src`内
2. 编译后的JavaScript文件:`js-src`内

## 源码简述
0. 此处仅对原始TS文件作出说明,JS文件是由 *The TypeScript Compiler - Version 4.9.* 编译而成

1. *main.ts* :提供函数驱动调用,是程序入口,无自定义参数和返回值

2. *IO.ts* :提供数据输入输出,文件读写操作等函数,内含Node.js的FS库

3. *Computer.ts* : 提供计算封装,内含四个函数,分别为`贪心算法`,`动态规划`,`分支限界`,`回溯法`

# 数据文件说明
[数据来源](https://people.sc.fsu.edu/~jburkardt/datasets/knapsack_01/knapsack_01.html)
其中的p01,p02,p03的`01背包问题`,格式依照源网站格式,仅处理缩进,未有其他变化

# 结果文件说明
结果文件命名为 `ans_ *` 共有四行,分别是`贪心算法`,`动态规划`,`分支限界`,`回溯法`的结果,


# 运行环境说明
0. 本机测试环境:windows 11 专业版 22H2  
    Node.js 版本 16.16.0  
    TS-node 版本 10.9.1
1. 方法一:  
在python环境下运行 ` /runtime/start.py  `,会使用内置的Node.js运行*/src/js-src/main.js*,Linux 请安装Node.js环境并在Root权限下运行

2. 方法二:
安装`ts-node`(前置依赖包括TSC),在`ts-node`环境下运行*/src/ts-src/main.ts*