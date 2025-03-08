<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Adicionar Produto</h1>
    <form @submit.prevent="addProduct">
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
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Adicionar</button>
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
  methods: {
    async addProduct() {
      try {
        await axios.post('http://localhost:3000/products', this.product); // Ajuste a URL
        this.$router.push('/products');
      } catch (error) {
        console.error('Erro ao adicionar produto:', error);
      }
    },
  },
};
</script>