import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseURL'
// import { getOrderByEmail } from '../../../../../backend/src/orders/order.controller'



const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery:fetchBaseQuery({
        baseUrl:`${getBaseUrl()}/api/orders`,
        credentials:'include',
    }),
    tagTypes:['Orders'],
    endpoints:(builder)=>({
        createOrder:(builder.mutation) ({
            query:(newOrder)=>({
                url:"/",
                method:"POST",
                body:newOrder,
                credentials:'include',
            })
        }),
        // getOrderByEmail:(builder.query) ({
        //     query:(email)=>({
        //         url:`/email/${email}`
        //     }),
        //     providesTags:['orders']
            
        // })
    })
    
})

export const {useCreateOrderMutation} = ordersApi;
export default ordersApi;