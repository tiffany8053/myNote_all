### config設定
發現官網有太多細節都沒講清楚，採了不少的坑...
  
想要設置可以讓人察看該頁的github原始碼方式,  
須在`config.js`裡設定  
```js{3}
    // 注意repo的設定路徑
    // 使用者帳號/專案名稱
    repo: 'tiffany8053/myNote_all', 
    editLinks: true,
    // 在哪個文件下
    docsDir: 'docs',
    docsBranch: 'master',
    editLinkText: '查看原始碼',
```
＊如果還是看不懂,直接點開比對正確的url路徑來修改
