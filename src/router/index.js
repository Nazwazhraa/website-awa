import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import Brand from "../views/Brand.vue";
import Category from "../views/Category.vue";
import Produk from "../views/Produk.vue";
import singleproduk from "../views/SingleProduk.vue";
import Profile from "../views/Profile.vue";

function cekToken(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("token")) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next();
  } else {
    next("/login");
  }
}


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter: cekToken,
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    beforeEnter: cekToken,
    component: Register,
  },
  {
    path: "/brand",
    name: "Brand",
    component: Brand,
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
  },
  {
    path: "/produk/:id",
    name: "SingleProduk",
    component: singleproduk,
  },
  {
    path: "/profile",
    name: "Profile",
    beforeEnter: cekToken,
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
