<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String as PropType<string>,
    },
  },
  computed: {
    ...mapGetters("counter", ["$count"]),
  },
  methods: {
    ...mapActions("counter", ["changeCount", "sayHello"]),
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      What's next?
    </h3>

    <div>
      <button @click="changeCount(-1)">-</button>
      <span>count {{ $count }}</span>
      <button @click="changeCount(1)">+</button>
    </div>

    <div>
      <button @click="sayHello">Define Actions</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
