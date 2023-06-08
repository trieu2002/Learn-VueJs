<template>
    <div>
        <div v-if="cart.length<1">Giỏ hàng trống</div>
        <div v-else>
            <table class="table">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Image</th>
                     <th>Qty</th>
                     <th>Price</th>
                     <th>Total</th>
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="(item,index) in cart">
                      <td>{{index}}</td>
                      <td>{{ item.name }}</td>
                      <td><img :src="item.image" alt="" width="100" height="100"></td>
                      <td>
                        <button @click="onIncreQty(item)">+</button>
                        {{ item.qty }}
                        <button @click="onDereQty(item)">-</button>
                    </td>
                      <td>{{ item.price }}</td>
                      <td>{{ calculateTotal(item) }}</td>
                  </tr>
               </tbody>
               <tfoot>
                   <tr>
                      <td colspan="5">Tong tien</td>
                      <td>{{ totalPrice }}</td>
                   </tr>
               </tfoot>
            </table>
        </div>
    </div>
</template>
<script>
export default{
    name:"cart",
    data(){
        return {
            cart:JSON.parse(localStorage.getItem("cart")) || []
        }
    },
    watch:{
        cart:{
            deep:true,
            handler(newCart){
                localStorage.setItem("cart", JSON.stringify(newCart));
            }
        }
    },
    computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.qty * item.price, 0);
    },
    },
    methods:{
        calculateTotal(item) {
            return item.price * item.qty;
        },
        onIncreQty(item) { 
           
            item.qty++;
            
        },
        onDereQty(item) {
            if (item.qty > 1) {
                item.qty--;
              
            }else{
               if(window.confirm("Bạn có chắc chắn muốn xóa")){
                const index = this.cart.indexOf(item);
                this.cart.splice(index, 1);
               
               }
            }
        },
       
    }
}
</script>