import { PropsWithChildren } from 'react';
import s from './commentsModal.module.css'
import { createPortal } from 'react-dom';

type CommentsModalProps = {
	isOpen: boolean;
	onClose: () => void;
}

const CommentsModal = ({ isOpen, onClose, children }: PropsWithChildren<CommentsModalProps>) => {
	if (!isOpen) return null;

	return createPortal(
		<div className={s.commentsmodal}>
			<div className={s.commentsmodal__content}>
				<button className={s.commentsmodal__closebutton} onClick={onClose}>
					&times;
				</button>
				{children}
			</div >
			<div className={s.commentsmodal__overlay} onClick={onClose}></div>
		</div >,
		document.body
	)
}

export default CommentsModal