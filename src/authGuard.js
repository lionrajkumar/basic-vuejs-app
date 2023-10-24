import authService from "@/authService";

const authGuard = (to, from, next) => {
    if (authService.isAuthenticated()) {
        next();
    } else {
        next('/login');
    }
};
export default authGuard;