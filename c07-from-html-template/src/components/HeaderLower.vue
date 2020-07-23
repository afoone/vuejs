<template>
  <!-- Header Lower -->
  <div class="header-lower">
    <div class="auto-container">
      <div class="main-box clearfix">
        <!--Logo Box-->
        <div class="logo-box">
          <div class="logo">
            <a href="index.html">
              <img src="images/logo.png" alt />
            </a>
          </div>
        </div>
        <!--Nav Outer-->
        <div class="nav-outer clearfix">
          <!-- Main Menu -->
          <nav class="main-menu">
            <div class="navbar-header">
              <!-- Toggle Button -->
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>

            <div class="navbar-collapse collapse clearfix">
              <ul class="navigation clearfix">
                <li class="current dropdown">
                  <a href="#">Home</a>
                  <ul>
                    <li>
                      <a href="index.html">Homepage One</a>
                    </li>
                    <li>
                      <a href="index-2.html">Homepage Two</a>
                    </li>
                    <li class="dropdown">
                      <a href="#">Header Styles</a>
                      <ul>
                        <li>
                          <a href="index.html">Header Style One</a>
                        </li>
                        <li>
                          <a href="index-2.html">Header Style Two</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#">About</a>
                  <ul>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="appointment.html">Appointment</a>
                    </li>
                    <li>
                      <a href="gallery.html">Gallery</a>
                    </li>
                    <li>
                      <a href="gallery-detail.html">Gallery Detail</a>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#">Services</a>
                  <ul>
                    <li>
                      <a href="services.html">All Services</a>
                    </li>
                    <li>
                      <a href="service-detail.html">Message Therapy</a>
                    </li>
                    <li>
                      <a href="service-detail.html">Facial Treatment</a>
                    </li>
                    <li>
                      <a href="service-detail.html">Pedicure & Menicure</a>
                    </li>
                    <li>
                      <a href="service-detail.html">Salt and Oil Bath</a>
                    </li>
                    <li>
                      <a href="service-detail.html">Hair Treatments</a>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#">News</a>
                  <ul>
                    <li>
                      <a href="blog.html">Latest News</a>
                    </li>
                    <li>
                      <a href="blog-detail.html">News Detail</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <!-- Main Menu End-->

          <!--outer Box-->
          <div class="outer-box">
            <!-- Cart Btn -->
            <div class="cart-btn">
              <a href="shop.html" title>
                <i class="fa fa-shopping-basket"></i>
                <span class="count">0</span>
              </a>
            </div>

            <!--Search Box-->
            <div class="dropdown search-box-outer">
              <button
                class="search-btn dropdown-toggle"
                type="button"
                id="dropdownMenu3"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="fa fa-search"></span>
              </button>
              <ul class="dropdown-menu pull-right search-panel" aria-labelledby="dropdownMenu3">
                <li class="panel-outer">
                  <div class="form-container">
                    <form method="post" action="blog.html">
                      <div class="form-group">
                        <input
                          type="search"
                          name="field-name"
                          value
                          placeholder="Search Here"
                          required
                        />
                        <button type="submit" class="search-btn">
                          <span class="fa fa-search"></span>
                        </button>
                      </div>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--End outer Box-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>