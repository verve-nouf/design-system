<template>
  <main>
    <div class="page-container">
      <SideBar></SideBar>
      <div class="content-wrapper">
        <div class="content-hero">
          <div class="hero-title">
            <div class="hero-title-contentblock">
              <p class="mini-title">Components</p>
            </div>
            <div class="hero-title-contentblock">
              <h1>Breadcrumbs</h1>
            </div>
            <div class="hero-title-contentblock">
              <p class="description">Clickable elements used to indicate navigation paths.</p>
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
                A breadcrumb is a user interface (UI) element that helps users navigate through a digital interface by showing their current location within the application's hierarchy. Breadcrumbs provide a clear and actionable way for users to understand their position and easily return to previous pages or sections.
              </p>
              <br>
              <p>
                They typically consist of a series of clickable links that represent the path taken to reach the current page, responding to user input, such as a mouse click or a tap on a touchscreen device.
              </p>
            </div>
          </article>

          <div class="separator">
            <hr>
          </div>

          <article class="article-content">
            <div class="article-subheader">
              <h3>
                Breadcrumb
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                Help users to quickly move back to higher levels of the hierarchy, with numbers.
              </p>
            </div>
            <div class="article-image">
              <img src="/src/assets/breadcrumb-image.svg" alt="breadcrumb-image">
            </div>
          </article>


          <div class="separator">
            <hr>
          </div>

          <article class="article-content">
            <div class="article-header">
              <h2>
                Best practices
              </h2>
            </div>
            <div class="article-paragraph">
              <p>
                Opt for a single primary button within a layout to emphasize the most critical action. In scenarios
                where multiple buttons share equal importance, ensure a uniform appearance by employing neutral
                backgrounds for all buttons.
                <br><br>
                When dealing with numerous minor actions, maintain a clean and uncluttered layout by applying outline,
                subtle, or transparent styles to all buttons. This helps prevent visual overwhelm and ensures a more
                organized and user-friendly interface.
              </p>
            </div>
            <div class="article-image">
              <img src="/src/assets/breadcrumb-image-practices.svg" alt="breadcrumbs-bestpractices-image">
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
  name: "iconsFrontOfficeView",
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