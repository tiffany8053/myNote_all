## Vuepress 部署到 github page

#### 使用vuepress 有太多坑要注意,故在此做筆記記錄  
由於github page是放置靜態資源,須先將專案文件打包成靜態資源

步驟：
1. 先確認`config.js`和要設定下面一項：  
```js
// config.js 目錄
base: '/myNote/',
// dest: 'dist', // 補充：若設置此項目,dist文件會和docs目錄同一層
```  
2. 在該專案根目錄下創建`deploy.sh`檔案,  
`deploy.sh`檔案內容設定如下：
```sh{17}
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://tiffany8053.github.io  填写你刚刚创建的仓库地址
git push -f https://github.com/tiffany8053/專案名稱.git master

cd -
```  
:::warning 注意:
記得修改上述第17行 `https://github.com/github使用者帳號/專案名稱.git`
:::
然後`package.json`要設定`"deploy": "bash deploy.sh"`
```json{4}
"scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "deploy": "bash deploy.sh"
  },
```
:::tip 提示
這是為了之後直接輸入指令`yarn deploy` 就會自動執行`deploy.sh`檔案
:::
3. 將文件打包
```
yarn docs:build
```
會在`docs/.vuepress`資料夾下多一個 `dist`文件夾

4. 到github創建repository  
::: warning 注意：
Repository 一定要**公開 public** 才能使用github page
:::  

5. 輸入下列指令執行`deploy.sh`檔案  
```
yarn deploy
```

6. 在到GitHub -> setting -> GitHub Pages `none` 改為 `master`,並`save`保存  
(呈現下圖狀態表示完成)  
![網址連結](./../../.vuepress/public/image/githubPage/githubPageCompleted.png)



