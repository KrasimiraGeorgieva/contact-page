require('./bootstrap');

import { createApp } from "vue";
import router from './router'
import InquiryCreate from "./components/inquiries/InquiryCreate.vue";

createApp({
    components: {
        InquiryCreate,
    }
}).use(router).mount('#app')
