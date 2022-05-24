import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useInquiries() {
    const inquiries = ref([])
    const inquiry = ref([])
    const router = useRouter()
    const errors = ref('')

    const storeInquiry = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/inquiries', data)
            await router.push({name: 'inquiries.create'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    return {
        inquiries,
        inquiry,
        errors,
        storeInquiry,
    }
}
