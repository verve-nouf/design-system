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
              <h1>Avatars</h1>
            </div>
            <div class="hero-title-contentblock">
              <p class="description">An avatar is a graphical or text representation that symbolizes an individual or a collective entity. It serves not only as a visual identifier but also provides supplementary details, including the person's status and ongoing activities.</p>
            </div>
          </div>
          <div class="hero-content-block">
          </div>

          <div class="separator">
            <hr>
          </div>

          <article class="article-content">
            <div class="article-header">
              <h2>Types</h2>
            </div>
            <div class="article-subheader">
              <h3>
                Resident avatars
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                A circle resident avatar image is a common design element used to represent a resident or entity within a digital interface. This circular image is often associated with profile pictures, user icons, or identifiers.
              </p>
            </div>
            <div class="article-image">
              <a href="https://www.figma.com/design/zJavukqccaSxJfIYMb2z4X/Cubigo-DS?node-id=1103-1378&t=l00MTz1vGS7FsvNM-4">
                <img src="/src/assets/avatar-residents-image.svg" alt="button-image">
              </a>
            </div>
          </article>

          <article class="article-content">
            <div class="article-subheader">
              <h3>
                Staff avatars
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                A circle resident avatar image is a common design element used to represent a staff member or entity within a digital interface. This circular image is often associated with profile pictures, user icons, or identifiers.
              </p>
            </div>
            <div class="article-image">
              <a href="https://www.figma.com/design/zJavukqccaSxJfIYMb2z4X/Cubigo-DS?node-id=1103-1378&t=l00MTz1vGS7FsvNM-4">
                <img src="/src/assets/avatar-staff-image.svg" alt="avatar-staff-image">
              </a>
            </div>
          </article>

          <article class="article-content">
            <div class="article-subheader">
              <h3>
                Family avatars
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                A circle resident avatar image is a common design element used to represent a family member or entity within a digital interface. This circular image is often associated with profile pictures, user icons, or identifiers.
              </p>
            </div>
            <div class="article-image">
              <a href="https://www.figma.com/design/zJavukqccaSxJfIYMb2z4X/Cubigo-DS?node-id=1103-1378&t=l00MTz1vGS7FsvNM-4">
               <img src="/src/assets/avatar-family-image.svg" alt="avatar-family-image">
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
  name: "OverviewView",
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