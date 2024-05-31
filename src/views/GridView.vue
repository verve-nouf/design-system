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
              <h1>Grid</h1>
            </div>
            <div class="hero-title-contentblock">
              <p class="description">Layout system for organizing content in a structured format.</p>
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
                A grid is a user interface (UI) layout system used to organize content in a structured format within a digital interface. Grids help in aligning elements consistently and creating a visually appealing design.
              </p>
              <br>
              <p>
                They typically consist of rows and columns that arrange content into a cohesive, easy-to-navigate layout.
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
                Directory grid header
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                The purpose of a grid header is to provide descriptive labels for the columns in a grid. Grid headers typically contain titles or headings that represent the data within each column, helping users understand the content and context of the information presented in the grid. Grid headers serve as a reference point for users to identify and interpret the data in the grid, facilitating easier navigation and comprehension.
              </p>
            </div>
            <div class="article-image">
              <a href="https://www.figma.com/design/zJavukqccaSxJfIYMb2z4X/Cubigo-DS?node-id=1120-5310&t=l00MTz1vGS7FsvNM-11">
                <img src="/src/assets/directory-grid-header-image.svg" alt="profile-card-image">
              </a>
            </div>
          </article>


          <article class="article-content">
            <div class="article-subheader">
              <h3>
                Directory grid row
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                The purpose of a grid row is to organize and display individual records or data entries within the grid. Each row in the grid represents a distinct data entity, with each cell within the row containing specific data values corresponding to the columns defined in the grid header. Grid rows enable users to view and interact with individual data entries, facilitating tasks such as data entry, editing, sorting, and filtering within the grid. Grid rows provide a structured and organized layout for presenting tabular data, enhancing usability and efficiency for users interacting with the grid.              </p>
            </div>
            <div class="article-image">
              <a href="https://www.figma.com/design/zJavukqccaSxJfIYMb2z4X/Cubigo-DS?node-id=1120-5310&t=l00MTz1vGS7FsvNM-11">
                <img src="/src/assets/directory-grid-row.svg" alt="profile-card-image">
              </a>
            </div>
          </article>

          <article class="article-content">
            <div class="article-subheader">
              <h3>
                Incoming grid header
              </h3>
            </div>
            <div class="article-image">
              <a href="https://www.figma.com/design/zJavukqccaSxJfIYMb2z4X/Cubigo-DS?node-id=1120-5310&t=l00MTz1vGS7FsvNM-11">
                <img src="/src/assets/incoming-grid-header.svg" alt="profile-card-image">
              </a>
            </div>
          </article>

          <article class="article-content">
            <div class="article-subheader">
              <h3>
                Incoming grid row
              </h3>
            </div>
            <div class="article-image">
              <a href="https://www.figma.com/design/zJavukqccaSxJfIYMb2z4X/Cubigo-DS?node-id=1120-5310&t=l00MTz1vGS7FsvNM-11">
                <img src="/src/assets/incoming-grid-row.svg" alt="profile-card-image">
              </a>
            </div>
          </article>

          <article class="article-content">
            <div class="article-subheader">
              <h3>
                Toolbar header
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                The purpose of toolbar header is to filter through data and display this in a grid.
              </p>
            </div>
            <div class="article-image">
              <a href="https://www.figma.com/design/zJavukqccaSxJfIYMb2z4X/Cubigo-DS?node-id=1120-5310&t=l00MTz1vGS7FsvNM-11">
                <img src="/src/assets/toolbar-header.svg" alt="profile-card-image">
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
                Enable keyboard navigation so users can navigate through the grid using the tab and arrow keys. Maintain logical tab order and ensure visible focus indicators. Users should be able to move between cells and headers seamlessly.
                Maintain sufficient color contrast between text, background, and borders within the grid to ensure readability for users with visual impairments. Avoid relying solely on color to convey information and use additional visual cues like borders or patterns.
                <br><br>
                All interactive elements are keyboard-navigable with clear focus indicators. Images include descriptive alt text, and the design avoids relying solely on color to convey information, ensuring usability for individuals with color blindness. The card is also responsive, adapting to various screen sizes and orientations. This approach ensures that all users, regardless of their abilities, can easily access and understand the information presented.
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
  name: "GridView",
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