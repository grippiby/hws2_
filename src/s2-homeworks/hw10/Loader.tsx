import s from './Loader.module.css'
import { ReactComponent as Loading } from '../../svg/Spinner-1s-200px.svg'

export const Loader = () => (
	<div className={s.loader}>
		<Loading />
	</div>
)
/*export const Loader = () => <div className={s.loader}/>*/
