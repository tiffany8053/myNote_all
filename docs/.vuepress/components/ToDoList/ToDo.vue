<template>
  <div class="toDo">
    <div class="toDo__title">代辦事項</div>
    <div class="toDo__box">
      <input class="toDo__box__content" placeholder="請輸入內容 (最多15字)"
      v-model="content" maxlength="15" size="30" @keypress.enter="create">
      <input class="toDo__box__button" type="button" value="新增" @click="create">
      <input class="toDo__box__button" type="button" value="取消" @click="clear">
    </div>
    <div>
      <div class="toDo__title">全部</div>
    </div>
    <ul class="toDo__box__noteList">
      <li class="toDo__box__noteList__item" v-for="(item,index) in noteList" :key="item.name">
        <!-- 用兩張圖切換點選樣式   -->
        <img class="toDo__box__noteList__item__checkbox" v-show="item.showChecked"
            :src="item.checked" alt="checked" @click="uncomplete(index)">
        <img class="toDo__box__noteList__item__checkbox" v-show="item.showUncheck"
            :src="item.uncheck" alt="uncheck" @click="completed(index)">
        <div>{{index + 1}}.</div>
        <div class="toDo__box__noteList__item__content">
          {{item.writedContent}}
          <div class="toDo__box__noteList__item__content__done"
               v-show="item.showContent" v-text="done"></div>
        </div>
        <div class="toDo__box__noteList__item__timeBox">
          <p>建立於 {{item.createTime}}</p>
          <p class="toDo__box__noteList__item__timeBox__completedTime"
             v-show="item.showContent">完成於 {{item.completedTime}}</p>
        </div>
        <img class="toDo__box__noteList__item__trash"
            :src="item.trashImage" alt="trash" @click="deleteNote(index)">
      </li>
    </ul>
    <Alert :showAlertMsg='alertMsg'
           :alertContent="alertContentMsg"
           @updateAlertMsg="updateAlertMsg"
           :childIndex="parentIndex"
           :childArray="parentArray"
    ></Alert>
  </div>
</template>

<script>
import uncheck from '../../public/image/toDoList/btn_uncheck.png';
import checked from '../../public/image/toDoList/btn_checked.png';
import trashImage from '../../public/image/toDoList/trash.png';
import Alert from './Alert.vue';

export default {
  name: 'toDo',
  data() {
    return {
      content: '',
      noteList: [],
      writedContent: '',
      createTime: '',
      completedTime: '',
      done: '-已完成', // 綁定文字,用boolean值（showContent）去切換顯示
      image: { uncheck, checked, trashImage },
      parentArray: [], // 待傳給子組件的父陣列數據
      parentIndex: 0, // 待傳給子組件的父索引數據

      // alert原始數據
      alertMsg: false,
      alertContentMsg: 0, // 1：警告彈窗  0：確認刪除彈窗
    };
  },
  components: {
    Alert,
  },
  methods: {
    // 新增數據
    create() {
      if (this.content === '') {
        this.showAlert(); // 顯示彈窗
        this.alertContentMsg = 1; // 彈窗類型： 1-警告
        // console.log(this.alertContentMsg);
      } else {
        const createDate = new Date().toLocaleDateString(); // 建立日期和時間
        const createTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        this.noteList.unshift({
          writedContent: this.content,
          createTime: createDate + createTime,
          completedTime: '',

          // 將切換checkbox的資料 陣列物件化, 切換的值才會跟著索引一起移動
          showContent: false,
          trashImage: this.image.trashImage,
          checked: this.image.checked,
          showChecked: false,
          uncheck: this.image.uncheck,
          showUncheck: true,
        });
        this.content = ''; // 清空輸入欄
      }
    },
    clear() {
      this.content = '';
    },

    // 點擊完成
    completed(index) {
      // console.log(this.noteList[index].writedContent); // 待辦事項內容
      // console.log(this.noteList[index].show);
      // this.noteList[index].show = !this.noteList[index].show; // 切換完成狀態顯示
      const doneDate = new Date().toLocaleDateString();
      const doneTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      // console.log(this.noteList[index].completedTime); // 原先設定空格
      // console.log(this.noteList[index]); // 選到點擊的那一個物件
      this.noteList[index].completedTime = doneDate + doneTime; // 將陣列中 該序列的完成時間 換成 doneTime

      // 切換按鈕圖片
      this.noteList[index].showUncheck = false;
      this.noteList[index].showChecked = true;

      // 切換完成內容
      this.noteList[index].showContent = true;
    },

    // 點擊未完成
    uncomplete(index) {
      // console.log(index);
      this.noteList[index].showUncheck = true;
      this.noteList[index].showChecked = false;
      this.noteList[index].showContent = false;
    },

    // 刪除待辦事項
    deleteNote(index) {
      this.showAlert(); // 顯示彈窗
      this.alertContentMsg = 0; // 彈窗類型： 0-確認刪除

      // 傳遞 陣列 和 index 到子組件
      this.parentArray = this.noteList;
      this.parentIndex = index;
    },

    // 傳遞 顯示彈窗數據(true)
    showAlert() {
      this.alertMsg = !this.alertMsg;
    },

    // 接收 關閉彈窗數據(false)
    updateAlertMsg(receiveAlertMsg) {
      this.alertMsg = receiveAlertMsg;
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../public/css/common.scss';

* {
  margin: 0;
  padding: 0;
}

.toDo {
  overflow: hidden;
  width: 500px;
  border-radius: 5px;

  &__box {
    @include dark-green;

    display: flex;
    align-items: flex-start;
    padding: 5px;

    // 輸入待辦內容
    &__content {
      overflow: hidden;
      padding: 5px;
      border: 1px solid;
      border-radius: 5px;
      color: #555;
      outline: none;
      opacity: 1;
      resize: none;

      @include dark-green-border;
    }

    &__button {
      margin: 0 5px;
      padding: 5px;
      border-style: none;
      border-radius: 3px;
      background-color: white;
      color: #888;
      outline: none;
      font-weight: bolder;
      opacity: 1;
      cursor: pointer;

      &:hover {
        background-color: rgb(206, 204, 204);
      }
    }

    // 待辦清單
    &__noteList {
      &__item {
        @include dark-green;

        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        height: 50px;
        color: #999;

        &:not(:last-child) {
          border-bottom: 1px solid #90c4c47e;
        }

        &__checkbox {
          position: relative;
          width: 20px;
          height: 20px;
          margin: 0 5px;
          outline: none;
          cursor: pointer;
        }
        // 待辦事項內容
        &__content {
          display: flex;
          flex-wrap: wrap;
          width: 50%;

          &__done {
            color: rgb(62, 92, 92);
          }
        }

        &__timeBox {
          position: absolute;
          right: 30px;
          bottom: 0;
          padding: 0 5px 5px 0;
          font-size: 12px;

          &__completedTime {
            color: rgb(62, 92, 92);
          }
        }

        &__trash {
          position: absolute;
          top: 50%;
          right: 8px;
          width: 20px;
          height: 25px;
          cursor: pointer;
          transform: translateY(-20%);
        }
      }
    }
  }

  &__title {
    @include light-green;

    display: flex;
    justify-content: center;
    color: white;
    font-weight: bolder;
  }
}
</style>
