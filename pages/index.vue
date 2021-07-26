<template>
  <div class='flex-center flex-col w-full h-full'>

    <div class='flex flex-grow' />

    <div class='flex-center flex-col xl:flex-row'>
      <img src='/icon.png' alt='Giuliopime pfp' data-aos='fade-right' class='rounded-full w-60 h-60 m-6 select-none'/>

      <div class='flex-center flex-col 2xl:ml-6'>
        <div data-aos='fade-left' class='flex-center text-5xl title my-2.5'>
          Giulio Pimenoff Verdolin
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="400" class='flex items-center justify-evenly w-full my-2.5'>
          <div class='text-lg subtitle'>
            🍰 &nbsp;{{ age }} years old
          </div>
          <div class='text-lg subtitle'>
            📍 Verona, Italy
          </div>
        </div>
      </div>
    </div>

    <div data-aos="fade-up" data-aos-delay="1000" class='flex-center flex-grow flex-wrap'>
      <a
        v-for='social in socials'
        :key="social.name"
        :href="social.url"
        :aria-label="social.name"
        target="_blank"
        class='flex-center m-2.5 md:m-4 animate-pulse hover:animate-none'
      >
        <FontAwesomeIcon
          :icon='[social.icon === "at" ? "fas" : "fab", social.icon]'
          class='text-3xl'
        />
      </a>
    </div>
  </div>
</template>

<script>
import socials from '~/assets/socials.json'

export default {
  data () {
    return {
      socials
    }
  },
  computed: {
    age () {
      return parseInt((Date.now() - new Date(2003, 9, 29).getTime()) / 31556952000)
    }
  }
}
</script>
