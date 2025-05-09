import { type IMenuItem } from "@/types/menu-d-type";

export const menu_data:IMenuItem[] = [
  {
    id:1,
    link:'/',
    title:'Home',
  },
  {
    id:2,
    link:'/shop',
    title:'Shop',
    drop_down:true,
    dropdown_menus:[
      {title:'Shop',link:'/shop'},
      {title:'Shop Details',link:'/product-details'},
      {title:'Shop Category',link:'/shop-categories'},
      {title:'Cart',link:'/cart'},
      {title:'Wishlist',link:'/wishlist'},
      {title:'Compare',link:'/compare'},
    ]
  },
  {
    id:3,
    link:'/about',
    title:'Pages',
    drop_down:true,
    dropdown_menus:[
      {title:'About',link:'/about'},
      {title:'Login',link:'/login'},
      {title:'Register',link:'/register'},
      {title:'Forgot',link:'/forgot'},
      {title:'Profile',link:'/profile'},
      {title:'Invoice',link:'/invoice'},
      {title:'Order',link:'/order'},
      {title:'Checkout',link:'/checkout'},
    ]
  },
  {
    id:4,
    link:'/coupons',
    title:'Coupons',
  },
  {
    id:5,
    link:'/blog',
    title:'Blog',
    drop_down:true,
    dropdown_menus:[
      {title:'Blog Standard',link:'/blog'},
      {title:'Blog Details',link:'/blog-details'},
    ]
  },
  {
    id:6,
    link:'/contact',
    title:'Contact',
  },
]
