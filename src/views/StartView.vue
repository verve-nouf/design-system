<template>
  <main>
    <div class="page-container">
      <SideBar></SideBar>
      <div class="content-wrapper">
        <div class="content-hero">
          <div class="hero-title">
            <div class="hero-title-contentblock">
              <p class="mini-title">Overview</p>
            </div>
            <div class="hero-title-contentblock">
              <h1>Get Started</h1>
            </div>
            <div class="hero-title-contentblock">
              <p class="description">Cubigo Figma UI-Kit is a comprehensive collection of reusable components and tools, guided by clear standards, designed to build digital products and experiences.</p>
            </div>
          </div>
          <div class="hero-content-block">
          </div>

          <div class="separator">
            <hr>
          </div>

          <article class="article-content">
            <div class="article-header">
              <h2>Our goal</h2>
            </div>
            <div class="article-paragraph">
              <p>
                The aim of the Cubigo Figma UI-Kit is to enhance UI consistency and quality, while streamlining our software design and development workflows. This UI-Kit also fosters a common vocabulary across our organization, facilitating better collaboration among various teams and disciplines.
              </p>
              <br>
              <p>
                The Cubigo Figma UI-Kit is maintained by a dedicated team of designers and developers focused on building and supporting the system.
              </p>
            </div>
          </article>

          <div class="separator">
            <hr>
          </div>

          <article class="article-content">
            <div class="article-header">
              <h2>Enable the Figma library</h2>
            </div>
            <div class="article-subheader">
              <h3>
                Library
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                Enable the Fluent 2 UI kits from the Libraries dialog in the Assets panel. To ensure the UI kits are always available in your drafts, automatically enable them in Account settings.
              </p>
            </div>
            <div class="article-image">
              <img src="/src/assets/tutorial-one-image.svg" alt="button-image">
            </div>
          </article>

          <article class="article-content">
            <div class="article-subheader">
              <h3>
                Components
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                Buttons with ready to use Normal, Hover, Clicked, Loading and Disabled states. All for you to easily
                understand the magic of “States” layers within the symbols. </p>
            </div>
            <div class="article-image">
              <img src="/src/assets/tutorial-two-image.svg" alt="button-image">
            </div>
          </article>

          <article class="article-content">
            <div class="article-subheader">
              <h3>
                Component settings
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                Buttons with ready to use Normal, Hover, Clicked, Loading and Disabled states. All for you to easily
                understand the magic of “States” layers within the symbols. </p>
            </div>
            <div class="article-image">
              <img src="/src/assets/tutorial-three-image.svg" alt="button-image">
            </div>
          </article>

        </div>
      </div>
    </div>

  </main>
  <footer>
    <Footer></Footer>
  </footer>


</template>

<script>
import Footer from "@/components/Footer.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "StartView",
  components: {SideBar, Footer}
}
</script>

<style scoped>
.page-container {
  position: relative;
  min-height: 100vh;
}

.content-hero {
  padding: 10vh 80px 0 80px;
  margin-left: 20vw;
}

.hero-title p {
  font-family: Lato, "sans-serif";
  color: #0092E1;
}

.hero-title-contentblock {
  margin-bottom: 15px;
}

.separator {
  margin: 75px 0;
}

.hero-title-contentblock h1 {
  color: #000;
  font-family: "Tiempos Fine-bold", sans-serif;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 3.6rem */
}

.hero-title-contentblock .mini-title {
  color: rgba(0, 146, 225, 0.50);
  font-family: Lato, sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.35rem */
  letter-spacing: -0.09375rem;
}

.hero-title-contentblock .description {
  color: rgba(0, 0, 0, 0.50);
  font-family: Lato, sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.35rem */
}

.article-content .article-header h2 {
  color: #000;
  font-family: "Tiempos Fine-bold", sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 2.4rem */
  margin-bottom: 10px;
}

.article-paragraph p {
  color: rgb(103, 94, 94);
  font-family: Lato, sans-serif;
  font-size: 1.15rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
  max-width: 75%;
}

.article-subheader h3 {
  color: #000;
  font-family: "Tiempos Fine-medium", sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.8rem */
  margin-bottom: 10px;
}

.article-content .article-image {
  margin-top: 30px;
  margin-bottom: 120px;
}

@font-face {
  font-family: 'Tiempos Fine-regular';
  src: url('/src/assets/WOFF2/tiempos-fine-regular.woff2') format('woff2'),
  url('/src/assets/WOFF2/') format('woff');
}

@font-face {
  font-family: 'Tiempos Fine-bold';
  src: url('/src/assets/WOFF2/tiempos-fine-bold.woff2') format('woff2'),
  url('/src/assets/WOFF2/') format('woff');
}

@font-face {
  font-family: 'Tiempos Fine-light';
  src: url('/src/assets/WOFF2/tiempos-fine-light.woff2') format('woff2'),
  url('/src/assets/WOFF2/') format('woff');
}

@font-face {
  font-family: 'Tiempos Fine-medium';
  src: url('/src/assets/WOFF2/tiempos-fine-medium.woff2') format('woff2'),
  url('/src/assets/WOFF2/') format('woff');
}

@font-face {
  font-family: 'Tiempos Fine-semibold';
  src: url('/src/assets/WOFF2/tiempos-fine-semibold.woff2') format('woff2'),
  url('/src/assets/WOFF2/') format('woff');
}

.instruction {
  display: flex;
  margin-bottom: 25px;
}

#anatomy {
  margin-bottom: 50px;
}

.pointer-container {
  margin-right: 25px;
}

.instruction-content h4 {
  font-family: Lato, sans-serif;
  font-weight: 700;
  padding-bottom: 5px;
}

.instruction-content p {
  font-family: Lato, sans-serif;
  color: #808080;
}

#special-paragraph {
  margin-bottom: 50px;
}

@media only screen and (max-width: 430px) {
  .article-image img {
    width: 100%;
  }

  .content-hero {
    margin-left: 0;
    padding: 10vh 20px 0 20px;


  }

  .article-paragraph p {
    max-width: 100%
  }

}

</style>