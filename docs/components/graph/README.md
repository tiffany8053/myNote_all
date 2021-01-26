## 圖表

安裝插件flowchart 或mermaid。

## flowchart
1. 節點  
開始節點-默認文字為: **start**  
結束節點-默認文字為: **end**

:::tip 範例：
使用插件**flowchart** 而製作的流程圖。

@flowstart
st=>start: 開始值
e=>end: 結束值

st->e
@flowend


程式碼：
```md{1,8}
@flowstart
// 必須先定義名稱
st=>start: 開始值
e=>end: 結束值

//流程方向
st->e
@flowend
```
:::


@flowstart
process=>operation: Operation
e=>end: End

process->e
@flowend


@flowstart
cond=>condition: Process?|past:>https://www.google.com
process=>operation: Process
e=>end: End|future:>https://www.google.com

cond(yes)->process->e
cond(no)->e
@flowend


``` mermaid
  graph TD
    start([Start]) --> dev(DEV) --> pm{PM}
    qas(QAS) --> sa{SA}
    uat(UAT) --> user{User}
    prd(PRD) --> e([End])
    pm --> |Yes| qas
    pm --> |No| dev
    sa --> |Yes| uat
    sa --> |No| qas
    user --> |Yes| prd
    user --> |No| uat


    classDef blue fill: #3282b8, color: #fff, stroke: #1b262c, stroke-width: 1px
    classDef person fill: #bbe1fa, stroke: #bbe1fa
    classDef env fill: #1b262c, color: #fff, stroke: #1b262c
    class start,e blue
    class pm,sa,user person
    class dev,qas,uat,prd env
```
```mermaid
graph LR
  id1[方框]
  id2(帶有圓角的方框)
  id3([體育場形狀])
  id4[[子例程]]
  id5[(圓柱狀)]
  id6((圓形))
  id7>非對稱形狀]
  id8{菱形}
  id9{{六角形}}
  id10[/平行四邊形1/]
  id11[\平行四邊形2\]
  id12[/梯形1\]
  id13[\梯形2/]
  
  A((我是Ａ點<br>圓形))-->B{{我是B點<br>六角形}}
```

```mermaid
sequenceDiagram
A ->> B: 你最喜歡的小說是什麼？ 
B -->> A: 《福爾摩斯探案集》！

C -x B: 你最喜歡的小說是什麼？ 
B --x C: 《福爾摩斯探案集》！

```

``` mermaid
graph TD
  report(首頁<br>Report) --> reportList(出差報告列表<br>ReportList)
  reportList(出差報告列表<br>ReportList) --> reportDateSelect(選擇日期<br>ReportDateSelect)
  reportList(出差報告列表<br>ReportList) --> reportDetail(詳情<br>ReportDetail)
  reportList(出差報告列表<br>ReportList) --> reportWrite(填寫出差報告<br>ReportWrite)
```


A first level header
====================

A second level header
---------------------

```mermaid
graph LR
A[方形] -->B(圆角)
    B --> C{条件a}
    C -->|a=1| D[结果1]
    C -->|a=2| E[结果2]
    F[横向流程图]
```