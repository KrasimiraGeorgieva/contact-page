import { createRouter, createWebHistory } from "vue-router";

import InquiryCreate from '../components/inquiries/InquiryCreate'

const routes = [
    {
        path: '/contact',
        name: 'inquiries.create',
        component: InquiryCreate
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})

