import React from 'react';

import classes from './Modal.module.css';

function Modal(props) {
	const hideModalHandler = () => {
		props.onHideModal();
	};

	return (
		<>
			<div className={classes.backdrop} />
			<dialog open className={classes.modal} onClick={hideModalHandler}>
				{props.children}
			</dialog>
		</>
	);
}

export default Modal;
