import './Loader.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface LoaderProps {
    className?: string
}


export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames('loadingio-spinner-ellipsis-6uwfotzg8fh', {}, [className])}>
      <div className="ldio-h4z02b0g22">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}


