<template>
  <section class="offer section" id="offer">
    <div class="offer__container container grid">

      <div class="offer__data">
        <h1 class="offer__title">
          Филиппов Михаил <br> https://t.me/MadoneFR
        </h1>

        <p class="offer__description">
          Вакансия: Frontend разработчик, Vue.js (Удаленно)
        </p>

        <a href="#" class="button">
          Subscribe Now
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.offer {
  position: relative;

  &__data,
  &__img {
    position: relative;
  }

  &__data  {
    margin-top: 15rem;
    text-align: center;
  }
  &__title {
    margin-top: 5rem;
  }

  &__description {
    margin-top: 1rem;
  }
  &__img {
    position: absolute;
    max-width: initial;
    width: 400px;
    bottom: 2rem;
    right: -5.5rem;
  }
}
</style>
