<template>
  <li class="task" 
      :class="{ 'is-done': task.done }"
   >
    <input
      type="checkbox"
      v-model="task.done"
      aria-label="Checkbox for following text input"
    />
    <div class="content-editable" @click="onClickTask">
      <div v-if="!isInputVisible">
        {{ task.name }} 
      </div>
      <div v-else>
        <input type="text" v-model="task.name" @blur="isInputVisible=false" ref="task">
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => ({}),
    },
  },
  data(){
    return{
      isInputVisible : false
    }
  },
  methods:{
    async onClickTask(){
      this.isInputVisible=true;
      await this.$nextTick(); 
      this.$refs.task.focus();
    }
  }
};
</script>

<style lang="scss">
  .task{
    display: flex;  
    align-items: center; 
    height: 60px;
    border: 1px solid black;
    min-width: 300px;
    input{
      flex: 1;
    }

    .content-editable{
      flex: 1;
      position: relative;
      height: 50px;
      >div{
        position: absolute;
        top: 0px;
        left: 0px;
      }
    }
  }
</style>
