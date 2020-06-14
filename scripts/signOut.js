import session from './../store/session.js';
export default function signOut(){
	let $session;
	const unsubscribe = session.subscribe(_session=>$session=_session);
	unsubscribe();

	
	//clears token, this will send the user to the SignInPage.
	if($session.user)
		$session.user.accessToken = "";

	//prevents instant signin after signout
	$session.automaticallySignIn = false;

	//push the changes
	session.set($session);
}