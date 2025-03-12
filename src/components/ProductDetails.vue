<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Detalhes do Produto</h1>
    <div v-if="product">
      <p><strong>Nome:</strong> {{ product.name }}</p>
      <p><strong>Preço:</strong> {{ product.price }}</p>
      <p><strong>Descrição:</strong> {{ product.description }}</p>
    </div>
    <div v-else>
      <p>Produto não encontrado.</p>
    </div>
    <button @click="$router.go(-1)" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4">Voltar</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: null,
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
  },
};
</script>