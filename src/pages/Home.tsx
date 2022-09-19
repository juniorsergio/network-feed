import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

import Feed from '../components/Feed/Feed'
import Signup from '../components/Signup/Signup'
import * as UserActions from '../actions/user';

import { GlobalStyles, Header } from '../styles/global'
import { Store } from '../redux'

interface HomeProps {
	username: string,
    signOutUser: () => void
}

function Home({ username, signOutUser }: HomeProps) {	
	function handleSignOut(){
		signOutUser()
	}
	
	return (
		<>
			{ username === ''
				? <Signup />
				: (
					<>
						<Header>
							<h1>CodeLeap Network</h1>
							<button onClick={handleSignOut}>Logout</button>
						</Header>
						<Feed />
					</>
				)
			}
			<GlobalStyles />
		</>
	)
}

const mapStateToProps = (store: Store) => ({
	username: store.user.name
})

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators(UserActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)