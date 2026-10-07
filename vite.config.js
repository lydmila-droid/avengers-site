import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],

  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        author: 'author.html',
        comics: 'comics.html',
        gallery: 'gallery.html',
        heroes: 'heroes.html',
        movies: 'movies.html',
        test: 'test.html',
        universe: 'universe.html',
        hawkeye: 'hawkeye.html',
        hulk: 'hulk.html',
        ironman: 'ironman.html',
        thor: 'thor.html',
        captain1: 'captain1.html',
        black_widow: 'black_widow.html',
        nick_fury: 'nick_fury.html',
      },
    },
  },
})