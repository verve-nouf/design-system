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
              <h1>Dropdowns</h1>
            </div>
            <div class="hero-title-contentblock">
              <p class="description">Expandable list used to select options.</p>
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
                A dropdown is a user interface (UI) element that allows users to select an option from a list of choices within a digital interface. Dropdowns are useful for conserving space while providing multiple selection options.
              </p>
              <br>
              <p>
                They typically consist of a collapsed list that expands when clicked or tapped, displaying the available options for selection.
              </p>
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
                Dropdown
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                Buttons with ready to use Normal, Hover, Clicked, Loading and Disabled states. All for you to easily
                understand the magic of “States” layers within the symbols.
              </p>
            </div>
            <div class="article-image">
              <a href="https://www.figma.com/design/zJavukqccaSxJfIYMb2z4X/Cubigo-DS?node-id=199-4541&t=l00MTz1vGS7FsvNM-11">
                <img src="/src/assets/dropdown-image.svg" alt="button-image">
              </a>
            </div>
          </article>

          <article class="article-content">
            <div class="article-subheader">
              <h3>
                Dropdown subtitles
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                A dropdown with a subheader includes an additional descriptive label or title above the list of choices. This helps categorize or provide context for the options, making it easier for users to navigate and select the appropriate item.
              </p>
            </div>
            <div class="article-image">
              <a href="https://www.figma.com/design/zJavukqccaSxJfIYMb2z4X/Cubigo-DS?node-id=199-4541&t=l00MTz1vGS7FsvNM-11">
                <img src="/src/assets/dropdown-subtitles-image.svg" alt="button-image">
              </a>
            </div>
          </article>

          <article class="article-content">
            <div class="article-subheader">
              <h3>
                Split dropdown
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                A split dropdown combines a primary action button with a dropdown menu. The primary action can be triggered directly, while additional related options can be accessed through the dropdown, providing a flexible and efficient user experience.
              </p>
            </div>
            <div class="article-image">
              <a href="https://www.figma.com/design/zJavukqccaSxJfIYMb2z4X/Cubigo-DS?node-id=1108-2867&t=l00MTz1vGS7FsvNM-11">
                <img src="/src/assets/split-dropdown-image.svg" alt="button-image">
              </a>
            </div>
          </article>

          <article class="article-content">
            <div class="article-subheader">
              <h3>
                Date dropdown
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                A date dropdown is a user interface (UI) element that allows users to select a date from a list or calendar view. It simplifies date entry by providing an intuitive and organized way to choose a specific date, reducing the chance of input errors.
              </p>
            </div>
            <div class="article-image">
              <a href="https://www.figma.com/design/zJavukqccaSxJfIYMb2z4X/Cubigo-DS?node-id=1109-3295&t=l00MTz1vGS7FsvNM-11">
                <img src="/src/assets/date-dropdown-image.svg" alt="button-image">
              </a>
            </div>
          </article>

          <article class="article-content">
            <div class="article-subheader">
              <h3>
                Profile dropdown
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                A dropdown with a searchbar allows users to filter and search within the list of options. This is especially useful for long lists, enabling users to quickly find and select the desired item without scrolling through all the options.
              </p>
            </div>
            <div class="article-image">
              <a href="https://www.figma.com/design/zJavukqccaSxJfIYMb2z4X/Cubigo-DS?node-id=1110-628&t=l00MTz1vGS7FsvNM-11">
                <img src="/src/assets/profile-dropdown-image.svg" alt="button-image">
              </a>
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
                Opt for a single primary dropdown within a layout to emphasize the most important selection. In scenarios where multiple dropdowns share equal importance, ensure a uniform appearance by employing neutral backgrounds for all dropdowns.
                <br><br>
                When dealing with numerous minor selections, maintain a clean and uncluttered layout by applying outline, subtle, or transparent styles to all dropdowns. This helps prevent visual overwhelm and ensures a more organized and user-friendly interface.
              </p>
            </div>
            <div class="article-image">
              <img src="/src/assets/best-practice-dropdown.svg" alt="button-image">
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
  name: "DropdownsView",
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

.article-image img {
  width: 762px;
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