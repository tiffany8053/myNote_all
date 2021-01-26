### 使用vue組件教學
#### 在vuepress md文件中使用vue組件
將vue組件放置.vuepress/components目錄下  
![vueComponents](./../../.vuepress/public/common/vuecomponents.png)  
在需要使用vue組件的.md文件中輸入`<ClientOnly><目錄-自定義組件/></ClientOnly>`就可使用。

```md
<ClientOnly>
  <button-TheButton/> // 自定義組件
</ClientOnly>
```

<ClientOnly>
  <button-TheButton/>  <!--這是vue自訂義組件--> 
</ClientOnly>


<ClientOnly>
  <menu-drinkMenu/>
</ClientOnly>

<span v-for="i in 3">{{ i }} </span>  
