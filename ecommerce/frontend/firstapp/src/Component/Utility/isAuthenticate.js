export const isAuthenticated = props => {
    return localStorage.getItem("user_details") ? JSON.parse(localStorage.getItem("user_details")) : false
}