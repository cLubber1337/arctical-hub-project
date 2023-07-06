import { Modal } from "shared/ui/Modal/Modal"
import { Suspense } from "react"
import { LoginFormAsync } from "features/AuthByUsername/ui/LoginForm/LoginForm.async"
import { Loader } from "shared/ui/Loader/Loader"

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
}


export const LoginModal = ({ onClose, isOpen }: LoginModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}


