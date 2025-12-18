<template>
  <header class="px-10">
    <img src="/logo.svg" alt="Apple Logo" />
    <nav>
      <ul>
        <li v-for="link in navLinks" :key="link.name">
          <a :href="link.href">{{ link.name }}</a>
        </li>
      </ul>
    </nav>

    <div class="flex-center gap-3">
      <button>
        <img src="/search.svg" alt="搜索" />
      </button>
      <button>
        <img src="/cart.svg" alt="購物車" />
      </button>
    </div>
  </header>
</template>

<script setup>
import { navLinks } from '@/constants'
</script>
