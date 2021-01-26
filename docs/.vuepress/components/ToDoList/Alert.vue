<template>
  <div id="alert" class="alertMask" v-if="showAlertMsg">
    <div class="dialog">
      <div class="dialog__header">
        <div class="dialog__header__close" @click="closeDailog">Ｘ</div>
      </div>
      <div class="dialog__body">
        <div class="dialog__body__warnMsg" v-show="alertContent === 1? true : false">
          {{dialogContent.warnMsg}}</div>
        <div class="dialog__body__deleteMsg" v-show="alertContent === 0? true : false">
          {{dialogContent.deleteMsg}}
          <div>
            <input type="button" value="確定" class="dialog__body__delete" @click="deleteOption">
            <input type="button" value="取消" class="dialog__body__undelete" @click="closeDailog">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showAlertMsg: { // 是否顯示對話視窗(true)
      type: Boolean,
      default: true,
    },
    alertContent: {
      type: Number, // 1：警告彈窗  0：確認刪除彈窗
    },
    childArray: { // 從父組件傳來的 array 與 index
      type: Array,
    },
    childIndex: {
      type: Number,
    },
  },
  data() {
    return {
      dialogBody: '',
      closeAlertMsg: '',
      dialogContent: {
        warnMsg: '* 請輸入內容 *',
        deleteMsg: '是否確定刪除？',
      },
    };
  },
  methods: {
    // 回傳false值
    returnFalse() {
      this.closeAlertMsg = !this.showAlertMsg; // false
      return this.$emit('updateAlertMsg', this.closeAlertMsg);
    },
    // 取消並關閉對話框
    closeDailog() {
      this.returnFalse();
    },
    // 確定刪除並關閉對話框
    // 原理:子組件的方法去更改父組件的數據
    // 執行步驟：把父組件的數據都傳到子組件裡
    deleteOption() {
      this.childArray.splice(this.childIndex, 1);
      this.returnFalse();
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../public/css/common.scss';

.alertMask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.742);
}

.dialog {
  position: absolute;
  top: 300px;
  left: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 120px;
  border-radius: 10px;
  background-color: white;
  transform: translate(-50%, -50%);

  &__header__close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    color: #555;
    cursor: pointer;
  }

  &__body {
    margin-bottom: 5px;
    color: red;

    &__deleteMsg {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex-wrap: wrap;
    }

    &__delete {
      @include button-style;

      display: inline;

      &:hover {
        background-color: rgb(24, 118, 211);
      }
    }

    &__undelete {
      @include button-style;

      margin-left: 8px;
      background-color: red;

      &:hover {
        background-color: rgb(206, 2, 2);
      }
    }
  }
}
</style>
