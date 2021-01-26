## 指令手冊
### 教學：
#### 標題4


|[引言](/components/methods/#引言)| [清單](/components/methods/#清單)|
| :-- |:-- | 
| [階層清單](/components/methods/#階層清單)|[清單內使用引言](/components/methods/#清單內使用引言)  |
| [使用分隔線](/components/methods/#使用分隔線)  |  [連結](/components/methods/#連結)  |
| [強調](/components/methods/#強調)  |  [程式碼](/components/methods/#程式碼)  |
| [程式碼區塊](/components/methods/#程式碼區塊)  |  [行號](/components/methods/#行號)  |
| [圖片](/components/methods/#圖片)  |  [其他](/components/methods/#其他)  |
| [跳脫字元](/components/methods/#跳脫字元)  |  [表格](/components/methods/#表格)  |
| [測試更改樣式](/components/methods/#測試更改樣式style)  |      |

路徑：專案目錄/README.md  
空兩格為換行

::: tip
這是提示
"::: tip 內容 :::"
:::

::: warning
這是提示
"::: warning 內容 :::"
:::

::: danger
這是提示
"::: danger 內容 :::"
:::

::: details
"::: details 這是詳細資訊 :::"
:::

::: details 詳細資訊
"::: details ＋ 更改DETAILS名稱 :::"
:::

::: tip
    下一行加tab 會出現黑格
    範例：
        第一行
        第二行
        第三行
:::

### 引言
::: tip 使用">"為區塊引言
>範例
:::
::: tip 使用  
">  
"  >>  
為階層的區塊引言
>
>>範例
測試
> ### >## 引言裡的標題
:::

### 清單
使用清單
無序號清單：使用+ - *  
或是有序號(ex:1. 2. 3. )
::: tip 範例

>範例
> - -清單
> - -清單
> - -清單
> - -清單
  
>範例
> + +清單
> + +清單
> + +清單
> + +清單
  
>範例
> * *清單
> * *清單
> * *清單
> * *清單
  
>範例
> 1. 清單
> 2. 清單
> 3. 清單
> 4. 清單
> 5. 清單
:::  

### 階層清單
* 清單
* * 子清單

### 清單內使用引言
* 這是清單
    >使用：tab >即可行
* 這是清單
    ::: tip 清單裡的tip
    test test test
    :::

### 使用分隔線
輸入3個或以上的星號、減號、底線來建立一個分隔線，行內不能有其他東西。  
也可以在星號中間插入空白。
  
:::tip 範例:
---------
test
- - - - - 
test
*********
test
* * * * * *
:::

### 連結  
使用： **[ 文字 ] ( 連結url )**  
::: tip 範例：  
[點我連結](https://markdown.tw/#overview)
:::
  
補充：也可藉由**變量**來設置連結
::: tip 範例：

輸入[google]作為網址變量  
輸入[1]作為網址變量

[google]:http://www.google.com/
[1]:http://www.google.com/

```js
輸入[google]作為網址變量
輸入[1]作為網址變量

[google]:http://www.google.com/
[1]:http://www.google.com/
```

跳轉到 [首頁](/)  
跳轉到 [mytest頁面](/components/mytest/)  
跳轉到 [methods目錄裡的way頁面](/components/methods/way.md)  
跳轉到 [methods的標題清單](/components/methods/#清單)  
程式碼如下：
```md
跳轉到 [首頁](/)  
跳轉到 [mytest頁面](/components/mytest/)  
跳轉到 [methods目錄裡的way頁面](/components/methods/way.md)  
跳轉到 [methods的標題清單](/components/methods/#清單)  
```
:::

### 強調  
使用星號（ * ）和底線（_）作為標記強調字詞的符號，被* 或_包圍的字詞會被轉成用 < em > 標籤包圍，用兩個*或_包起來的話，則會被轉成< strong >
::: tip 範例：  
*＊test＊*  
_＿使用下底線＿_  
**＊＊test＊＊**  
__＿＿使用兩個下底線＿＿__
:::

### 程式碼  
如果要標記一小段行內程式碼，你可以用反引號把它包起來（`)

即： **`` ` ` ``**

::: tip 範例：
use `<script></script>` to write code.  
:::
若要在畫面顯示**反引號**,請用2個反引號做開頭與結尾,中間個放空格後,再放反引號,  
即：**`` ` ` + 空格 + <p> + 空格 + ` ` ``**

::: tip 範例：  
today is `` `rainy` `` day.
:::

### 程式碼區塊  
出現有顏色的程式碼區塊  
使用3個反引號 + js（html.css...等）＋程式碼  
\*補充：要亮高某一行 在程式碼＋{行數}即可

::: tip 範例：
```js
console.log('你好，VuePress！')
```

```css
.div {
    width: 80px;
    padding: 50%;
}
```

```html{2,5-7,10}
<div class="container">
    <p>test</p>
    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
        <li>item5</li>
        <li>item6</li>
        <li>item7</li>
    </ul>
</div>
```
:::

```html
<div class="container">
    <p>test</p>
    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
        <li>item5</li>
        <li>item6</li>
        <li>item7</li>
    </ul>
</div>
```

### 行號
讓程式碼區塊出現行號  
在module.exports 下新增 markdown: {lineNumbers: true}




### 圖片
使用**驚嘆號！＋方括號[ 圖片的替代文字 ]＋ ( 圖片連結網址or路徑 'title')**  
注意： 路徑是使用 **相對路徑**  
＊markdown 還無法指定圖片寬高, 若需要調整使用``<img>``標籤
::: tip 範例：
![測試畫面](./../../.vuepress/public/common/testImg.png 'test title')   
![旺仔logo](./../../.vuepress/public/common/logo.png '旺仔logo')
:::

### 其他
直接輸入`<url>`或 `<mail>`成為連接  
::: tip 範例：
<https://markdown.tw/#em>  
<address@example.com>
:::

### 跳脫字元
在下面這些符號前面加上**反斜線**來幫助插入普通的符號：  
\\   反斜線  
\`   反引號  
\*   星號  
\_   底線  
\{}  大括號  
\[]  方括號  
\()  括號  
\#   井字號  
\+   加號  
\-   減號  
\.   英文句點  
\!   驚嘆號

### 表格
Markdown 使用 \| 來製作表格  
[詳細教學](https://www.runoob.com/markdown/md-table.html)
:::tip 範例:  
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

|  人員  |  姓名  |  工號  |  分機  |  
|  ----  | ----  |  ----  | ----  |
| 工程師 | LEO CHEN |  0000123  |  005675  | 
| 技術員 | MINA LIA |  0000130  |  005673  | 
| 工程師 | JOJO TU  |  0000205  |  005664  | 

:::

### 測試更改樣式style

::: tip 範例：
<p class="color">測試更改樣式</p>
:::

<style scoped>
  .color {
    color: red;
  }
</style>

### 刪除線
在文字前後各使用2個\~波浪符號

~~測試~~
