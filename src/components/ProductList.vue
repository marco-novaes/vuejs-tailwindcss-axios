<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Lista de Produtos</h1>
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preço</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="product in products" :key="product.id">
          <td class="px-6 py-4 whitespace-nowrap">{{ product.name }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ product.price }}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <button @click="viewProduct(product.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Detalhes</button>
            <button @click="editProduct(product.id)" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2">Editar</button>
            <button @click="deleteProduct(product.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="addProduct" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">Adicionar Produto</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/products'); // Ajuste a URL
        this.products = response.data;
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    },
    viewProduct(id) {
      this.$router.push(`/products/${id}`);
    },
    addProduct() {
      this.$router.push('/products/add');
    },
    editProduct(id) {
      this.$router.push(`/products/edit/${id}`);
    },
    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`); // Ajuste a URL
        this.fetchProducts();
      } catch (error) {
        console.error('Erro ao excluir produto:', error);
      }
    },
  },
};
</script>