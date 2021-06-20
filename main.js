const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id:2344, color: "green"},
                {id:2345, color:"blue"}
            ],
            sizes: ["X", "L", "M", "XL"]
        }
    }
})
