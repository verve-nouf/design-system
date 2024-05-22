<template>
  <div class="hamburger-menu">
    <img @click="toggleSidebar" src="/src/assets/hamburger-open.svg" alt="" srcset="">
  </div>
  <div class="sidebar" :class="{ 'open': isSidebarOpen }">
    <div class="sidebar-content">
      <div class="sidebar-logo">
        <router-link to="/">
          <img src="/src/assets/cubigo-logo.svg" alt="cubigo-logo">
        </router-link>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="Search...">
      </div>
      <div class="sidebar-separator">
        <hr>
      </div>

      <div class="sidebar-items">
        <!-- here -->
        <input type="checkbox" id="item2-toggle" class="toggle-checkbox">
        <div class="item" id="item2">
          <label for="item2-toggle" class="item-label">
            <div class="item-header">
              <h3>Overview</h3>
              <div class="indicator-icon">
                <img src="/src/assets/indicator-closed.svg" alt="indicator-closed-image">
              </div>
            </div>
          </label>
          <div class="sub-items">
            <div class="sub-item">
              <router-link to="/started">
                <a class="active">
                  Get Started
                </a>
              </router-link>
            </div>
            <div class="sub-item">
              <router-link to="/design">
                <a class="active">
                  Design
                </a>
              </router-link>
            </div>
          </div>
        </div>

        <input type="checkbox" id="item3-toggle" class="toggle-checkbox">
        <div class="item" id="item3">
          <label for="item3-toggle" class="item-label">
            <div class="item-header">
              <h3>Icons</h3>
              <div class="indicator-icon">
                <img src="/src/assets/indicator-closed.svg" alt="indicator-closed-image">
              </div>
            </div>
          </label>
          <div class="sub-items">
            <div class="sub-item">
              <router-link to="/frontoffice-icons">
                <a class="active">
                  Front-office
                </a>
              </router-link>
            </div>

            <div class="sub-item">
              <router-link to="/backoffice-icons">
                <a class="active">
                  Back-office
                </a>
              </router-link>
            </div>

          </div>
        </div>

        <input type="checkbox" id="item5-toggle" class="toggle-checkbox">
        <div class="item" id="item5">
          <label for="item5-toggle" class="item-label">
            <div class="item-header">
              <h3>Fonts</h3>
              <div class="indicator-icon">
                <img src="/src/assets/indicator-closed.svg" alt="indicator-closed-image">
              </div>
            </div>
          </label>
          <div class="sub-items">
            <div class="sub-item">
              <router-link to="/frontoffice-icons">
                <a class="active">
                  Brand
                </a>
              </router-link>
            </div>

            <div class="sub-item">
              <router-link to="/frontoffice-icons">
                <a class="active">
                  Application
                </a>
              </router-link>
            </div>
          </div>
        </div>


        <input type="checkbox" id="item1-toggle" class="toggle-checkbox">
        <div class="item" id="item1">
          <label for="item1-toggle" class="item-label">
            <div class="item-header">
              <h3>Components</h3>
              <div class="indicator-icon">
                <img src="/src/assets/indicator-closed.svg" alt="indicator-closed-image">
              </div>
            </div>
          </label>
          <div class="sub-items">
            <div class="sub-item">
              <router-link to="/avatar">
                <a class="active">
                  Avatars
                </a>
              </router-link>
            </div>
            <div class="sub-item">
              <router-link to="/breadcrumbs">
                <a class="active">
                  Breadcrumbs
                </a>
              </router-link>
            </div>
            <div class="sub-item">
              <router-link to="/buttons">
                <a class="active">
                  Buttons
                </a>
              </router-link>
            </div>
            <div class="sub-item">
              <router-link to="/inputs">
                <a class="active">
                  Cards
                </a>
              </router-link>
            </div>
            <div class="sub-item">
              <router-link to="/inputs">
                <a class="active">
                  Company logos
                </a>
              </router-link>
            </div>
            <div class="sub-item">
              <router-link to="/inputs">
                <a class="active">
                  Cubes
                </a>
              </router-link>
            </div>
            <div class="sub-item">
              <router-link to="/inputs">
                <a class="active">
                  Dropdowns
                </a>
              </router-link>
            </div>
            <div class="sub-item">
              <router-link to="/inputs">
                <a class="active">
                  Footer
                </a>
              </router-link>
            </div>
            <div class="sub-item">
              <router-link to="/inputs">
                <a class="active">
                  Forms
                </a>
              </router-link>
            </div>
            <div class="sub-item">
              <router-link to="/inputs">
                <a class="active">
                  Grid
                </a>
              </router-link>
            </div>
            <div class="sub-item">
              <router-link to="/inputs">
                <a class="active">
                  Inputs
                </a>
              </router-link>
            </div>
            <div class="sub-item">
              <router-link to="/inputs">
                <a class="active">
                  Notifications
                </a>
              </router-link>
            </div>
            <div class="sub-item">
              <router-link to="/inputs">
                <a class="active">
                  Options
                </a>
              </router-link>
            </div>
            <div class="sub-item">
              <router-link to="/inputs">
                <a class="active">
                  Pageheader
                </a>
              </router-link>
            </div>
            <div class="sub-item">
              <router-link to="/inputs">
                <a class="active">
                  Pills
                </a>
              </router-link>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
};

