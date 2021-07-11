import { toast } from 'react-toastify';


const notify = (text, type) => {
	switch(type){
		case "wishlistAuth":
			return toast("В Избранное могут добавлять только авторизированные пользователи", {
	            position: "top-right",
	            autoClose: 3000,
	            hideProgressBar: true,
	            closeOnClick: true,
	            pauseOnHover: true,
	            draggable: true,
	            progress: undefined,
	        	}
    		)

		default:
			return toast(text, {
	            position: "top-right",
	            autoClose: 3000,
	            hideProgressBar: true,
	            closeOnClick: true,
	            pauseOnHover: true,
	            draggable: true,
	            progress: undefined,
	        	}
    		)
	}
}
export default notify;
