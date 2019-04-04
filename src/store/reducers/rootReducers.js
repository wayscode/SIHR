import dummyReducer from './dummyReducer'
import authReducers from './authReducers'
import employeeReducers from './employeeReducers'
import kanbanReducers from './kanbanReducers'
import requestsReducers from './requestsReducers'
import informationReducers from './informationReducers'
import userReducers from './userReducers'
import JOReducers from './JOReducers'
import CandidateReducers from './CandidateReducers'
import interviewsReducers from './interviewsReducers'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
const rootReducers = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	auth: authReducers,
	user: userReducers,
	employee: employeeReducers,
	kanban: kanbanReducers,
	requests: requestsReducers,
	information: informationReducers,
	JO: JOReducers,
	Candidate: CandidateReducers,
	interviews: interviewsReducers,
	dummy: dummyReducer,
	
})

export default rootReducers