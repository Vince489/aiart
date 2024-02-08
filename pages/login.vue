<template>
  <div>
    <Login />
  </div>
</template>

<script setup>


const handleLogout = () => {
  fetch('http://localhost:4000/api/v1/user/logout', {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location.href = '/dashboard';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

</script>

<style scoped>

</style>