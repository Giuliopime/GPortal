<template>
  <div class='flex-center w-full h-full'>
    <Nuxt />
    <nuxt-link to='/source' target='_blank'>
      <FontAwesomeIcon
        icon='code'
        class='absolute top-4 right-4 text-xl'
      />
    </nuxt-link>
  </div>
</template>
