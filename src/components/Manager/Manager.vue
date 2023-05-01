<template>
    <div>
        <h4>Quản lý sinh viên</h4>
        <student :list="list"></student>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                     <th>Tên</th>
                     <th>Tuổi</th>
                     <th>Số điện thoại</th>
                     <th>Địa chỉ</th>
                     <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.address}}</td>
                    <td>
                        <button @click="onRemoveItem(item.id)">Xóa</button>
                        <button @click="onEditItem(item)">Sửa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
  import Student from './Student.vue';
  export default {
    components:{
       Student
    },
    data() {
        return {
            list:[
               {id:1,name:"Trieu",age:21,phone:"0364323560",address:"BacNinh"},
               {id:2,name:"An",age:21,phone:"0364323561",address:"HaTinh"},
               {id:3,name:"Hung",age:22,phone:"0364323562",address:"HaiPhong"},
               
            ]
        }
    },
    methods:{
        onRemoveItem(id){
            this.list = this.list.filter(item => item.id !== id);
        },
        
    }
  }
</script>