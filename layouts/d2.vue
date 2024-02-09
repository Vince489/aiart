import { useAuthStore } from '~/stores/authStore';

export default {
  data() {
    return {
      showMobileNav: false,
    };
  },
  computed: {
    isLoggedIn() {
      return useAuthStore().isAuthenticated;
    },
  },
  methods: {
    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav;
    },
    closeMobileNav() {
      this.showMobileNav = false;
    },
    logout() {
      useAuthStore().logout();
      this.$router.push('/');
    },
  },
  watch: {
    $route() {
      this.closeMobileNav();
    },
  },
};
