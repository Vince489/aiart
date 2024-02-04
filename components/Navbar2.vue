<template>
  <div>
    <nav>
      <!-- Navbar content goes here -->
    </nav>
    <div class="content">
      <!-- Page content goes here -->
    </div>
  </div>
</template>

<style scoped>
/* Additional styling specific to this component */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #333; /* Change the background color as needed */
  height: 60px; /* Adjust the height based on your design */
}

.content {
  padding-top: 60px; /* Adjust the value based on the navbar height */
}

@media (min-width: 768px) {
  .hidden {
    display: none !important;
  }
}
</style>