</script>

<style scoped>
.sidebar {
  padding: 0;
  margin: 0;
  position: fixed;
  height: 100vh;
  border: 0.5px solid #DFDFDF;
  box-shadow: 1px 0 4px 0 rgba(0, 0, 0, 0.25);
  overflow-y: scroll;

}

.sidebar.open {
  display: block;
  background-color: white;
}

.sidebar.open .sidebar-content {
  width: 70vw;
}


::placeholder {
  color: black;
}

.sidebar-logo {
  margin-top: 25px;
  margin-bottom: 25px;
}

input {
  color: black;
}

.search-bar input {
  height: 36px;
  width: 100%;
  border-radius: 50px;
  background-color: transparent;
  border: solid 1px #000000;
  padding-left: 15px;
  font-family: Lato, "sans-serif";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: black !important;
}

.sidebar-separator {
  margin-top: 30px;
  margin-bottom: 45px;
}

.sidebar-items .item {
  margin: 8px 0;
}

.sidebar-items .toggle-checkbox {
  display: none;
}

.sidebar-items .indicator-icon img {
  transition: transform 0.3s ease;
}

.sidebar-items .toggle-checkbox:checked + .item .indicator-icon img {
  transform: rotate(90deg);
}

.sidebar-items .toggle-checkbox:checked + .item .sub-items {
  display: block;
}


.sidebar-items .sub-items {
  display: none;
}

.sidebar-items .item h3 {
  margin: 0;
  cursor: pointer;
}

.sidebar-items .item-header {
  display: flex;
  align-items: center;
}

.sidebar-items .indicator-icon {
  margin-left: auto;
}

.sidebar-items .indicator-icon img {
  width: 12px;
}

.sidebar-items .sub-item {
  margin: 8px 0;
}

.sidebar-content {
  padding: 0 32px 0 32px;
  width: 20vw;
}

.item-header h3 {
  color: #000;
  font-family: Lato, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.indicator-icon img {
  height: 15px;
}

.item-header:hover h3 {
  color: #0092E1;
}


.sub-items .sub-item {
  color: #0092E1;
  font-family: Lato, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

}

.sub-items .sub-item a {
  font-weight: 300;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  color: black;
  padding: 3px 6px;
}


.sub-item:hover a {
  background-color: #1990EA;

  border-radius: 100px;
  color: white;
}


.sidebar-items .sub-items {
  display: block;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
}

.sidebar-items .toggle-checkbox:checked + .item .sub-items {
  max-height: 1000px;
}

.sidebar-items .toggle-checkbox:not(:checked) + .item .sub-items {
  max-height: 0;
}

.item {
  padding-bottom: 15px;
}


@media only screen and (max-width: 431px) {
  .sidebar {
    display: none;
  }
}


@media only screen and (min-width: 431px) {
  .hamburger-menu {
    display: none;
  }
}


@media only screen and (max-width: 430px) {
  .hamburger-menu {
    margin-left: 88vw;
    margin-top: 25px;
    z-index: 100;
    position: absolute;
  }

  .hamburger-menu img {
    width: 35px;
  }

}

@media only screen and (max-width: 768px) {
  .sidebar-content {
    width: 30vw;
  }
}

@media only screen and (max-width: 820px) {

  .sidebar-content {
    width: 35vw;
  }
}

@media only screen and (min-width: 2000px) {
  .sidebar-logo img {
    width: 180px;
  }

  .item-header h3 {
    color: #000;
    font-family: Lato, sans-serif;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .item-header img {
    width: 25px;
  }

  .search-bar input {
    height: 60px;
    font-size: 1rem;
  }

  .sub-items .sub-item {
    font-size: 1.5rem;
  }


}
</style>
