<template>
  <main>
    <div class="page-container">
      <SideBar></SideBar>
      <div class="content-wrapper">
        <div class="content-hero">
          <div class="hero-title">
            <div class="hero-title-contentblock">
              <p class="mini-title">Fonts</p>
            </div>
            <div class="hero-title-contentblock">
              <h1>Brand typography</h1>
            </div>
            <div class="hero-title-contentblock">
              <p class="description">Fonts that are used on non-application products.</p>
            </div>
          </div>
          <div class="hero-content-block">
          </div>

          <div class="separator">
            <hr>
          </div>

          <article class="article-content">
            <div class="article-header">
              <h2>Usage</h2>
            </div>
            <div class="article-paragraph">
              <p>
                The primary font we use is Tiempos Fine. This font is applied to large titles and text that should stand out more, such as call-to-actions or major category titles. Its slightly playful character makes it accessible, friendly, and thus lowers barriers.              </p>
              <br>
              <p>
                As a secondary font, for descriptions and body text, or to create a clear distinction, we use Lato. When Tiempos Fine is not available, Playfair can be used as an alternative (e.g., for digital Google applications).              </p>
            </div>
          </article>

          <div class="separator">
            <hr>
          </div>


          <article class="article-content">
            <div class="article-header">
              <h2>Fonts</h2>
            </div>
            <div class="article-subheader">
              <h3>
                Tiempos Fine
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                Tiempos Fine is an optical size from the popular Tiempos family by Klim Type Foundry. It was created for National Geographic Magazine and designed by Noe Blanco. The design is based on Tiempos Headline but features even higher contrast and sharper details. It is available in six weights with matching italics.
              </p>
            </div>
            <div class="article-image">
                <img src="/src/assets/tiempos-fine-image.svg" alt="button-image">
            </div>
          </article>



          <article class="article-content">
            <div class="article-subheader">
              <h3>
                Lato
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                Lato is a sans-serif typeface designed by Łukasz Dziedzic. It was released in 2015. The name "Lato" is Polish for "summer.
              </p>
            </div>
            <div class="article-image">
              <img src="/src/assets/lato-image.svg" alt="avatar-staff-image">
            </div>
          </article>


          <div class="separator">
            <hr>
          </div>


          <article class="article-content">
            <div class="article-header">
              <h2>
                Resource
              </h2>
            </div>
            <div class="article-paragraph">
              <p>
                Icons on small avatars (32 pixels) can be challenging for those with visibility impairments. Consider adding a text status or tooltip for clarity. Avatars are static by default, so if you add interactions, ensure you include states and keyboarding interactions for accessibility.
              </p>
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
  name: "brandTypographyView",
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

.separator hr {
  border: 0;
  border-bottom: 1px solid #edebe9;
}

.hero-title-contentblock h1 {
  color: #000;
  font-family: "Tiempos Fine-bold", sans-serif;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 92px;
}

.separator hr {
  max-width: 75%;
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
  color: black;
  font-family: Lato, sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  max-width: 75%;
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
  color: black;
  font-family: Lato, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
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
  .hero-title-contentblock .description {
    max-width: 100%;
  }

  .separator hr {
    max-width: 100%;
  }

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