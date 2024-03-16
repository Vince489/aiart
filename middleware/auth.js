export default defineNuxtRouteMiddleware((to) => {
  if (process.client) {
    // This code will only be executed on the client side
    // Retrieve data from local storage for the key "stat"
    const statData = localStorage.getItem('stat');

    // Log the retrieved data
    console.log('Data for "stat" in local storage:', statData);

    // Check if the retrieved data is null
    if (statData === null) {
      console.log('Nully')
      // Redirect to the login page
      const router = useRouter();
      router.push({ name: 'login' });

    }
    //
  }
});



  




