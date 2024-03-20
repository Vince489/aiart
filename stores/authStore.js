import {defineStore} from "pinia";
import {ref} from "vue";

export const useAuthStore = defineStore("authStore", () => {
    const isAuthenticated = ref(false)
    const accessToken = ref(null)
    const currentUser = ref(null)

    function setAuthenticated(currentUserData, token, auth) {
        isAuthenticated.value = auth
        currentUser.value = currentUserData
        accessToken.value = token
    }

    async function $login(userName, password) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch('https://zplogin-production.up.railway.app/api/v1/user/login', {
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + accessToken.value,
                    },
                    body: JSON.stringify({
                        userName: userName,
                        password: password,
                    }),
                });
                const data = await response.json();
                if (!response.ok) {
                    reject(data.message)
                    throw new Error(data.message);
                }

                // Set user data and authentication status
                // await this.setUserData(data.user); // Wait for setting state to complete

                setAuthenticated(data.user, data.token, data.user.isAuthenticated)
                return resolve(data)
            } catch (error) {
                console.error('Error logging in:', error);
                reject(error)
                throw error;
            }
        })
    }

    // reset current store
    function $reset() {
        isAuthenticated.value = false
        currentUser.value = null
        accessToken.value = null
    }

    return {isAuthenticated, currentUser, setAuthenticated, $reset, accessToken, $login}
}, {
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: "strict"
        })
    }
})