<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Editar Produto</h1>
    <form @submit.prevent="updateProduct">
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Nome</label>
        <input v-model="product.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Nome">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="price">Preço</label>
        <input v-model="product.price" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="number" placeholder="Preço">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Descrição</label>
        <textarea v-model="product.description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Descrição"></textarea>
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Atualizar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {
        name: '',
        price: 0,
        description: '',
      },
    };
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await axios.get(`http://localhost:3000/products/${this.$route.params.id}`); // Ajuste a URL
        this.product = response.data;
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    },
    async updateProduct() {
      try {
        await axios.put(`http://localhost:3000/products/${this.$route.params.id}`, this.product); // Ajuste a URL
        this.$router.push('/products');
      } catch (error) {
        console.error('Erro ao atualizar produto:', error);
      }
    },
  },
};
</script>