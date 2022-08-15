import { createRouter, createWebHistory } from 'vue-router';
/* import Home from "./views/home.vue"; */
/* import about from "./views/about.vue"; */
import User from "./views/User.vue";
import UserProfile from './views/UserProfile.vue';
import UserConfig from './views/UserConfig.vue';
import login from "./views/login.vue";
import NotFound from "./views/NotFound.vue";

const Home = () => import("./views/home.vue"); /* adiciona la ruta de forma dinamica */
const about  = () => import("./views/about.vue");
const Product =() => import("./views/Product.vue");

const beforeEnterHook = (to)=> {
   /*  console.log("Path: " + to.path); */
}
/* beforeenterhook ejecuta el valor path antes de cargar la pagina, para hacer validcacion de rutas */
const routes= [
    {
            path: "/",
            name: "Home",
            component: Home,
            beforeEnter: [beforeEnterHook]
    },
    {
        path: "/about",
        name: "about",
        component: about,
    },
    {
        path:"/login",
        name : "login",
        component: login,
    },
    {
        path:"/users/:id",/* el users te manda a otra ubic y el id es un parametro variable que se le añade*/
        name:"User",
        component: User,
        children: [
            {/* users/sergio/profile */
                path:'profile',
                component: UserProfile
            },
            {
                path:'config',
                component: UserConfig
            },
        ],
    },
    {
        path:"/product",
        name: "Product",
        component: Product,
    }, 
    {
        path: "/:pathMatch(.*)*", /* significa todas las rutas */
        name: "NotFound",
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

router.beforeEach((to, from, next)=>{
/* to hacia donde navego, form de donde vengo, next validaciones redireccionas */
let isAuthtenticated = true;
if(to.name !== "login" && !isAuthtenticated  ){
        next({ name: "login"});
    } else {
        next();
    }
    /* si el name no está en el login y no está autenticado, llevar al login, caso contratrio next */
});


export default router;