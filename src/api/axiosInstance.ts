import axios from 'axios';
import CONST from '@/utils/Constants';

const axiosInstance = axios.create({
	baseURL: `${CONST.BASE_API_URL}`,
});

export default axiosInstance;
