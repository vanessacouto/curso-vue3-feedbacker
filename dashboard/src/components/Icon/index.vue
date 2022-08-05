<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from './Loading.vue'

// se usar esse componente e passar uma 'prop' escrito 'Loading', esse Loading será
// usado aqui no ':is' (vue fará essa substituição)
export default {
  components: { Loading },
  props: {
    name: { type: String, required: true }
  }
}
</script>
