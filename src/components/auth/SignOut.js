import { useNavigate } from 'react-router-dom'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import '../../Signout.css'

const SignOut = (props) => {
	const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
		signOut(user)
			.finally(() =>
				msgAlert({
					heading: 'Signed Out Successfully',
					message: messages.signOutSuccess,
					variant: 'success',
				})
			)
			.finally(() => navigate('/'))
			.finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

	return (
		<>
            <div className='row'>
                <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                    <h2>Are you sure you want to sign out?</h2>
                    <small>We hate to see you go...</small><br/>
                    
                        <button className='signOut' onClick={onSignOut}>
                            Sign Out
                        </button>
                        <button className='signOut' onClick={onCancel}>
                            Cancel
                        </button>
             
                </div>
            </div>
		</>
	)
}

export default SignOut
