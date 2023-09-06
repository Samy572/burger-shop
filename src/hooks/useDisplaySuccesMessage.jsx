import { useState } from 'react';
// Use in AddForm
export const useSuccesMessage = () => {
	// State
	const [isSubmitted, setIsSubmitted] = useState(false);

	// Comportement
	const displaySuccessMessage = () => {
		setIsSubmitted(true);
		setTimeout(() => {
			setIsSubmitted(false);
		}, 2000);
	};
	return { isSubmitted, displaySuccessMessage };
};
