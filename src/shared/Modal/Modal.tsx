import {
    FC, ReactNode, MouseEvent, useState, useRef, useEffect, useCallback,
} from 'react';
import cn from 'classnames'
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal: FC<PortalProps> = (props) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};

interface ModalProps {
    className?: string;
    children?: ReactNode
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = ({
    className, children, isOpen, onClose, lazy,
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onKeyDown = useCallback((e: any) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    if (lazy && !isMounted) return null;

    return (
        <Portal>
            <div className={cn(styles.Modal, mods, [className])}>
                <div
                    className={styles.overlay}
                    onClick={closeHandler}
                >
                    <div className={styles.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
