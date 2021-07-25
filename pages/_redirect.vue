<template>
  <div class='flex-center text-2xl title'>
    Redirecting...
  </div>
</template>

<script>
import redirects from '~/assets/redirects.json'

export default {
  validate({ params }) {
    return redirects.find(r => r.id === params.redirect)
  },
  mounted() {
    this.$nextTick(() => {
      location.replace(redirects.find(r => r.id === this.$route.params.redirect).url)
    })
  }
}
</script>
