<template>
  <div class='flex-center flex-col'>
    <p v-if='error.statusCode === 404' class='title text-2xl'>Nothing here...</p>
    <p v-else class='title text-2xl'>An error occurred</p>
    <nuxt-link to='/' class='flex-center subtitle mt-5'>
      <FontAwesomeIcon icon='arrow-left' class='text-lg mr-2.5'/> Go back to the homepage
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
