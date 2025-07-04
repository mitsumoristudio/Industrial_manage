
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../urlconstants";


const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL
});

export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes: ["products", "orders", "users"],
    endpoints: (builder) =>({

    })
})