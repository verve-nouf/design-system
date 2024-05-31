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
              <h1>Options</h1>
            </div>
            <div class="hero-title-contentblock">
              <p class="description">Selectable option allowing only one choice from a set or box allowing multiple choices from a set</p>
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
                A radiobutton is a user interface (UI) element that allows users to select a single option from a set of predefined choices. Radiobuttons are commonly used in forms and settings where only one selection is permitted at a time.
                They typically consist of a small circle that can be clicked or tapped, with only one circle in a group being selectable at any given time."

              </p>
              <br>
              <p>
                A checkbox is a user interface (UI) element that allows users to select one or multiple options from a set. Checkboxes are commonly used in forms and settings where multiple selections are allowed.
                They typically consist of a small square that can be checked or unchecked, indicating the selection status of the option."                </p>
            </div>
          </article>

          <div class="separator">
            <hr>
          </div>

          <article class="article-content">
            <div class="article-header">
              <h2>Types</h2>
            </div>
            <div class="article-subheader">
              <h3>
                Radiobutton
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                A radiobutton allows users to select exactly one option from a list of mutually exclusive choices. When a user selects one radiobutton, it deselects any previously selected radiobutton in the same group. Radiobuttons are commonly used when users need to make a single choice from a predefined set of options, such as selecting a gender or choosing a payment method.
              </p>
            </div>
            <div class="article-image">
              <a href="https://www.figma.com/design/zJavukqccaSxJfIYMb2z4X/Cubigo-DS?node-id=1128-6482&t=l00MTz1vGS7FsvNM-11">
                <img src="/src/assets/radio-button-image.svg" alt="profile-card-image">
              </a>
            </div>
          </article>

          <article class="article-content">
            <div class="article-subheader">
              <h3>
                Checkbox
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                A checkbox allows users to select one or more options from a list of choices independently of each other. Each checkbox operates independently, and multiple checkboxes can be selected simultaneously. Checkboxes are typically used when users need to make multiple selections from a list of options, such as selecting multiple items from a shopping cart or choosing preferences in a settings menu.              </p>
            </div>
            <div class="article-image">
              <a href="https://www.figma.com/design/zJavukqccaSxJfIYMb2z4X/Cubigo-DS?node-id=1128-6482&t=l00MTz1vGS7FsvNM-11">
                <img src="/src/assets/checkbox-image.svg" alt="profile-card-image">
              </a>
            </div>
          </article>


          <div class="separator">
            <hr>
          </div>

          <article class="article-content">
            <div class="article-header">
              <h2>
                Accesibility
              </h2>
            </div>
            <div class="article-paragraph">
              <p>
                Ensure clear labeling for radiobutton options. Utilize semantic HTML elements and ARIA attributes for screen reader compatibility. Enable keyboard navigation for easy selection. Maintain sufficient color contrast and visible focus indicators. Implement error handling for unselected radiobuttons.
                <br><br>
                Provide descriptive labels for checkboxes. Utilize semantic HTML elements and ARIA attributes for screen reader compatibility. Enable keyboard navigation for easy selection. Maintain sufficient color contrast and visible focus indicators. Consider including a "Select All" option if applicable for enhanced usability.
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
  name: "OptionsView",
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

.article-content .article-image img {
  width: 800px;
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