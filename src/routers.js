import mainstorytrue from "@/components/mainstorie";
import mainstory from "@/components/psw999999";


export const routes=[
    {path:'',component:mainstory},
    {path:'/true',component:mainstorytrue,children:[
        ]},//传递值
]