import {useAuthStore} from "~/stores/authStore.js";

export default defineNuxtRouteMiddleware((to, _from) => {
    const authStore = useAuthStore()
    if (!authStore.isAuthenticated) {
        return navigateTo(to, '/login')
    }
})

